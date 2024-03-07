<template>
    <div class="container">
        <div class="modal-search-input">

            <form ref="searchWrapper" @submit.prevent="goToSearch">
                <div class="input-group">
                    <span class="input-group-text" id="basic-addon1">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
                                stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M22 22L20 20" stroke="black" stroke-width="1.5" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>

                    </span>
                    <input autocomplete="off" type="text" class="form-control" placeholder="Найдите свой товар!"
                        v-model="searchQuery" id="search" aria-describedby="search">
                </div>
                <button type="button" @click.prevent="goToSearch" class="btn dark-cover">Поиск</button>
            </form>
            <button type="button" class="dark-cover close" data-bs-dismiss="modal">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.33301 12.6667L12.6663 3.33333" stroke="white" stroke-width="1.5" stroke-linecap="round"
                        stroke-linejoin="round" />
                    <path d="M12.6663 12.6667L3.33301 3.33333" stroke="white" stroke-width="1.5" stroke-linecap="round"
                        stroke-linejoin="round" />
                </svg>
            </button>

        </div>
        <div class="row" v-if="searchResults && searchResults.results && searchResults.results.length > 0">
            <div class="col-2 mb-4" v-for="item in searchResults.results" :key="item.id">

                <div class="card onmalika-card h-100 mini-card">
                    <div class="onmalika-card-badges">
                        <span class="badge onmalika-card-badges-new">new</span>
                        <span class="badge onmalika-card-badges-sales">-20%</span>
                    </div>

                    <button class="onmalika-card-favorite" v-if="!userFav" @click="checkAuth">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M12.62 20.81C12.28 20.93 11.72 20.93 11.38 20.81C8.48 19.82 2 15.69 2 8.68998C2 5.59998 4.49 3.09998 7.56 3.09998C9.38 3.09998 10.99 3.97998 12 5.33998C13.01 3.97998 14.63 3.09998 16.44 3.09998C19.51 3.09998 22 5.59998 22 8.68998C22 15.69 15.52 19.82 12.62 20.81Z"
                                stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                    </button>
                    <NuxtLink data-bs-dismiss="modal"
                        :to="'/shop' + '/' + item.category.parent.slug + '/' + item.category.slug + '/' + item.slug">
                        <img  v-if="item && item.image && item.image.url" :src="baseurl + item.image.url"
                            class="card-img-top" alt="..." />
                        <img  v-else src="https://placehold.co/250x250" class="w-100" alt="" />
                    </NuxtLink>
                    <div class="card-body onmalika-card-body">
                        <h5 class="onmalika-card-title" v-html="highlightSearchQuery(item.name)"></h5>
                        <div class="onmalika-card-stock">
                            <div class="stock in-stock">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                                        stroke="#46AC36" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                    <path d="M7.75 11.9999L10.58 14.8299L16.25 9.16992" stroke="#46AC36" stroke-width="1.5"
                                        stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <p> Есть в наличии</p>
                            </div>

                        </div>
                        <div class="onmalika-card-price">
                            <span :class="{ 'active': item.sales_price }"> {{ getPriceText(item) }}</span>
                            <p :class="{ 'd-none': !item.sales_price }">{{ item.sales_price
                            }}</p>
                        </div>
                        <div class="onmalika-card-body-orderbtn ">
                            <button @click="addToCart(item)" type="button"
                                class="btn dark-cover justify-content-center">
                                В корзину</button>
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
            <div class="col-4">
                <button type="button" data-bs-dismiss="modal" class="btn light-cover w-100" @click.prevent="goToSearch"
                    v-if="searchResults && searchResults.results && searchResults.results.length == 6">Посмотреть все
                    результаты</button>
            </div>
        </div>
        <div v-else-if="searchQuery && searchResults && searchResults.results && !searchResults.results.length">
            <div class="modal-search-input-noresult d-flex column-gap-3 align-items-center">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 15V23.3333" stroke="black" stroke-width="1.5" stroke-linecap="round"
                        stroke-linejoin="round" />
                    <path
                        d="M19.9997 35.6833H9.89973C4.11639 35.6833 1.69973 31.55 4.49973 26.5L9.69973 17.1333L14.5997 8.33333C17.5664 2.98333 22.4331 2.98333 25.3997 8.33333L30.2997 17.15L35.4997 26.5167C38.2997 31.5667 35.8664 35.7 30.0997 35.7H19.9997V35.6833Z"
                        stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M19.9902 28.3333H20.0052" stroke="black" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round" />
                </svg>
                <p>по вашему запросу ничего не найденно
                    <span>Попробуйте заново</span>
                </p>
            </div>
        </div>

        <div v-else class="row modal-search-results">
            <div class="col-2">
                <h6 class="modal-search-results-title">Часто ищут</h6>
                <ul>
                    <li>
                        <a href=""> Кондиционеры</a>
                    </li>
                    <li>
                        <a href=""> Кондиционеры</a>

                    </li>
                </ul>
            </div>
            <div class="col-8">
                <h6 class="modal-search-results-title">популярные товары</h6>

                <div class="row row-cols-4">
                    <div class="col" v-for="product in products.results" :key="product.id">

                        <MiniCard  data-bs-dismiss="modal" :product_info="product" />
                    </div>


                </div>

            </div>
        </div>
    </div>
</template>

<script setup>
import pkg from 'lodash';
const { debounce } = pkg;
const baseurl = 'https://admin.itpapa.uz'
const { data: products } = await useJsonPlaceholderData('/products/?limit=3')

const searchQuery = ref('');
const searchResults = ref([]);
const router = useRouter()
const searchWrapper = ref(null); // Референс для обертки поиска
const debouncedFetchSearchResults = debounce(async (query) => {
    if (!query) return;
    try {

        const response = await useJsonPlaceholderData(`/products/?search=${query}&limit=6`);

        searchResults.value = response.data.value;

    } catch (error) {

        console.error('Ошибка запроса: ', error);
        searchResults.value = [];

    }
}, 700);

const goToSearch = async () => {
    if (searchQuery.value.trim() === '') {
        alert('Введите что нибудь')
    } else {
        await router.push(`/search?search=${searchQuery.value}`)
        searchResults.value = [];
        searchQuery.value = ''
        location.reload()
    }
}
const highlightSearchQuery = (text) => {
    if (!searchQuery.value) return text;

    // Разделяем запрос на слова и экранируем каждое слово
    const words = searchQuery.value.trim().split(/\s+/).map(escapeRegExp);
    // Создаем регулярное выражение, чтобы найти все слова
    const regex = new RegExp(`(${words.join('|')})`, 'gi');

    return text.replace(regex, matched => `<span style="color: red;">${matched}</span>`);
};

function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // Экранирование спецсимволов
}

watch(searchQuery, (newValue) => {
    if (newValue && newValue.length >= 2) {
        debouncedFetchSearchResults(newValue);
    } else {
        searchResults.value = []; // Явно обнуляем результаты при очистке запроса
        if (newValue === '') {
            // Если поле поиска пустое, не нужно ожидать завершения debounce
            debouncedFetchSearchResults.cancel(); // Lodash debounce поддерживает метод cancel
        }
    }
});

import { useCurrencyStore } from '~/store/currencyStore';
const currencyStore = useCurrencyStore();
const getPriceText = (product) => {
    const selectedCurrency = currencyStore.selectedCurrency;
    const priceInfo = product.prices_in_currencies[selectedCurrency];
    if (!priceInfo) {
        return "Цена не указана";
    }
    return `${priceInfo.price} ${priceInfo.symbol}`;
};
</script>

