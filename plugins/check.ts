
import { useAuthStore } from '~/store/auth'

export default defineNuxtPlugin(async (nuxtApp) => {
    const authStore = useAuthStore();
    const token_access = useCookie('token_access');
    const token_refresh = useCookie('token_refresh');

    if (token_access.value) {
        try {
            const getUser = await useJsonPlaceholderData('/user/', {
                headers: {
                    Authorization: `Bearer ${token_access.value}`
                }
            });

            if (getUser.error.value && getUser.error.value.statusCode != 200) {
                const getNewAccess = await useJsonPlaceholderData('/token/refresh/', {
                    method: 'POST',
                    body: {
                        refresh: token_refresh.value
                    }
                });

                token_access.value = getNewAccess.data.value.access;

                if (getNewAccess.status.value === 'success') {
                    const getNewData = await useJsonPlaceholderData('/user/', {
                        headers: {
                            Authorization: `Bearer ${token_access.value}`
                        }
                    });
                    authStore.login(getNewData.data.value);
                } else {
                    authStore.isAuthenticated = false;
                    authStore.logout()
                }
            } else {
                authStore.login(getUser.data.value);
            }
        } catch (error) {
            if (error instanceof TypeError && error.message.includes('access')) {
                token_access.value = undefined
                token_refresh.value = undefined
            }

            authStore.logout();
            authStore.isAuthenticated = false;
        }
    } else {
        authStore.isAuthenticated = false;
        authStore.logout()

    }
});
