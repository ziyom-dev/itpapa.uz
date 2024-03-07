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
                        <NuxtLink :to="'/shop/' + previous_category.slug">{{ previous_category.name }}</NuxtLink>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">{{ solo_category.name }}</li>
                </ol>
            </nav>
        </div> <!-- container //  -->

        <section class="padding-y">
            <div class="container">
                <div class="row mb-4">
                    <div class="col-3">
                        <div class="accordion onmalika-accardion mb-5" id="accordionCategories">
                            <div class="accordion-item" v-for="(cats, index) in hierarchicalCategories" :key="cats.id">
                                <h2 class="accordion-header" :id="'headingOne-' + cats.slug">
                                    <button class="accordion-button" :class="{ 'collapsed': !isSubcategorySelected(cats) }"
                                        type="button" data-bs-toggle="collapse"
                                        :data-bs-target="'#collapseOne-' + cats.slug" aria-expanded="true"
                                        :aria-controls="'collapseOne-' + cats.slug">
                                        {{ cats.name }}
                                    </button>
                                </h2>
                                <div :id="'collapseOne-' + cats.slug" class="accordion-collapse collapse"
                                    :class="{ 'show': isSubcategorySelected(cats) }"
                                    :aria-labelledby="'headingOne' + cats.slug" data-bs-parent="#accordionCategories">
                                    <div class="accordion-body">
                                        <div class="form-check" v-for="subcat in cats.subcategories">
                                            <input @click="handleRadioClick(subcat.slug)" class="form-check-input"
                                                :checked="route.params.subCategory === subcat.slug" type="radio"
                                                name="categoryRadio" :id="'category' + subcat.id" :value="subcat.slug">
                                            <label class="form-check-label" :for="'category' + subcat.id">
                                                {{ subcat.name }}
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="multi-range mb-5">
                            <div class="multi-range-inputs">
                                <input @keydown="validateInput" type="number" v-model="barMinValue" @input="updateMinValue"
                                    class="form-control gray-conrol w-100">
                                <input @keydown="validateInput" type="number" v-model="barMaxValue" @input="updateMaxValue"
                                    class="form-control gray-conrol w-100">
                            </div>
                            <MultiRangeSlider :min="0" :step="100" :max="1000" :ruler="false" :label="false"
                                :minValue="barMinValue" :maxValue="barMaxValue" @input="UpdateValues" />
                        </div>
                        <div class="accordion onmalika-accardion mb-5" id="accordionFilters">
                            <div class="accordion-item" v-for="(atrs, index) in attrList" :key="index">
                                <h2 class="accordion-header">
                                    <button type="button" class="accordion-button" data-bs-toggle="collapse"
                                        :data-bs-target="'#collapseOne' + index">
                                        <i class="icon-control fa fa-chevron-down"></i>
                                        {{ atrs.attribute.name }}
                                    </button>
                                </h2>
                                <div class="accordion-collapse show" :id="'collapseOne' + index">
                                    <div class="accordion-body">
                                        <label class="form-check mb-2" v-for="atr_val in atrs.attribute_values">
                                            <input class="form-check-input" type="checkbox"
                                                @click="handleCheckboxClick($event, atr_val.id)"
                                                :checked="isSelected(atr_val.id)"
                                                @change="handleCheckboxChange($event, atr_val.id)" :value="atr_val.id">
                                            <span class="form-check-label"> {{ atr_val.value }} </span>

                                        </label>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-9">
                        <div class="row justify-content-between mb-3">
                            <div class="col-3">
                                <div class="dropdown onmalika-dropdown">
                                    <button class="btn onmalika-dropdown-toggle dropdown-toggle" type="button"
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                        {{ selectedFilterText }}
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M13.2807 5.9668L8.93404 10.3135C8.4207 10.8268 7.5807 10.8268 7.06737 10.3135L2.7207 5.9668"
                                                stroke="black" stroke-width="1.5" stroke-miterlimit="10"
                                                stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>

                                    </button>
                                    <ul class="dropdown-menu onmalika-dropdown-menu">
                                        <li>
                                            <div class="form-check dropdown-item">
                                                <input @click="updateFilter('price', 'По возрастанию цены')"
                                                    class="form-check-input" type="radio" name="sortRadio" id="price-up">
                                                <label class="form-check-label" for="price-up">
                                                    По возрастанию
                                                    цены
                                                </label>
                                            </div>

                                        </li>
                                        <li>
                                            <div class="form-check dropdown-item">
                                                <input @click="updateFilter('-price', 'По убыванию цены')"
                                                    class="form-check-input" type="radio" name="sortRadio" id="price-down">
                                                <label class="form-check-label" for="price-down">
                                                    По
                                                    убыванию цены
                                                </label>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="form-check dropdown-item">
                                                <input @click="updateFilter('name', 'В алфавитном порядке')"
                                                    class="form-check-input" type="radio" name="sortRadio" id="ASC">
                                                <label class="form-check-label" for="ASC">
                                                    В
                                                    алфавитном порядке
                                                </label>
                                            </div>

                                        </li>
                                        <li>
                                            <div class="form-check dropdown-item">
                                                <input @click="updateFilter('-name', 'С конца алфавитного порядка')"
                                                    class="form-check-input" type="radio" name="sortRadio" id="DESC">
                                                <label class="form-check-label" for="DESC">
                                                    С конца
                                                    алфавитного порядка
                                                </label>
                                            </div>

                                        </li>
                                    </ul>
                                </div>

                            </div>
                            <div class="col-auto">
                                <div class="dropdown onmalika-dropdown">
                                    <button class="btn onmalika-dropdown-toggle dropdown-toggle" type="button"
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                        Сколько товаров показывать
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M13.2807 5.9668L8.93404 10.3135C8.4207 10.8268 7.5807 10.8268 7.06737 10.3135L2.7207 5.9668"
                                                stroke="black" stroke-width="1.5" stroke-miterlimit="10"
                                                stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>

                                    </button>
                                    <ul class="dropdown-menu onmalika-dropdown-menu">
                                        <li>
                                            <div class="form-check dropdown-item">
                                                <input @click="updatePageSize('9')" class="form-check-input" type="radio"
                                                    name="categoryRadio" id="price-up">
                                                <label class="form-check-label" for="price-up">
                                                    9
                                                </label>
                                            </div>

                                        </li>
                                        <li>
                                            <div class="form-check dropdown-item">
                                                <input @click="updatePageSize('12')" class="form-check-input" type="radio"
                                                    name="categoryRadio" id="price-down">
                                                <label class="form-check-label" for="price-down">
                                                    12
                                                </label>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="form-check dropdown-item">
                                                <input @click="updatePageSize('15')" class="form-check-input" type="radio"
                                                    name="categoryRadio" id="ASC">
                                                <label class="form-check-label" for="ASC">
                                                    15
                                                </label>
                                            </div>

                                        </li>

                                    </ul>
                                </div>

                            </div>
                        </div>
                        <div class="row row-cols-3">
                            <div class="col mb-4" v-for="product in products" :key="product.id">
                                <LazyCard :product_info="product" />
                            </div>
                        </div>
                    </div>
                </div>
                <nav aria-label="Page navigation example" v-if="totalPages > 1">
                    <ul class="pagination onmalika-pagination justify-content-center">
                        <li class="page-item">
                            <button type="button" class="dark-cover" :class="{ 'disabled': currentPage === 1 }"
                                @click="loadPrevPage" :disabled="currentPage === 1">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.9763 4.94165L2.91797 9.99998L7.9763 15.0583" stroke="white"
                                        stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                    <path d="M17.0836 10H3.05859" stroke="white" stroke-width="1.5" stroke-miterlimit="10"
                                        stroke-linecap="round" stroke-linejoin="round" />
                                </svg>

                            </button>

                        </li>
                        <li class="page-item" v-for="page in paginationRange" :key="page">
                            <div v-if="page === '...'">
                                <span class="onmalika-pagination-more">...</span>
                            </div>
                            <button type="button" v-else class="onmalika-pagination-links" @click="goToPage(page)"
                                :class="{ active: page === currentPage }">
                                {{ page }}
                            </button>
                        </li>
                        <li class="page-item">
                            <button type="button" class="dark-cover" :class="{ 'disabled': currentPage === totalPages }"
                                @click="loadNextPage" :disabled="currentPage === totalPages">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.0234 4.94165L17.0818 9.99998L12.0234 15.0583" stroke="white"
                                        stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                    <path d="M2.91797 10H16.943" stroke="white" stroke-width="1.5" stroke-miterlimit="10"
                                        stroke-linecap="round" stroke-linejoin="round" />
                                </svg>

                            </button>

                        </li>
                    </ul>
                </nav>

            </div>
        </section>
    </div>
