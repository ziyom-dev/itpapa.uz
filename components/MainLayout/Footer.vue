
<template>

        <footer class="onmalika-footer">
            <div class="container">
                <div class="onmalika-footer-top">
                    <div class="row">
                        <div class="col-4">
                            <div class="onmalika-footer-top-logo">
                                <a href="/">
                                    <img src="/img/Logo.svg" alt="" />
                                </a>
                                <a href="tel:+998997897898"><span>+998 99 789 78 98</span></a>
                                <div class="onmalika-footer-top-logo-social">
                                    <a href="https://instagram.com/onmalika.uz" target="_blank">
                                        <img src="/img/instagram.svg" alt="" />
                                    </a>
                                    <a href="https://www.facebook.com/onmalika.uz" target="_blank">
                                        <img src="/img/facebook.svg" alt="" />
                                    </a>
                                    <a href="https://t.me/onmalika" target="_blank">
                                        <img src="/img/telegram.svg" alt="" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="col-8">
                            <div class="onmalika-footer-top-links">
                                <div class="onmalika-footer-top-links-category">
                                    <p class="onmalika-footer-top-links-title">категории</p>
                                    <ul>
                                        <li><a href="">Блендер
                                                (погружной и стационарный)</a></li>
                                        <li><a href="">Мясорубка</a></li>
                                    </ul>
                                </div>
                                <div class="onmalika-footer-top-links-pages">
                                    <p class="onmalika-footer-top-links-title">Покупателям</p>
                                    <ul>
                                        <li><a href="">О нас</a></li>
                                        <li><a href="">Новости</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="onmalika-footer-bottom">
                    <p>© On Malika, 2024</p>
                    <a href="">Сделано в...</a>
                </div>
            </div>
        </footer>
        <div class="modal fade onmalika-search-modal" id="searchModal" tabindex="-1" aria-labelledby="searchModalLabel"
            aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-body">
                        <SearchInputSearch />
                    </div>

                </div>
            </div>
        </div>
        <div class="modal fade onmalika-cart-modal" id="cardModal" tabindex="-1" aria-labelledby="cardModalLabel"
            aria-hidden="true">
            <div class="modal-dialog modal-dialog-scrollable">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Корзина <span>{{ totalUniqueItemsInCart }}</span>
                        </h5>
                        <button type="button" class="dark-cover" data-bs-dismiss="modal" aria-label="Close">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.33301 12.6667L12.6663 3.33333" stroke="white" stroke-width="1.5"
                                    stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M12.6663 12.6667L3.33301 3.33333" stroke="white" stroke-width="1.5"
                                    stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </button>
                    </div>
                    <div class="modal-body" v-if="cartStore.items.length > 0">
                        <button type="button" :disabled="cartStore.items.length == 0" @click="cartStore.clearCart()"
                            class="clean-cart">Очистить корзину
                        </button>
                        <ul>
                            <li v-for="item in cartStore.items" :key="item.id" class="card onmalika-card-cart mb-3">
                                <button class="remove-product" @click="cartStore.removeFromCart(item.product.id)"
                                    type="button">
                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2.3335 11.6667L11.6668 2.33333" stroke="black" stroke-width="1.5"
                                            stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M11.6668 11.6667L2.3335 2.33333" stroke="black" stroke-width="1.5"
                                            stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>

                                </button>
                                <div class="row g-0">
                                    <div class="col-md-4">
                                        <img v-if="item && item.product && item.product.image && item.product.image.url"
                                            :src="baseurl + item.product.image.url" class="card-img-top" alt="...">
                                            <img v-else src="http://placehold.co/250x250" class="card-img-top"
                                                alt="...">
                                    </div>
                                    <div class="col-md-8">
                                        <div class="card-body">
                                            <h5 class="onmalika-card-cart-title">{{ item.product.name }}</h5>
                                            <p class="onmalika-card-cart-price">{{ getPriceInSelectedCurrency(item.product)
                                            }}</p>
                                            <div class="product-counter">
                                                <button type="button"
                                                    @click="cartStore.decreaseQuantity(item.product.id)">-</button>
                                                <input v-model="item.quantity" disabled class="text-center" placeholder="">
                                                <button type="button"
                                                    @click="cartStore.increaseQuantity(item.product.id)">+</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="modal-body" v-else>
                        <div class="modal-empty">
                            <h4>корзина пуста</h4>
                            <p>Воспользуйтесь поиском или каталогом,
                                чтобы найти товары</p>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <div class="total-price">
                            <p>Итого:</p>
                            <h4>{{ totalPrice }}</h4>
                        </div>
                        <button class="btn dark-cover btn-elemetn-in" :class="{ 'disabled': cartStore.items.length == 0 }"
                            :disabled="cartStore.items.length == 0" @click="checkAuth" data-bs-dismiss="modal"
                            type="button">
                            Оформить заказ
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade onmalika-reviews-modal" id="reviewsModal" tabindex="-1" aria-labelledby="reviewsModalLabel"
        aria-hidden="true">
        <div class="modal-dialog">
            <!-- <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Отзывы</h1>
                    <button type="button" class="dark-cover" data-bs-dismiss="modal" aria-label="Close">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.33301 12.6667L12.6663 3.33333" stroke="white" stroke-width="1.5"
                                stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M12.6663 12.6667L3.33301 3.33333" stroke="white" stroke-width="1.5"
                                stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="modal-reviews">
                        <div class="modal-reviews-item">
                            <div class="modal-reviews-item-info">
                                <div class="name">
                                    <p>Фомина Василиса Артёмовна</p>
                                    <span>01.06.2024</span>
                                </div>
                                <div class="rating">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M13.5639 4.3011L15.1502 7.49508C15.364 7.93681 15.9378 8.35588 16.4216 8.44649L19.2905 8.92219C21.1244 9.22799 21.5519 10.5645 20.2356 11.901L17.9967 14.1549C17.6254 14.5286 17.4116 15.2649 17.5354 15.7972L18.1767 18.5834C18.683 20.7807 17.5129 21.6415 15.589 20.4862L12.9001 18.8779C12.4163 18.5834 11.6062 18.5834 11.1224 18.8779L8.43351 20.4862C6.50963 21.6302 5.33955 20.7807 5.84583 18.5834L6.48712 15.7972C6.58838 15.2535 6.37462 14.5173 6.00334 14.1436L3.76444 11.8896C2.4481 10.5645 2.87563 9.22799 4.7095 8.91086L7.57845 8.43516C8.06223 8.35588 8.63602 7.92548 8.84979 7.48376L10.4361 4.28977C11.3025 2.56819 12.6975 2.56819 13.5639 4.3011Z"
                                            fill="#FFB800" />
                                    </svg>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M13.5639 4.3011L15.1502 7.49508C15.364 7.93681 15.9378 8.35588 16.4216 8.44649L19.2905 8.92219C21.1244 9.22799 21.5519 10.5645 20.2356 11.901L17.9967 14.1549C17.6254 14.5286 17.4116 15.2649 17.5354 15.7972L18.1767 18.5834C18.683 20.7807 17.5129 21.6415 15.589 20.4862L12.9001 18.8779C12.4163 18.5834 11.6062 18.5834 11.1224 18.8779L8.43351 20.4862C6.50963 21.6302 5.33955 20.7807 5.84583 18.5834L6.48712 15.7972C6.58838 15.2535 6.37462 14.5173 6.00334 14.1436L3.76444 11.8896C2.4481 10.5645 2.87563 9.22799 4.7095 8.91086L7.57845 8.43516C8.06223 8.35588 8.63602 7.92548 8.84979 7.48376L10.4361 4.28977C11.3025 2.56819 12.6975 2.56819 13.5639 4.3011Z"
                                            fill="#FFB800" />
                                    </svg>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M13.5639 4.3011L15.1502 7.49508C15.364 7.93681 15.9378 8.35588 16.4216 8.44649L19.2905 8.92219C21.1244 9.22799 21.5519 10.5645 20.2356 11.901L17.9967 14.1549C17.6254 14.5286 17.4116 15.2649 17.5354 15.7972L18.1767 18.5834C18.683 20.7807 17.5129 21.6415 15.589 20.4862L12.9001 18.8779C12.4163 18.5834 11.6062 18.5834 11.1224 18.8779L8.43351 20.4862C6.50963 21.6302 5.33955 20.7807 5.84583 18.5834L6.48712 15.7972C6.58838 15.2535 6.37462 14.5173 6.00334 14.1436L3.76444 11.8896C2.4481 10.5645 2.87563 9.22799 4.7095 8.91086L7.57845 8.43516C8.06223 8.35588 8.63602 7.92548 8.84979 7.48376L10.4361 4.28977C11.3025 2.56819 12.6975 2.56819 13.5639 4.3011Z"
                                            fill="#FFB800" />
                                    </svg>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M13.5639 4.3011L15.1502 7.49508C15.364 7.93681 15.9378 8.35588 16.4216 8.44649L19.2905 8.92219C21.1244 9.22799 21.5519 10.5645 20.2356 11.901L17.9967 14.1549C17.6254 14.5286 17.4116 15.2649 17.5354 15.7972L18.1767 18.5834C18.683 20.7807 17.5129 21.6415 15.589 20.4862L12.9001 18.8779C12.4163 18.5834 11.6062 18.5834 11.1224 18.8779L8.43351 20.4862C6.50963 21.6302 5.33955 20.7807 5.84583 18.5834L6.48712 15.7972C6.58838 15.2535 6.37462 14.5173 6.00334 14.1436L3.76444 11.8896C2.4481 10.5645 2.87563 9.22799 4.7095 8.91086L7.57845 8.43516C8.06223 8.35588 8.63602 7.92548 8.84979 7.48376L10.4361 4.28977C11.3025 2.56819 12.6975 2.56819 13.5639 4.3011Z"
                                            fill="#FFB800" />
                                    </svg>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M13.5639 4.3011L15.1502 7.49508C15.364 7.93681 15.9378 8.35588 16.4216 8.44649L19.2905 8.92219C21.1244 9.22799 21.5519 10.5645 20.2356 11.901L17.9967 14.1549C17.6254 14.5286 17.4116 15.2649 17.5354 15.7972L18.1767 18.5834C18.683 20.7807 17.5129 21.6415 15.589 20.4862L12.9001 18.8779C12.4163 18.5834 11.6062 18.5834 11.1224 18.8779L8.43351 20.4862C6.50963 21.6302 5.33955 20.7807 5.84583 18.5834L6.48712 15.7972C6.58838 15.2535 6.37462 14.5173 6.00334 14.1436L3.76444 11.8896C2.4481 10.5645 2.87563 9.22799 4.7095 8.91086L7.57845 8.43516C8.06223 8.35588 8.63602 7.92548 8.84979 7.48376L10.4361 4.28977C11.3025 2.56819 12.6975 2.56819 13.5639 4.3011Z"
                                            fill="#FFB800" />
                                    </svg>
                                </div>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lacus magna, ultricies et
                                orci eget, accumsan tincidunt enim. Ut at tincidunt libero. Integer suscipit libero
                                tellus, eget scelerisque enim laoreet et. </p>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="dark-cover w-100 justify-content-center">Оставить отзыв</button>
                </div>
            </div> -->
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Оставить отзыв</h1>
                    <button type="button" class="dark-cover" data-bs-dismiss="modal" aria-label="Close">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.33301 12.6667L12.6663 3.33333" stroke="white" stroke-width="1.5"
                                stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M12.6663 12.6667L3.33301 3.33333" stroke="white" stroke-width="1.5"
                                stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </button>
                </div>
                <div class="modal-body">
                    <button type="button" class="clean-cart">Вернуться к отзывам</button>
                    <form class="modal-form">
                        <div class="modal-leave-rating">
                            <p>Оцените товар</p>
                            <div class="modal-leave-rating-stars">
                                <svg width="50" height="50" viewBox="0 0 50 50" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M28.4752 7.89133L32.0005 14.9891C32.4755 15.9707 33.7506 16.9019 34.8257 17.1033L41.2011 18.1604C45.2764 18.84 46.2264 21.81 43.3012 24.7799L38.3259 29.7886C37.5009 30.6192 37.0258 32.2552 37.3008 33.4382L38.7259 39.6298C39.851 44.5127 37.2508 46.4255 32.9755 43.8583L27.0001 40.2842C25.9251 39.6298 24.1249 39.6298 23.0499 40.2842L17.0745 43.8583C12.7992 46.4004 10.199 44.5127 11.3241 39.6298L12.7492 33.4382C12.9742 32.2301 12.4991 30.594 11.6741 29.7635L6.69875 24.7548C3.77355 21.81 4.72362 18.84 8.79889 18.1352L15.1743 17.0781C16.2494 16.9019 17.5245 15.9455 17.9995 14.9639L21.5248 7.86616C23.4499 4.04043 26.5501 4.04043 28.4752 7.89133Z"
                                        fill="#7B7B7B" />
                                </svg>
                                <svg width="50" height="50" viewBox="0 0 50 50" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M28.4752 7.89133L32.0005 14.9891C32.4755 15.9707 33.7506 16.9019 34.8257 17.1033L41.2011 18.1604C45.2764 18.84 46.2264 21.81 43.3012 24.7799L38.3259 29.7886C37.5009 30.6192 37.0258 32.2552 37.3008 33.4382L38.7259 39.6298C39.851 44.5127 37.2508 46.4255 32.9755 43.8583L27.0001 40.2842C25.9251 39.6298 24.1249 39.6298 23.0499 40.2842L17.0745 43.8583C12.7992 46.4004 10.199 44.5127 11.3241 39.6298L12.7492 33.4382C12.9742 32.2301 12.4991 30.594 11.6741 29.7635L6.69875 24.7548C3.77355 21.81 4.72362 18.84 8.79889 18.1352L15.1743 17.0781C16.2494 16.9019 17.5245 15.9455 17.9995 14.9639L21.5248 7.86616C23.4499 4.04043 26.5501 4.04043 28.4752 7.89133Z"
                                        fill="#7B7B7B" />
                                </svg>
                                <svg width="50" height="50" viewBox="0 0 50 50" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M28.4752 7.89133L32.0005 14.9891C32.4755 15.9707 33.7506 16.9019 34.8257 17.1033L41.2011 18.1604C45.2764 18.84 46.2264 21.81 43.3012 24.7799L38.3259 29.7886C37.5009 30.6192 37.0258 32.2552 37.3008 33.4382L38.7259 39.6298C39.851 44.5127 37.2508 46.4255 32.9755 43.8583L27.0001 40.2842C25.9251 39.6298 24.1249 39.6298 23.0499 40.2842L17.0745 43.8583C12.7992 46.4004 10.199 44.5127 11.3241 39.6298L12.7492 33.4382C12.9742 32.2301 12.4991 30.594 11.6741 29.7635L6.69875 24.7548C3.77355 21.81 4.72362 18.84 8.79889 18.1352L15.1743 17.0781C16.2494 16.9019 17.5245 15.9455 17.9995 14.9639L21.5248 7.86616C23.4499 4.04043 26.5501 4.04043 28.4752 7.89133Z"
                                        fill="#7B7B7B" />
                                </svg>
                                <svg width="50" height="50" viewBox="0 0 50 50" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M28.4752 7.89133L32.0005 14.9891C32.4755 15.9707 33.7506 16.9019 34.8257 17.1033L41.2011 18.1604C45.2764 18.84 46.2264 21.81 43.3012 24.7799L38.3259 29.7886C37.5009 30.6192 37.0258 32.2552 37.3008 33.4382L38.7259 39.6298C39.851 44.5127 37.2508 46.4255 32.9755 43.8583L27.0001 40.2842C25.9251 39.6298 24.1249 39.6298 23.0499 40.2842L17.0745 43.8583C12.7992 46.4004 10.199 44.5127 11.3241 39.6298L12.7492 33.4382C12.9742 32.2301 12.4991 30.594 11.6741 29.7635L6.69875 24.7548C3.77355 21.81 4.72362 18.84 8.79889 18.1352L15.1743 17.0781C16.2494 16.9019 17.5245 15.9455 17.9995 14.9639L21.5248 7.86616C23.4499 4.04043 26.5501 4.04043 28.4752 7.89133Z"
                                        fill="#7B7B7B" />
                                </svg>
                                <svg width="50" height="50" viewBox="0 0 50 50" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M28.4752 7.89133L32.0005 14.9891C32.4755 15.9707 33.7506 16.9019 34.8257 17.1033L41.2011 18.1604C45.2764 18.84 46.2264 21.81 43.3012 24.7799L38.3259 29.7886C37.5009 30.6192 37.0258 32.2552 37.3008 33.4382L38.7259 39.6298C39.851 44.5127 37.2508 46.4255 32.9755 43.8583L27.0001 40.2842C25.9251 39.6298 24.1249 39.6298 23.0499 40.2842L17.0745 43.8583C12.7992 46.4004 10.199 44.5127 11.3241 39.6298L12.7492 33.4382C12.9742 32.2301 12.4991 30.594 11.6741 29.7635L6.69875 24.7548C3.77355 21.81 4.72362 18.84 8.79889 18.1352L15.1743 17.0781C16.2494 16.9019 17.5245 15.9455 17.9995 14.9639L21.5248 7.86616C23.4499 4.04043 26.5501 4.04043 28.4752 7.89133Z"
                                        fill="#7B7B7B" />
                                </svg>

                            </div>
                        </div>
                        <textarea placeholder="Введите комментарий"></textarea>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="dark-cover w-100 justify-content-center">Отправить</button>
                </div>
            </div>
        </div>
    </div>

</template>

<script setup>
import { useCartStore } from '~/store/cart';
const router = useRouter()
const cartStore = useCartStore();
const baseurl = 'https://admin.itpapa.uz'
const checkAuth = async () => {
    await router.push('/cart')
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
const totalUniqueItemsInCart = computed(() => cartStore.items.length);
const totalPrice = computed(() => {
    return cartStore.items.reduce((total, item) => {
        return total + (item.quantity * item.product.price);
    }, 0);
});
onMounted(() => {
    cartStore.loadCart();
});

</script>
