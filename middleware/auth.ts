import { useAuthStore } from '~/store/auth';

export default defineNuxtRouteMiddleware(async (to, from) => {
    const authStore = useAuthStore();
    const token_access = useCookie('token_access');
    const token_refresh = useCookie('token_refresh');



    function parseJwt(token: string) {
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        const jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
        return JSON.parse(jsonPayload);
    }
    const token = token_access.value;
    function isTokenExpired(token: string | null | undefined) {
        if (!token) return true;

        const decoded = parseJwt(token);
        const currentTime = Date.now().valueOf() / 1000;
        return decoded.exp <= currentTime;
    }

    function isValidToken(token: string) {
        if (!token) return false;

        const decoded = parseJwt(token);
        const currentTime = Date.now().valueOf() / 1000;
        return decoded.exp > currentTime;
    }

    async function refreshToken() {
        if (isTokenExpired(token_refresh.value)) {

            return false;
        }

        try {
            const response = await useJsonPlaceholderData('/token/refresh/', {
                method: 'POST',
                body: {
                    refresh: token_refresh.value
                }
            });

            if (response.data && response.data.value && response.data.value.access) {
                token_access.value = response.data.value.access;
                return true;
            } else {

                return false;
            }
        } catch (error) {
            console.log(error)
            return false;
        }
    }

    async function verifyToken(token: string | null | undefined) {
        try {
            const response = await useJsonPlaceholderData('/token/verify/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ token: token })
            });

            if (response.data.value === null) {

                return false; // Пример, нужно адаптировать в зависимости от формата ответа сервера
            }

            return true;
        } catch (error) {
            console.log('Error verifying token:', error);
            return false;
        }
    }


    if (to.path === '/user/login') {
        // Если пользователь уже аутентифицирован, перенаправляем его в личный кабинет
        if (authStore.isAuthenticated || (token_access.value && isValidToken(token_access.value))) {
            // Перенаправление аутентифицированного пользователя на главную страницу
            return navigateTo('/user');
        }
        // Если пользователь не аутентифицирован, ничего не делаем
        return;
    }
    // if (!authStore.isAuthenticated || !isValidToken(token_access.value)) {
    if (!authStore.isAuthenticated) {

        const tokenIsValid = await verifyToken(token_access.value);
        if (!tokenIsValid) {
            const isRefreshed = await refreshToken();

            if (!isRefreshed) {
                try {
                    await $fetch('/api/logout');
                } catch (error) {
                    console.error('Ошибка при выходе из системы', error);
                }
                authStore.logout();
                return navigateTo('/user/login');


            }
        }
    }



})