</template>

<script setup>
const route = useRoute();
const router = useRouter();

const attrList = ref()
const { data: category } = await useJsonPlaceholderData('/categories/')
const { data: solo_category } = await useJsonPlaceholderData('/categories/' + route.params.subCategory)
const { data: attr_list } = await useJsonPlaceholderData(`/products/?category=${solo_category.value.id}`)
attrList.value = attr_list.value.attr_filters
if (!solo_category.value) {
    throw createError({ statusCode: 404, message: 'Такой категории нету' })
}
const { data: previous_category } = await useJsonPlaceholderData('/categories/' + route.params.category)
const getCategories = computed(() => category.value)
const hierarchicalCategories = ref([]);
const createHierarchicalStructure = (data) => {
    const categoriesById = {};

    data.results.forEach(category => {
        category.subcategories = [];
        categoriesById[category.id] = category;
    });

    data.results.forEach(category => {
        if (category.parent && categoriesById[category.parent.id]) {
            categoriesById[category.parent.id].subcategories.push(category);
        }
    });

    return data.results.filter(category => !category.parent);
};
const isSubcategorySelected = (cats) => {
    return cats.subcategories.some(subcat => route.params.subCategory === subcat.slug);
};
const products = ref([]);
const nextUrl = ref(null);
const prevUrl = ref(null);
const currentPage = ref(1);
const totalCount = ref(0);
const selectedAttributes = ref([])
const pageSize = ref(9)
const updatePageSize = (size) => {
    pageSize.value = Number(size);
    router.push({ path: route.path, query: { ...route.query, pageSize: size } });
    fetchProducts('/products/?category=' + solo_category.value.id + '&limit=' + pageSize.value);
};

