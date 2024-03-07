<template>
    <section>
        <div class="container">
            <h1>Результаты поиска : {{ query }}</h1>
            <div class="row row-cols-4">
                <div class="col mb-4" v-for="product in products.results" :key="product.id">

                    <Card :product_info="product" />
                </div>
            </div>
            <nav aria-label="Page navigation example" v-if="totalPages > 1">
                <ul class="pagination justify-content-center">
                    <li class="page-item">
                        <button class="page-link" :class="{ 'disabled': !prevUrl }" @click="loadPrevPage"
                            :disabled="!prevUrl">Предыдущая страница</button>

                    </li>
                    <li class="page-item" v-for="page in totalPages" :key="page">
                        <button class="page-link" @click="goToPage(page)" :class="{ active: page === currentPage }">
                            {{ page }}
                        </button>
                    </li>
                    <li class="page-item">
                        <button class="page-link" :class="{ 'disabled': !nextUrl }" @click="loadNextPage"
                            :disabled="!nextUrl">Следующая страница</button>

                    </li>
                </ul>
            </nav>

        </div>
    </section>
</template>

<script setup>
const route = useRoute();
const router = useRouter();


const query = computed(() => route.query.search);

const products = ref({ results: [], next: null, previous: null, count: 0 });
const nextUrl = ref(null);
const prevUrl = ref(null);
const currentPage = ref(1);
const totalCount = ref(0);
const pageSize = 3; //
const totalPages = computed(() => Math.ceil(totalCount.value / pageSize));



const fetchProducts = async (url) => {
    console.log('Запрашиваемый URL:', url); // Для отладки URL запроса
    try {
        const res = await useJsonPlaceholderData(url);

        if (res && res.data && res.data.value) {
            const data = res.data.value;
            products.value = data;
            nextUrl.value = data.next;
            prevUrl.value = data.previous;
            totalCount.value = data.count;
        } else {
            console.error('Ответ от сервера пустой или не соответствует ожидаемому формату', res);
        }
    } catch (error) {
        console.error('Ошибка при получении данных: ', error);
    }
};
fetchProducts('/products/?search=' + query.value + '&limit=' + pageSize);


const goToPage = (page) => {
    window.scrollTo(0, 0)
    currentPage.value = page;
    const offset = (page - 1) * pageSize;
    router.push({ path: route.path, query: { ...route.query, page: page } });
    fetchProducts(`/products/?search=${query.value}&limit=${pageSize}&offset=${offset}`);
};
const loadNextPage = () => {
    window.scrollTo(0, 0)
    if (nextUrl.value) {
        const nextPage = currentPage.value + 1;
        currentPage.value = nextPage;
        router.push({ path: route.path, query: { ...route.query, page: nextPage } });
        fetchProducts(nextUrl.value);
    }
};
const loadPrevPage = () => {
    window.scrollTo(0, 0)
    if (prevUrl.value) {
        const prevPage = currentPage.value - 1;
        currentPage.value = prevPage;
        router.push({ path: route.path, query: { ...route.query, page: prevPage } });
        fetchProducts(prevUrl.value);
    }
};


onMounted(() => {
    const pageFromUrl = parseInt(route.query.page, 10);
    currentPage.value = (!isNaN(pageFromUrl) && pageFromUrl > 0) ? pageFromUrl : 1;
    const offset = (currentPage.value - 1) * pageSize;
    fetchProducts(`/products/?search=${query.value}&limit=${pageSize}&offset=${offset}`);
});

const updateProductsByPage = (page) => {
    const offset = (page - 1) * pageSize;
    fetchProducts(`/products/?search=${query.value}&limit=${pageSize}&offset=${offset}`);
};

watch(() => route.query.page, (newPage) => {
    const page = parseInt(newPage, 10) || 1;
    if (page !== currentPage.value) {
        currentPage.value = page;
        updateProductsByPage(page);
    }
}, { immediate: true });

</script>

<style lang="scss" scoped></style>
