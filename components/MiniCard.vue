<template>
    <div class="card onmalika-card h-100 mini-card">
        <NuxtLink
            :to="'/shop' + '/' + product_info.category.parent.slug + '/' + product_info.category.slug + '/' + product_info.slug">
            <div class="onmalika-card-badges">
                <span class="badge onmalika-card-badges-new" style="background-color: #80EE98;">new</span>
                <span class="badge onmalika-card-badges-new" style="background-color: #FF4A4A;">-20%</span>
            </div>

            <button class="onmalika-card-favorite" v-if="!userFav" @click="checkAuth">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M12.62 20.81C12.28 20.93 11.72 20.93 11.38 20.81C8.48 19.82 2 15.69 2 8.68998C2 5.59998 4.49 3.09998 7.56 3.09998C9.38 3.09998 10.99 3.97998 12 5.33998C13.01 3.97998 14.63 3.09998 16.44 3.09998C19.51 3.09998 22 5.59998 22 8.68998C22 15.69 15.52 19.82 12.62 20.81Z"
                        stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>

            </button>
            <img v-if="product_info && product_info.image && product_info.image.url" :src="baseurl + product_info.image.url"
                class="card-img-top" alt="..." loading="lazy" />
            <img v-else src="https://placehold.co/250x250" class="w-100" alt="" />
        </NuxtLink>
        <div class="card-body onmalika-card-body">
            <h5 class="onmalika-card-title">{{ product_info.name }}</h5>
            <div class="onmalika-card-stock">
                <div class="stock in-stock">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                            stroke="#46AC36" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M7.75 11.9999L10.58 14.8299L16.25 9.16992" stroke="#46AC36" stroke-width="1.5"
                            stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <p> Есть в наличии</p>
                </div>

            </div>
            <div class="onmalika-card-price">
                <span :class="{ 'active': product_info.sales_price }"> {{ getPriceText() }}</span>
                <p :class="{ 'd-none': !product_info.sales_price }">{{ product_info.sales_price
                }}</p>
            </div>
            <div class="onmalika-card-body-orderbtn ">
                <button @click="addToCart(product_info)" type="button" class="btn dark-cover justify-content-center">
                    В корзину</button>
                <div class="onmalika-card-body-orderbtn-rating">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M13.5639 4.3011L15.1502 7.49508C15.364 7.93681 15.9378 8.35588 16.4216 8.44649L19.2905 8.92219C21.1244 9.22799 21.5519 10.5645 20.2356 11.901L17.9967 14.1549C17.6254 14.5286 17.4116 15.2649 17.5354 15.7972L18.1767 18.5834C18.683 20.7807 17.5129 21.6415 15.589 20.4862L12.9001 18.8779C12.4163 18.5834 11.6062 18.5834 11.1224 18.8779L8.43351 20.4862C6.50963 21.6302 5.33955 20.7807 5.84583 18.5834L6.48712 15.7972C6.58838 15.2535 6.37462 14.5173 6.00334 14.1436L3.76444 11.8896C2.4481 10.5645 2.87563 9.22799 4.7095 8.91086L7.57845 8.43516C8.06223 8.35588 8.63602 7.92548 8.84979 7.48376L10.4361 4.28977C11.3025 2.56819 12.6975 2.56819 13.5639 4.3011Z"
                            fill="#FFB800" />
                    </svg>
                    <p> 5.0</p>
                </div>
            </div>
        </div>
    </div>
</template>


<script setup>
import { useAuthStore } from '~/store/auth';
import { useCartStore } from '~/store/cart';
const authStore = useAuthStore()
const CartStore = useCartStore()
const props = defineProps({
    product_info: {
        type: Object,
        required: true,
    },
    userFav: {
        type: Boolean,
        required: false,
    }
});
const { product_info } = props;
const baseurl = 'https://admin.itpapa.uz'
const token_access = useCookie('token_access');
const checkAuth = async () => {
    if (authStore.isAuthenticated) {
        const post_favorite = await useJsonPlaceholderData('/user/favorites/', {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token_access.value}`
            },
            body: {
                user: authStore.user.id,
                product_id: product_info.id
            }
        })
        alert('Добавлено в избранные')
    } else {
        alert('Вы не авторизованы')
    }
}

const addToCart = (product) => {
    CartStore.addToCart(product, 1);
};
import { useCurrencyStore } from '~/store/currencyStore';
const currencyStore = useCurrencyStore();
const getPriceText = () => {
    const currency = currencyStore.selectedCurrency;
    const priceInfo = product_info.prices_in_currencies[currency];
    if (!priceInfo) {
        return "Цена не указана";
    }
    return `${priceInfo.price} ${priceInfo.symbol}`;
};

</script>