pageSize.value = Number(route.query.pageSize) || 9;

watch(() => route.query.pageSize, (newSize) => {
    if (newSize !== undefined && newSize !== pageSize.value) {
        pageSize.value = Number(newSize);
        fetchProducts('/products/?category=' + solo_category.value.id + '&limit=' + pageSize.value);
    }
});
const totalPages = computed(() => Math.ceil(totalCount.value / pageSize.value));

const handleRadioClick = async (value) => {
    const { data: nextCat } = await useJsonPlaceholderData('/categories/' + value)
    const newUrl = '/shop/' + nextCat.value.parent.slug + '/' + value;
    router.push(newUrl);
};
const selectFilterOfProducts = ref('');
const selectedFilterText = ref('Выберите сортировку');
const sortFilter = ref('');

import MultiRangeSlider from "multi-range-slider-vue";
const barMinValue = ref(0)
const barMaxValue = ref(1000)
const priceFilterTimeout = ref(null);
const validateInput = (event) => {
    // Разрешить только цифры
    if (!/[0-9]/.test(event.key) && event.key !== "Backspace" && event.key !== "Tab") {
        event.preventDefault();
    }
}
const validateAndSetNumber = (value, targetRef) => {
    const number = Number(value);
    if (!isNaN(number) && number >= 0) {
        targetRef.value = number;
    } else {
        console.error("Invalid input. Please enter a valid number.");
    }
    debounceFetchProducts();
};

const updateMinValue = (e) => {
    validateAndSetNumber(e.target.value, barMinValue);
};

