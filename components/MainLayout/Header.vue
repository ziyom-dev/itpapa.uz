<template>
    <header class="onmalika-header">
        <div class="container">
            <div class="onmalika-header-top d-flex justify-content-between">
                <ul class="navbar-nav onmalika-header-top-nav">
                    <li class="nav-item">
                        <NuxtLink class="nav-link" aria-current="page" to="/about">О нас</NuxtLink>
                    </li>
                    <li class="nav-item">
                        <NuxtLink class="nav-link" aria-current="page" to="/contacts">Контакты</NuxtLink>
                    </li>
                </ul>
                <div class="onmalika-header-top-currency d-flex">
                    <div class="d-flex align-items-center column-gap-3">
                        <p>Показывать цены на сайте:</p>
                        <div class="onmalika-header-top-currency-toggle" style="position: relative; height: 30px;">
                            <span v-for="(cur, index) in currency" :key="cur.id" :style="currencyStyles[index]"
                                @click="toggleCurrency">
                                {{ cur.code }}
                            </span>

                        </div>
                    </div>
                    <div class="onmalika-header-top-social d-flex">
                        <a href="https://instagram.com/onmalika.uz" target="_blank"><img src="/img/instagram.svg"
                                alt="" /></a>
                        <a href="https://www.facebook.com/onmalika.uz" target="_blank"> <img src="/img/facebook.svg"
                                alt="" /></a>
                        <a href="https://t.me/onmalika" target="_blank"> <img src="/img/telegram.svg" alt="" /></a>
                    </div>
                </div>
            </div>
        </div>
        <hr>
        <div class="container">
            <nav class="navbar navbar-expand-lg onmalika-header-bottom justify-content-between">
                <div class="onmalika-header-bottom-menu d-flex">
                    <NuxtLink class="navbar-brand" to="/">
                        <img src="/img/Logo.svg" alt="" />
                    </NuxtLink>
                    <button class="btn dark-cover btn-elemetn-in" type="button" ref="toggleButtonRef"
                        @click="toggleDisabled" :class="{ 'active': !isShown }">
                        Каталог

                        <svg :class="{ 'd-none': !isShown }" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 7H21" stroke="white" stroke-width="1.5" stroke-linecap="round" />
                            <path d="M3 12H21" stroke="white" stroke-width="1.5" stroke-linecap="round" />
                            <path d="M3 17H21" stroke="white" stroke-width="1.5" stroke-linecap="round" />
                        </svg>
                        <svg :class="{ 'd-none': isShown }" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 19L19 5" stroke="black" fill="currentcolor" stroke-width="1.5"
                                stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M19 19L5 5" stroke="black" fill="currentcolor" stroke-width="1.5"
                                stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                    </button>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <NuxtLink class="nav-link" aria-current="page" to="/about">О нас</NuxtLink>
                            </li>
                            <li class="nav-item">
                                <NuxtLink class="nav-link" aria-current="page" to="/contacts">Контакты</NuxtLink>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="onmalika-header-bottom-user">
                    <button type="button" data-bs-toggle="modal" data-bs-target="#searchModal" class="btn dark-cover">
                        <img src="/img/search-normal.svg" alt="" />
                    </button>
                    <div class="dark-cover onmalika-header-bottom-user-nav">
                        <a class="onmalika-header-bottom-tel" href="tel:+998951031111"><b>+998 95 103 11 11</b></a>
                        <MainLayoutHeaderUser />
                    </div>
                </div>
            </nav>
        </div>
        <div class="onmalika-category" :class="{ 'd-block': !isShown }">
            <div class="container">
                <div ref="categoryBlockRef" class="onmalika-category-block">
                    <div class="row justify-content-between">
                        <div class="col-3">
                            <ul class="nav onmalika-category-block-list nav-pills mb-3" id="pills-tab" role="tablist">
                                <li v-for="(cat, index) in hierarchicalCategories" :key="cat.id" class="nav-item"
                                    role="presentation">
                                    <button @click="loadSubcategories(cat.id, index)" class="nav-link"
                                        :class="{ 'active': index == 0 }" :id="'pills-tab-' + index" data-bs-toggle="pill"
                                        :data-bs-target="'#pills-content-' + index" type="button" role="tab"
                                        :aria-controls="'pills-content-' + index" aria-selected="true">
                                        <span>
                                            <svg width="100%" height="24" class="icon" viewBox="0 0 24 24" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M11.9199 22C17.4199 22 21.9199 17.5 21.9199 12C21.9199 6.5 17.4199 2 11.9199 2C6.41992 2 1.91992 6.5 1.91992 12C1.91992 17.5 6.41992 22 11.9199 22Z"
                                                    stroke="black" stroke-width="1.5" stroke-linecap="round"
                                                    stroke-linejoin="round" />
                                                <path d="M7.91992 12H15.9199" stroke="black" stroke-width="1.5"
                                                    stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                            {{ cat.name }}
                                        </span>
                                        <svg width="100%" height="14" class="arrow-icon" viewBox="0 0 14 14" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M5.19727 11.62L9.0006 7.81667C9.44977 7.36751 9.44977 6.63251 9.0006 6.18334L5.19727 2.38"
                                                stroke="black" stroke-width="1.5" stroke-miterlimit="10"
                                                stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </button>
                                </li>
                            </ul>
                        </div>
                        <div class="col-8">
                            <div class="tab-content onmalika-category-block-subcats" id="pills-tabContent">
                                <div v-for="(cat, index) in hierarchicalCategories" :key="cat.id" class="tab-pane fade"
                                    :class="{ 'show active': index == 0 }" :id="'pills-content-' + index">
                                    <ul class="list-menu"
                                        v-if="cat && cat.subcategoriesLoaded && cat.subcategories && cat.subcategories.length > 0">
                                        <li c v-for="(subcat, index) in cat.subcategories" :key="cat.id">
                                            <NuxtLink @click="close" :to="`/shop/${subcat.parent.slug}/${subcat.slug}`">
                                                {{
                                                    subcat.name }}</NuxtLink>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script setup>
