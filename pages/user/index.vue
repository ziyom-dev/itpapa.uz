<template>
    <div v-if="authStore.user">
        <div class="container">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb onmalika-breadcrumb">
                    <li class="breadcrumb-item">
                        <NuxtLink to="/">Главная</NuxtLink>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">Профиль</li>
                </ol>
            </nav>
        </div>
        <section>
            <div class="container">
                <h1>Профиль</h1>
                <div class="row">
                    <UserComponentsDashboardList />
                    <div class="col-lg-10  col-xl-10">
                        <div class="onmalika-user-settings">
                            <form>
                                <div class="row">
                                    <div class="col-6 mb-3">
                                        <label for="userChangeName" class="form-label">Ваше имя</label>
                                        <input v-model="name" type="text" class="form-control" id="userChangeName">
                                    </div>
                                    <div class="col-6 mb-3">
                                        <label for="userChangeSurName" class="form-label">Ваша фамилия</label>
                                        <input v-model="surname" type="text" class="form-control" id="userChangeSurName">
                                    </div>
                                    <div class="col-6 mb-3">
                                        <label for="userChangeNumber" class="form-label">Ваш номер</label>
                                        <input v-model="number" type="text" class="form-control" id="userChangeNumber">
                                    </div>
                                    <div class="col-6 mb-3">
                                        <label for="userChangeNumber" class="form-label">Ваш email</label>
                                        <input v-model="email" type="email" class="form-control" id="userChangeNumber">
                                    </div>
                                </div>
                                <div class="btn-group" role="group" aria-label="Basic example">
                                    <button type="submit" @click.prevent="changeData" class="btn dark-cover"> Применить
                                        изменения</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    </div>
</template>
<script setup>

import { useAuthStore } from '~/store/auth';
const authStore = useAuthStore();
const token_access = useCookie('token_access');

const name = ref(authStore.user.first_name);
const surname = ref(authStore.user.last_name);
const number = ref(authStore.user.phone_number);
const email = ref(authStore.user.email);

const changeData = async () => {

    const resp = await useJsonPlaceholderData('/user/', {
        method: "PUT",
        headers: {
            Authorization: `Bearer ${token_access.value}`
        },
        body: {
            id: authStore.user.id,
            username: authStore.user.username,
            first_name: name.value,
            last_name: surname.value,
            phone_number: number.value,
            email: email.value,

        }
    })
    console.log(resp)
    location.reload()
}
definePageMeta({
    middleware: 'auth'
})
useHead({
    title: "Кабинет",
    meta: [

    ],
})
</script>