const updateMaxValue = (e) => {
    validateAndSetNumber(e.target.value, barMaxValue);
};
const UpdateValues = (e) => {
    barMinValue.value = e.minValue;
    barMaxValue.value = e.maxValue;
    if (priceFilterTimeout.value) {
        clearTimeout(priceFilterTimeout.value);
    }
    debounceFetchProducts();
}
const debounceFetchProducts = () => {
    if (priceFilterTimeout.value) clearTimeout(priceFilterTimeout.value);
    priceFilterTimeout.value = setTimeout(() => {
        let url = `/products/?category=${solo_category.value.id}&limit=${pageSize.value}&price_from=${barMinValue.value}&price_to=${barMaxValue.value}`
        if (route.query.attr) {
            url += `&attr=${route.query.attr}`;
        }
        fetchProducts(url);
    }, 1000);
};

watch([barMinValue, barMaxValue], () => {
    // Проверка, что timeout был уже установлен и ожидание истекло
    if (priceFilterTimeout.value) {
        clearTimeout(priceFilterTimeout.value);
    }
    priceFilterTimeout.value = setTimeout(() => {
        if (route.query.attr) {
            fetchProducts(`/products/?category=${solo_category.value.id}&limit=${pageSize.value}&attr=${route.query.attr}&price_from=${barMinValue.value}&price_to=${barMaxValue.value}`)
        } else {
            fetchProducts(`/products/?category=${solo_category.value.id}&limit=${pageSize.value}&price_from=${barMinValue.value}&price_to=${barMaxValue.value}`);
        }

    }, 1000);
});

const fetchProducts = async (url) => {
    try {
        const res = await useJsonPlaceholderData(url + '&ordering=' + sortFilter.value, {
            cache: false
        });
        const data = res.data

        products.value = data.value.results;

        nextUrl.value = data.value.next;
        prevUrl.value = data.value.previous;
        totalCount.value = data.value.count;

    } catch (error) {
        console.error('Ошибка при получении данных: ', error);
    }
};
fetchProducts('/products/?category=' + solo_category.value.id + '&limit=' + pageSize.value);
if (route.query.page) {
    console.log(route.query.page)

}
const goToPage = async (page) => {
    window.scrollTo(0, 0)
    currentPage.value = page;
    const offset = (page - 1) * pageSize.value;
    let url = `/products/?category=${solo_category.value.id}&limit=${pageSize.value}&offset=${offset}`;
    if (route.query.attr) {
        url += `&attr=${route.query.attr}`;
    }
    await fetchProducts(url);
    await router.push({ path: route.path, query: { ...route.query, page: page } });


};
const loadNextPage = async () => {
    window.scrollTo(0, 0);
    const nextPage = currentPage.value + 1;
    if (nextPage <= totalPages.value) {
        currentPage.value = nextPage;
        let url = `/products/?category=${solo_category.value.id}&limit=${pageSize.value}&offset=${(nextPage - 1) * pageSize.value}`
        if (route.query.attr) {
            url += `&attr=${route.query.attr}`;
        }
        fetchProducts(url);

    }
    await router.push({ path: route.path, query: { ...route.query, page: nextPage } });
};
const loadPrevPage = async () => {
    window.scrollTo(0, 0);
    const prevPage = currentPage.value - 1;
    if (prevPage >= 1) {
        currentPage.value = prevPage;
        let url = `/products/?category=${solo_category.value.id}&limit=${pageSize.value}&offset=${(prevPage - 1) * pageSize.value}`
        if (route.query.attr) {
            url += `&attr=${route.query.attr}`;
        }
        fetchProducts(url);
        await router.push({ path: route.path, query: { ...route.query, page: prevPage } });

    };
}
const updateProductsByPage = (page) => {
    const offset = (page - 1) * pageSize.value;
    let url = `/products/?category=${solo_category.value.id}&limit=${pageSize.value}&offset=${offset}`
    if (route.query.attr) {
        url += `&attr=${route.query.attr}`;
    }
    fetchProducts(url);

};
const handleCheckboxClick = (event, id) => {
    if (!event.target.checked) {

        setFilter(id, !event.target.checked);
    }
};
const handleCheckboxChange = (event, id) => {
    const parsedId = parseInt(id, 10);
    const index = selectedAttributes.value.findIndex(value => value === parsedId);

    if (event.target.checked) {
        if (index === -1) {
            selectedAttributes.value.push(parsedId);
        }
    } else {
        if (index != -1) {
            selectedAttributes.value.splice(index, 1);
        }
    }

    updateProductsByAttributes();

    const { path, query } = router.currentRoute.value;
    const newQuery = {};

    if (selectedAttributes.value.length > 0) {
        newQuery.attr = selectedAttributes.value.map(String).join(',');
    }




    router.push({
        path: path,
        query: newQuery
    });
};
watch(selectedAttributes, () => {
    const { path, query } = router.currentRoute.value;
    const newQuery = { ...query };
    if (selectedAttributes.value.length === 0) {
        delete newQuery.attr;
    } else {
        newQuery.attr = selectedAttributes.value.join(',');
    }

    router.replace({
        path: path,
        query: newQuery
    });
});
const updateFilter = (value, text) => {
    selectFilterOfProducts.value = value;
    selectedFilterText.value = text;
};
watch(selectFilterOfProducts, () => {
    sortFilter.value = selectFilterOfProducts.value;
    updateProductsByPage(currentPage.value);
});