const { data: category } = await useJsonPlaceholderData('/categories/')
const getCategories = computed(() => category.value)
const hierarchicalCategories = ref([]);
const createHierarchicalStructure = (data) => {
    const categoriesById = {};
    data.results.forEach(category => {
        category.subcategories = [];
        categoriesById[category.id] = category;
    });

    data.results.forEach(category => {
        if (category.parent && categoriesById.hasOwnProperty(category.parent.id)) {
            categoriesById[category.parent.id].subcategories.push(category);
        }
    });

    return data.results.filter(category => category.parent === null);
};
async function loadSubcategories(categoryId, index) {
    try {
        const response = await useJsonPlaceholderData(`/categories/?parent=${categoryId}`);
        if (response && response.data && response.data.value && response.data.value.results) {
            hierarchicalCategories.value[index].subcategories = response.data.value.results;
            hierarchicalCategories.value[index].subcategoriesLoaded = true;
        } else {
            // Обработка случая, когда ответ не содержит ожидаемых данных
            console.error('Полученный ответ не содержит ожидаемых данных:', response);
        }
    } catch (error) {
        // Обработка ошибки запроса
        console.error('Ошибка при загрузке подкатегорий:', error);
    }
}
const categoryBlockRef = ref(null);
const toggleButtonRef = ref(null);
const isShown = ref(true);
const handleClickOutside = (event) => {
    if (categoryBlockRef.value && !categoryBlockRef.value.contains(event.target) &&
        toggleButtonRef.value && !toggleButtonRef.value.contains(event.target)) {
        isShown.value = true;
    }
};
const close = () => {
    isShown.value = true;
}
const toggleDisabled = () => {
    isShown.value = !isShown.value;
};
onMounted(() => {
    hierarchicalCategories.value = createHierarchicalStructure(getCategories.value);
    if (hierarchicalCategories.value.length > 0) {
        setTimeout(() => {
            loadSubcategories(hierarchicalCategories.value[0].id, 0);
        }, 500); // Задержка в 500 мс, значение можно подстроить под ваш случай
    }
    window.addEventListener('click', handleClickOutside);
});
onUnmounted(() => {
    window.removeEventListener('click', handleClickOutside);
});

import { useCurrencyStore } from '~/store/currencyStore';
const { data: currency } = await useJsonPlaceholderData('/currency/')
const currencyStore = useCurrencyStore();
const uzsIndex = currency.value.findIndex(cur => cur.code === 'UZS');
const currentIndex = ref(uzsIndex !== -1 ? uzsIndex : 0);
function selectCurrency(index) {
    currentIndex.value = index;
    const cur = currency.value[index];
    console.log(cur)
    currencyStore.setSelectedCurrency(cur.code);
}
const currencyStyles = computed(() => {
    return currency.value.map((_, index) => {
        if (index === currentIndex.value) {
            // Текущая выбранная валюта, которая будет в центре
            return {
                transform: 'translateY(0)',
                transition: 'transform 0.5s',
                position: 'absolute',
                left: '0',
                bottom: '0',
                display: 'flex',
                top: '0',
                right: 0,
                zIndex: 2, // Убедитесь, что текущий элемент находится над другими элементами
            };
        } else if (index < currentIndex.value) {
            // Элементы, которые должны быть выше текущего
            return {
                transform: 'translateY(-100%)',
                transition: 'transform 0.5s',
                position: 'absolute',
                left: '0',
                bottom: '0',
                display: 'flex',
                top: '0',
                right: 0,
                zIndex: 1,
            };
        } else {
            // Элементы, которые должны быть ниже текущего
            return {
                transform: 'translateY(100%)',
                transition: 'transform 0.5s',
                position: 'absolute',
                left: '0',
                bottom: '0',
                display: 'flex',
                top: '0',
                right: 0,
                zIndex: 1,
            };
        }
    });
});
const toggleCurrency = () => {
    currentIndex.value = (currentIndex.value + 1) % currency.value.length;
    selectCurrency(currentIndex.value);
};


</script>

