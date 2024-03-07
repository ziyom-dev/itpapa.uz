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
                    <li class="breadcrumb-item">
                        <NuxtLink to="/user/orders">Заказы</NuxtLink>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">Заказ #{{ order.id }}</li>
                </ol>

            </div> <!-- container //  -->
        </section>
        <section class="padding-y">
            <div class="container">
                <h2>Заказ #{{ order.id }}</h2>
                <h3>Общая сумма {{ order.total_price }}$</h3>
                <h4 class="mb-3">Товары которые вы заказли</h4>
                <div class="row align-items-center mb-3" v-for="item in order.items">
                    <div class="col-2">
                        <img  :src="'https://admin.itpapa.uz' + item.product.image.url" class="w-100" alt="" />
                    </div>
                    <div class="col-3">
                        <h6>
                            {{ item.product.name }}
                        </h6>
                    </div>
                    <div class="col-2">
                        <h6>
                            Кол-во: {{ item.quantity }}
                        </h6>
                    </div>
                    <div class="col-2">
                        <h6>
                            Цена товара: <br> {{ getPriceInSelectedCurrency(item.product) }}
                        </h6>
                    </div>
                    <div class="col-3">
                        <h6>Общая сумма этого товара <br>
                            {{ item.total_price }}$
                        </h6>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
const token_access = useCookie('token_access');
const route = useRoute()

const { data: order } = await useJsonPlaceholderData('/user/orders/' + route.params.id, {
    method: "GET",
    headers: {
        Authorization: `Bearer ${token_access.value}`
    }
})
if (!order.value || !order.value.id || !order.value.items) {
    throw createError({ statusCode: 404, message: 'Такого заказа не существует' })
}
import { useCurrencyStore } from '~/store/currencyStore';
const currencyStore = useCurrencyStore();
const getPriceInSelectedCurrency = (product) => {
    const selectedCurrency = currencyStore.selectedCurrency;
    const priceInfo = product.prices_in_currencies[selectedCurrency];
    if (!priceInfo) {
        return "Цена не указана";
    }
    return `${priceInfo.price} ${priceInfo.symbol}`;
};
definePageMeta({
    middleware: 'auth'
})
</script>

<style lang="scss" scoped></style>