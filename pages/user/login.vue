<template>
    <div>
        <div class="container">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb onmalika-breadcrumb">
                    <li class="breadcrumb-item">
                        <NuxtLink to="/">Главная</NuxtLink>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">Авторизация</li>
                </ol>
            </nav>
        </div>
        <section>
            <div class="container">


                <div class="onmalika-auth">
                    <div v-if="errorMessage" class="alert text-center alert-danger">{{ errorMessage }}</div>
                    <div class="user-form">
                        <div class="text-center mb-5">
                            <img src="/img/mini-logo.svg" alt="">
                        </div>
                        <form @submit.prevent="sendCode" :class="{ 'd-none': isSend }">
                            <div class="mb-3">

                                <input autocomplete="username" placeholder="Введите ваш номер" type="tel"
                                    class="form-control" v-model="number" id="userLogin" aria-describedby="userHelp"
                                    required>

                            </div>
                            <button type="submit" class="btn dark-cover justify-content-center w-100">Получить код</button>
                        </form>
                        <div :class="{ 'd-none': !isSend }">
                            <form @submit.prevent="authUserbyLogin">
                                <div class="mb-4" style="display: flex; flex-direction: row; justify-content:  center;">
                                    <v-otp-input ref="otpInput" v-model="bindModal" input-classes="otp-input" separator=""
                                        :num-inputs="6" value="" :should-auto-focus="true" input-type="letter-numeric"
                                        :conditionalClass="['one', 'two', 'three', 'four']"
                                        :placeholder="['*', '*', '*', '*', '*', '*']" @on-complete="handleOnComplete" />
                                </div>
                                <button type="submit"
                                    class="btn dark-cover justify-content-center mb-3 w-100">Войти</button>

                                <div class="text-center" v-if="!canResend">Повторная отправка кода возможна через: {{ timer
                                }} секунд</div>
                                <button v-else @click="resendCode"
                                    class="btn dark-cover justify-content-center w-100">Отправить код еще
                                    раз</button>

                            </form>
                        </div>


                    </div>
                </div>

            </div>
        </section>
    </div>
</template>

<script setup>
import VOtpInput from "vue3-otp-input";
import { useAuthStore } from '~/store/auth'
const router = useRouter();
const route = useRoute();
const errorMessage = ref('');
const authStore = useAuthStore();
const number = ref('');

const timer = ref(60);
let timeoutId = null;
const canResend = ref(false);
const token = ref()
const isSend = ref(false)
const otpInput = ref(null);
const bindModal = ref("");
const otpValue = ref("")
const isRegistered = ref()
const handleOnComplete = (value) => {
    otpValue.value = value
};
const sendCode = async () => {

    try {
        const response = await useJsonPlaceholderData('/user/auth/', {
            cache: false,
            method: 'POST',
            body: { phone_number: number.value },
        });
        if (response.error && response.error.value && response.error.value.statusCode == 418) {
            alert("Неверный формат номера телефона")
            number.value = '';

        } else {
            handleResponse(response)
            isSend.value = true
        }
    }
    catch (e) {
        console.error('Ошибка получения пользователя', e);
    }
}
function startTimer(duration) {
    timer.value = duration;
    canResend.value = false;
    timeoutId = setInterval(() => {
        if (timer.value > 0) {
            timer.value -= 1;
        } else {
            clearInterval(timeoutId);
            canResend.value = true;
        }
    }, 1000);
}

function handleResponse(response) {
    if (response.error && response.error.value && response.error.value.data.timeout) {
        startTimer(response.error.value.data.timeout);
    } else {
        isSend.value = true;
        startTimer(60);
    }
}

async function resendCode() {
    try {
        const response = await useJsonPlaceholderData('/user/auth/', {
            cache: false,
            method: 'POST',
            body: { phone_number: number.value },
        });

        startTimer(60);
    }
    catch {

    }


}


const authUserbyLogin = async () => {
    try {
        if (otpValue.value.length == 6) {
            const response = await useJsonPlaceholderData('/user/auth/', {
                cache: false,
                method: 'PUT',
                body: { phone_number: number.value, otp: otpValue.value },
            });
            if (response.status.value === 'success') {
                const token_access = useCookie('token_access')
                const token_refresh = useCookie('token_refresh')
                function work(par1, par2, par3) {
                    par1.value = response.data.value.access
                    par2.value = response.data.value.refresh
                    par3.value = response.data.value.created
                }
                work(token_access, token_refresh, isRegistered)
                token.value = response.data.value.access

                const getUser = await useJsonPlaceholderData('/user/', {
                    cache: false,
                    headers: {
                        Authorization: `Bearer ${token.value}`
                    }
                })

                authStore.login(getUser.data.value)
                number.value = '';
                otpValue.value = '';
                const redirect = route.query.redirect;
                if (redirect === 'cart') {
                    await router.push('/checkout');
                } else if (redirect === 'checkout') {
                    await router.push('/checkout');
                } else {
                    if (isRegistered.value == false) {
                        await router.push('/user');
                    } else {
                        await router.push('/user/settings');

                    }
                }
                location.reload()


            } else {
                errorMessage.value = 'Вы ввели неправильный код';
                otpInput.value.otp = ['', '', '', '', '', '']
                console.log(otpInput)
            }
        } else {
            alert('Нет, тут не 6')
        }

    }
    catch (e) {
        console.error('Ошибка аутентификации', e);
        number.value = '';
        otpValue.value = '';
    }
}
onMounted(() => {
    const isAuthenticated = authStore.isAuthenticated;

    if (isAuthenticated) {
        router.push('/user');
    }
});
useSeoMeta({
    title: 'Авторизация'
})

</script>
