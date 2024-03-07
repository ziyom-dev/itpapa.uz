<template>
    <div>
        <div class="container">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb onmalika-breadcrumb">
                    <li class="breadcrumb-item">
                        <NuxtLink to="/">Главная</NuxtLink>
                    </li>
                    <li class="breadcrumb-item">
                        <NuxtLink to="/shop">Магазинчик</NuxtLink>
                    </li>
                    <li class="breadcrumb-item">
                        <NuxtLink :to="'/shop/' + product.category.parent.slug">{{ product.category.parent.name }}
                        </NuxtLink>
                    </li>
                    <li class="breadcrumb-item">
                        <NuxtLink :to="'/shop/' + product.category.parent.slug + '/' + product.category.slug">{{
                            product.category.name }}</NuxtLink>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">{{ product.name }}</li>
                </ol>
            </nav>

        </div> <!-- container //  -->
        <section>
            <div class="container">
                <div class="row justify-content-between onmalika-product">
                    <div class="col-6">
                        <div class="row">
                            <div class="col-2">
                                <div class="onmalika-product-gallery">
                                    <div class="onmalika-product-gallery-item active"
                                        v-if="product.images && product.images.length > 1">
                                        <div v-for="(progall, index) in product.images" :key="progall">

                                            <img :src="urlOfMedia + progall.url" class="w-100" alt="" />


                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div class="col-10">
                                <div class="onmalika-product-main-img" v-for="progall in product.images" :key="progall">
                                    <img :src="urlOfMedia + progall.url" class="w-100" alt="">
                                    <div class="onmalika-product-rating">
                                        <button type="button" @click="checkAuth" class="onmalika-product-favorite">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M12.62 20.81C12.28 20.93 11.72 20.93 11.38 20.81C8.48 19.82 2 15.69 2 8.68998C2 5.59998 4.49 3.09998 7.56 3.09998C9.38 3.09998 10.99 3.97998 12 5.33998C13.01 3.97998 14.63 3.09998 16.44 3.09998C19.51 3.09998 22 5.59998 22 8.68998C22 15.69 15.52 19.82 12.62 20.81Z"
                                                    stroke="black" stroke-width="1.5" stroke-linecap="round"
                                                    stroke-linejoin="round" />
                                            </svg>
                                        </button>
                                        <p>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M13.5639 4.3011L15.1502 7.49508C15.364 7.93681 15.9378 8.35588 16.4216 8.44649L19.2905 8.92219C21.1244 9.22799 21.5519 10.5645 20.2356 11.901L17.9967 14.1549C17.6254 14.5286 17.4116 15.2649 17.5354 15.7972L18.1767 18.5834C18.683 20.7807 17.5129 21.6415 15.589 20.4862L12.9001 18.8779C12.4163 18.5834 11.6062 18.5834 11.1224 18.8779L8.43351 20.4862C6.50963 21.6302 5.33955 20.7807 5.84583 18.5834L6.48712 15.7972C6.58838 15.2535 6.37462 14.5173 6.00334 14.1436L3.76444 11.8896C2.4481 10.5645 2.87563 9.22799 4.7095 8.91086L7.57845 8.43516C8.06223 8.35588 8.63602 7.92548 8.84979 7.48376L10.4361 4.28977C11.3025 2.56819 12.6975 2.56819 13.5639 4.3011Z"
                                                    fill="#FFB800" />
                                            </svg>
                                            5.0
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                        </div>

                    </div>
                    <div class="col-6">
                        <h1 class="onmalika-product-title">{{ product.name }}</h1>
                        <h4 class="onmalika-product-short-title">
                            Краткое описание:
                        </h4>
                        <p class="onmalika-product-short">{{ product.short_description }}</p>
                        <p class="onmalika-product-short">{{ product.sku }}</p>
                        <div class="onmalika-product-reviews-stock">
                            <p>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                                        stroke="#46AC36" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                    <path d="M7.75 11.9999L10.58 14.8299L16.25 9.16992" stroke="#46AC36" stroke-width="1.5"
                                        stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                Есть в наличии
                            </p>
                            <button type="button" class="onmalika-product-reviews" data-bs-toggle="modal"
                                data-bs-target="#reviewsModal">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M8.5 19H8C4 19 2 18 2 13V8C2 4 4 2 8 2H16C20 2 22 4 22 8V13C22 17 20 19 16 19H15.5C15.19 19 14.89 19.15 14.7 19.4L13.2 21.4C12.54 22.28 11.46 22.28 10.8 21.4L9.3 19.4C9.14 19.18 8.77 19 8.5 19Z"
                                        stroke="black" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                    <path d="M15.9965 11H16.0054" stroke="black" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                    <path d="M11.9945 11H12.0035" stroke="black" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                    <path d="M7.99451 11H8.00349" stroke="black" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                                <span>
                                    Отзывы
                                </span>
                            </button>
                        </div>
                        <h4 class="onmalika-product-price">
                            {{ getPriceText() }}
                        </h4>
                        <p class="mb-3">Brand: <NuxtLink :to="'/brands/' + product.brand.slug"
                                @click.prevent="goToBrand(product.brand.slug)">{{
                                    product.brand.name }}</NuxtLink>
                        </p>


                        <div class="onmalika-product-btns">
                            <button @click="addToCart" class="btn dark-cover" type="button">
                                В корзину
                            </button>
                            <div class="product-counter">
                                <button type="button" @click="decreaseQuantity"> <svg xmlns="http://www.w3.org/2000/svg"
                                        width="22" height="22" fill="#999" viewBox="0 0 24 24">
                                        <path d="M19 13H5v-2h14v2z"></path>
                                    </svg></button>
                                <input class="text-center" type="text" v-model="quantity" disabled>
                                <button @click="increaseQuantity" type="button">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#999"
                                        viewBox="0 0 24 24">
                                        <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div class="container">
                <div class="row">
                    <div class="col-6">

                        <div class="accordion onmalika-accardion" id="accordionExample">

                            <div class="accordion-item" v-if="product.description">
                                <h2 class="accordion-header">
                                    <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        Описание
                                    </button>
                                </h2>
                                <div id="collapseOne" class="accordion-collapse collapse show"
                                    data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        {{ product.description }}
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        Характеристики
                                    </button>
                                </h2>
                                <div id="collapseTwo" class="accordion-collapse collapse"
                                    data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <ul v-for="atrs in product.product_attrs">
                                            <li>{{ atrs.attribute.name }} <span>{{ atrs.attribute_value.value }}</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>





                        </div>

                    </div>
                    <div class="col-6">
                        <div v-cloak v-html="product.content"></div>
                    </div>
                </div>



            </div>
        </section>
       
    </div>
