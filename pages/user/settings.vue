<template>
    <div>

        <div class="container">

            <ol class="breadcrumb onmalika-breadcrumb">
                <li class="breadcrumb-item">
                    <NuxtLink to="/">Главная</NuxtLink>
                </li>
                <li class="breadcrumb-item">
                    <NuxtLink to="/user">Кабинет</NuxtLink>
                </li>
                <li class="breadcrumb-item active" aria-current="page">Настройки</li>
            </ol>

        </div> <!-- container //  -->

        <section class="padding-y" v-if="authStore.user">
            <div class="container">
                <h1>Настройки</h1>
                <div class="row">
                    <UserComponentsDashboardList />
                    <div class="col-10">
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

definePageMeta({
    middleware: 'auth'
})

</script>

