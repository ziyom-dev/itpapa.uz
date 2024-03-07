<template>
    <div>

        <div class="container">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb onmalika-breadcrumb">
                    <li class="breadcrumb-item">
                        <NuxtLink to="/">Главная</NuxtLink>
                    </li>
                    <li class="breadcrumb-item">
                        <NuxtLink to="/user">Профиль</NuxtLink>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">Избранные</li>
                </ol>
            </nav>

        </div> <!-- container //  -->

        <section class="padding-y">
            <div class="container" v-if="authStore.user">
                <h1>Избранные</h1>
                <div class="row">
                    <UserComponentsDashboardList />
                    <div class="col-10">
                        <div class="row row-cols-3" v-if="favorite_products && favorite_products.length > 0">
                            <UserComponentsFavoritesCard v-for="userFav in favorite_products" :key="userFav.product.id"
                                :product_info="userFav" :userFav="true" />
                        </div>
                        <div class="empty-cart" v-else>
                            <h4> В избранном пока нет товаров</h4>
                            <p>Товары можно добавить, нажав на <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M12.62 20.81C12.28 20.93 11.72 20.93 11.38 20.81C8.48 19.82 2 15.69 2 8.68998C2 5.59998 4.49 3.09998 7.56 3.09998C9.38 3.09998 10.99 3.97998 12 5.33998C13.01 3.97998 14.63 3.09998 16.44 3.09998C19.51 3.09998 22 5.59998 22 8.68998C22 15.69 15.52 19.82 12.62 20.81Z"
                                        stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg></p>
                        </div>
                    </div>
                </div>

            </div>

        </section>
    </div>
</template>
 
<script setup>

import { useAuthStore } from '~/store/auth';
const route = useRoute()
const token_access = useCookie('token_access');

const authStore = useAuthStore();
definePageMeta({
    middleware: 'auth'
})

const { data: favorite_products } = await useJsonPlaceholderData('/user/favorites/', {
    method: "GET",
    headers: {
        Authorization: `Bearer ${token_access.value}`
    }
})
watch(() => route.path, (newPath) => {
    if (newPath === '/user/favorite' && !localStorage.getItem('reloaded')) {
        localStorage.setItem('reloaded', 'true');
        window.location.reload();
    }
});


// Сброс флага, если пользователь покидает страницу
watch(() => route.path, (newPath) => {
    if (newPath !== '/user/favorite') {
        localStorage.removeItem('reloaded');
    }
});


</script>

