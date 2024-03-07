<template>
    <div>
        <section class="bg-primary py-5">
            <div class="container">
                <ol class="breadcrumb ondark mb-0">
                    <li class="breadcrumb-item">
                        <NuxtLink to="/">Главная</NuxtLink>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">Корзина</li>
                </ol>
            </div> <!-- container //  -->
        </section>
        <section class="padding-y">
            <div class="container">
                <div v-if="cartStore.items.length > 0">
                    <div class="row">
                        <div class="col-9">
                            <div class="big-cart-block">
                                <div class="cart-title">
                                    <h1 class="m-0"> Корзина</h1>
                                </div>
                                <div class="cart-info-list">
                                    <div class="row">
                                        <div class="col-5">
                                            Товары
                                        </div>
                                        <div class="col-3">
                                            Цены
                                        </div>
                                        <div class="col-2">
                                            Количество
                                        </div>
                                        <div class="col-2">
                                            Общая сумма
                                        </div>
                                    </div>
                                </div>
                                <div class="cart-products">
                                    <div class="row align-items-center" v-for="item in cartStore.items" :key="item.id">
                                        <div class="col-5">
                                            <div class="cart-product-info">
                                                <button type="button" @click="cartStore.removeFromCart(item.product.id)"
                                                    class="remove-button">
                                                    <i class="far fa-times-circle"></i>
                                                </button>
                                                <img  v-if="item && item.product && item.product.image && item.product.image.url"
                                                    :src="baseurl + item.product.image.url" class="card-img-top" alt="...">
                                                <img  v-else src="http://placehold.co/250x250" class="card-img-top"
                                                    alt="...">
                                                <p>{{ item.product.name }}</p>
                                            </div>
                                        </div>
                                        <div class="col-3">
                                            {{ getPriceInSelectedCurrency(item.product) }}
                                        </div>
                                        <div class="col-2">
                                            <div class="input-group input-spinner">
                                                <button type="button" @click="cartStore.decreaseQuantity(item.product.id)"
                                                    class="btn btn-icon btn-light">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22"
                                                        fill="#999" viewBox="0 0 24 24">
                                                        <path d="M19 13H5v-2h14v2z"></path>
                                                    </svg>
                                                </button>
                                                <input v-model="item.quantity" disabled class="form-control text-center"
                                                    placeholder="">
                                                <button type="button" @click="cartStore.increaseQuantity(item.product.id)"
                                                    class="btn btn-icon btn-light">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22"
                                                        fill="#999" viewBox="0 0 24 24">
                                                        <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                        <div class="col-2">
                                            <span>{{ item.quantity * item.product.price }} UZS</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <NuxtLink class="to-shop-link" to="/shop"> <i class="fal fa-arrow-left"></i> В магазин
                            </NuxtLink>
                        </div>
                        <div class="col-3">
                            <div class="products-block-checkout">
                                <p>Общая сумма</p>
                                <div class="total-price">
                                    <p>Всего</p>
                                    <span>{{ totalPrice }} $</span>
                                </div>
                                <button @click="goToCheckOut" type="button" class="btn-orange-cart">
                                    Перейти к оформлению заказа <i class="fal fa-arrow-right"></i>
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
                <div v-else>
                    <h3>Пока что здесь пусто, закиньте суда что то :)</h3>
                </div>
            </div>

        </section>
    </div>
</template>

<script setup>
import { useCartStore } from '~/store/cart';
import { useAuthStore } from '~/store/auth';

const router = useRouter()
const cartStore = useCartStore();
const authStore = useAuthStore()
const baseurl = 'https://admin.itpapa.uz'

const totalPrice = computed(() => {
    return cartStore.items.reduce((total, item) => {
        return total + (item.quantity * item.product.price);
    }, 0);
});
const goToCheckOut = (async () => {
    if (authStore.isAuthenticated) {
        await router.push('/checkout')
    } else {
        await router.push({ path: '/user/login', query: { redirect: 'cart' } });

    }
})
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

onMounted(() => {
    cartStore.loadCart();

});
useSeoMeta({
    title: 'Корзина',
    ogTitle: 'Корзина',

})
</script>

<style lang="scss" scoped>
.big-cart-block {
    margin-bottom: 24px;
    border: 1px solid #E4E7E9;
    border-radius: 4px;

    .cart-title {
        padding: 20px 24px;
        font-size: 18px;

        h1 {
            font-size: 18px;
        }
    }

    .cart-info-list {
        border-top: 1px solid #E4E7E9;
        border-bottom: 1px solid #E4E7E9;
        padding: 10px 24px;
        background-color: #F2F4F5;
        font-size: 12px;
        text-transform: uppercase;
    }

    .cart-products {
        padding: 24px;

        .cart-products {
            padding: 16px 10px;

        }
    }

    .cart-product-info {
        display: flex;
        column-gap: 12px;
        align-items: center;

        img {
            width: 72px;
            height: 72px;
        }

        button {
            background-color: transparent;
            border: 0;
            padding: 0;
            width: 24px;
            height: 24px;

            i {
                transition: .3s ease-in;
                color: #929FA5;

                &:hover {
                    color: #EE5858;
                }
            }
        }
    }
}

.products-block-checkout {
    padding: 20px;
    border: 1px solid #E4E7E9;

    .card-title {
        font-size: 14px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;

    }

    .total-price {
        margin-top: 16px;
        border-top: 1px solid #E4E7E9;
        padding-top: 16px;
        display: flex;
        justify-content: space-between;
        margin-bottom: 24px;

        span {
            font-weight: 700;
        }
    }
}

.btn-orange-cart {
    background-color: #0d6efd;
    width: 100%;
    padding: 16px 0;
    color: #fff;
    border: 0;
    display: flex;
    align-items: center;
    column-gap: 8px;
    justify-content: center;
}

.to-shop-link {
    border: 1px solid #2DA5F3;
    color: #2DA5F3;
    padding: 14px 24px;
    display: flex;
    column-gap: 8px;
    width: max-content;
    text-decoration: none;
    align-items: center;
    transition: .3s ease-in;

    &:hover {
        background-color: #2DA5F3;
        color: #fff;
    }
}
</style>