import { setCookie } from 'h3'

export default defineEventHandler((event) => {
    setCookie(event, 'token_access', '', { maxAge: 0, path: '/' });
    setCookie(event, 'token_refresh', '', { maxAge: 0, path: '/' });

    // Возвращаем ответ, что пользователь вышел из системы
    return { message: 'Logged out' }
});