</template>


<script setup>

import { useCartStore } from '~/store/cart';
import { useAuthStore } from '~/store/auth';
const authStore = useAuthStore()
const CartStore = useCartStore()
const route = useRoute()
const router = useRouter()
const { data: product } = await useJsonPlaceholderData('/products/' + route.params.id)
const urlOfMedia = 'https://admin.itpapa.uz'
if (!product.value || !product.value.category) {
    throw createError({ statusCode: 404, message: 'Такого товара нету' })
}
const rating = ref(5);
const galleryArray = ref(null);
onMounted(async () => {
    // Загрузка данных продукта

    galleryArray.value = product.value

    // Создание общего массива изображений
    if (galleryArray.value) {
        let images = []

        // Добавление основного изображения
        if (galleryArray.value.image) {
            images.push({
                ...galleryArray.value.image,
                id: 'main' // Уникальный ID для основного изображения
            })
        }

        // Добавление изображений из галереи
        if (galleryArray.value.gallery && galleryArray.value.gallery.length) {
            images = images.concat(galleryArray.value.gallery.map(g => ({ ...g.image, id: g.id })))
        }

        // Обновление product с новым массивом изображений
        galleryArray.value.images = images
    }
})
const quantity = ref(1);
const increaseQuantity = () => {
    quantity.value++;
};
const decreaseQuantity = () => {
    if (quantity.value > 1) {
        quantity.value--;
    }
};
const addToCart = () => {
    const cartStore = useCartStore();
    cartStore.addToCart(product.value, quantity.value);
};
const goToBrand = async (slug) => {
    await router.push('/brands/' + slug)
}
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
import { useCurrencyStore } from '~/store/currencyStore';
const currencyStore = useCurrencyStore();
const getPriceText = () => {
    const currency = currencyStore.selectedCurrency;
    const priceInfo = product.value.prices_in_currencies[currency];
    if (!priceInfo) {
        return "Цена не указана";
    }
    return `${priceInfo.price} ${priceInfo.symbol}`;
};
useSeoMeta({
    title: product.value.name,
    ogTitle: product.value.name,

});


</script>

