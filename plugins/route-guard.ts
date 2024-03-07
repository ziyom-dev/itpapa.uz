
import { useAuthStore } from '~/store/auth'

export default defineNuxtPlugin((nuxtApp) => {
    const authStore = useAuthStore();
    const token_access = useCookie('token_access');
    const router = useRouter();
    router.beforeEach((to, from, next) => {
        if (!token_access.value) {
            authStore.logout();
            if (to.path === '/user') {
                next('/user/login');
            } else {
                next();
            }
        } else {
            next();
        }
    });
});