const setFilter = (id, event) => {
    if (event == undefined || event == false) {
        const parsedId = parseInt(id, 10);
        const index = selectedAttributes.value.findIndex(value => value === parsedId);
        if (index !== -1) {
            selectedAttributes.value.splice(index, 1);
        } else {
            selectedAttributes.value.push(parsedId);
        }
        const { path, query } = router.currentRoute.value;
        const newQuery = { ...query };
        if (selectedAttributes.value.length === 0) {
            delete newQuery.attr;
        } else {
            newQuery.attr = selectedAttributes.value.join(',');
        }

        router.push({
            path: path,
            query: newQuery
        });

        updateProductsByAttributes();
    }
};

const isSelected = (id) => {
    const queryParams = route.query.attr ? route.query.attr.split(',').map(value => parseInt(value, 10)) : [];
    const isSelected = queryParams.includes(id);
    return isSelected;
};
const updateProductsByAttributes = () => {
    const attributesQueryParam = selectedAttributes.value.join(',');

    const apiUrl = `/products/?category=${solo_category.value.id}&limit=${pageSize.value}&attr=${attributesQueryParam}`;
    fetchProducts(apiUrl);

};
onBeforeUpdate(() => {
    nextUrl.value = null;
    prevUrl.value = null;
});
onMounted(async () => {
    const categoriesData = await getCategories.value;
    hierarchicalCategories.value = createHierarchicalStructure(categoriesData);
    if (route.query.page) {
        const page = parseInt(route.query.page);
        currentPage.value = isNaN(page) ? 1 : page;
    }
    const attrQueryParam = route.query.attr;
    if (attrQueryParam) {
        const attrPairs = attrQueryParam.split(',');
        for (const pair of attrPairs) {
            const [id] = pair.split(':');
            const attribute = attrList.value.find(attr => {
                return attr.attribute_values.some(value => value.id === parseInt(id));
            });

            if (attribute) {

                setFilter(id);

                // Добавим небольшую задержку (например, 100 мс) между вызовами setFilter
                await new Promise(resolve => setTimeout(resolve, 1));
            } else {
                console.error(`Attribute with ID ${id} not found.`);
            }
        }
    }
    const pageFromUrl = parseInt(route.query.page, 10);
    if (!isNaN(pageFromUrl) && pageFromUrl > 0) {
        currentPage.value = pageFromUrl;
        updateProductsByPage(pageFromUrl);
    } else {

        fetchProducts('/products/?category=' + solo_category.value.id + '&limit=' + pageSize.value);
    }
});



const paginationRange = computed(() => paginate(totalPages.value, currentPage.value, 2));

function paginate(totalPages, currentPage, width) {
    let start = currentPage - width;
    let end = currentPage + width;
    const range = [];

    if (start > 1) {
        range.push(1);
    }

    if (start > 2) {
        range.push('...');
    }

    start = Math.max(start, 1);
    end = Math.min(end, totalPages);

    for (let i = start; i <= end; i++) {
        range.push(i);
    }

    if (end < totalPages - 1) {
        range.push('...');
    }

    if (end < totalPages) {
        range.push(totalPages);
    }

    return range;
}

useSeoMeta({
    title: solo_category.value.name,
    ogTitle: solo_category.value.name,
})

</script>



