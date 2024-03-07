<template>
    <div>
        <section class="bg-primary padding-y-sm">
            <div class="container">

                <ol class="breadcrumb ondark mb-0">
                    <li class="breadcrumb-item">
                        <NuxtLink to="/">Главная</NuxtLink>
                    </li>
                    <li class="breadcrumb-item">
                        <NuxtLink to="/user">Кабинет</NuxtLink>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">Избранные</li>
                </ol>

            </div> <!-- container //  -->
        </section>
        <section class="padding-y">
            <div class="container">
                <div class="row">
                    <UserComponentsDashboardList />
                    <div class="col-9">
                        <h1>Заказы</h1>
                        <div class="row mb-3 order-head">
                            <div class="col-2">Номер Заказа</div>
                            <div class="col-2">Статус</div>
                            <div class="col-3">Время</div>
                            <div class="col-3">Сумма</div>
                            <div class="col-2">Подробнее</div>
                        </div>
                        <div class="order-list" v-for="order in order_list" :key="order.id">
                            <div class="row">
                                <div class="col-2">
                                    <div class="order-item">
                                        #{{ order.id }}
                                    </div>
                                </div>
                                <div class="col-2">
                                    <div class="order-item">
                                        Неизвестно
                                    </div>
                                </div>
                                <div class="col-3">
                                    <div class="order-item">
                                        {{ order.created_at }}
                                    </div>
                                </div>
                                <div class="col-3">
                                    <div class="order-item">
                                        {{ order.total_price }}$
                                    </div>
                                </div>
                                <div class="col-2">
                                    <div class="order-item">
                                        <NuxtLink :to="'/user/orders/' + order.id"> К заказу
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                viewBox="0 0 16 16" fill="none">
                                                <path d="M2.5 8H13.5" stroke="#2DA5F3" stroke-width="1.5"
                                                    stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M9 3.5L13.5 8L9 12.5" stroke="#2DA5F3" stroke-width="1.5"
                                                    stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        </NuxtLink>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </section>
    </div>
</template>

<script setup>
const token_access = useCookie('token_access');

const { data: order_list } = await useJsonPlaceholderData('/user/orders/', {
    method: "GET",
    headers: {
        Authorization: `Bearer ${token_access.value}`
    }
})

definePageMeta({
    middleware: 'auth'
})
</script>

<style lang="scss" scoped>
.order-head {
    background-color: #E4E7E9;
    color: #000;
    padding: 10px 0;
}

.order-list {
    a {
        text-decoration: none;
        color: #2DA5F3;
    }

    .order-item {
        padding: 10px 0;
    }
}
</style>