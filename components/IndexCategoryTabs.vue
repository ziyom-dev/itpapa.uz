<template>
    <div class="category-tablist">

        <div class="row">
            <div class="col-6">
                <ul class="nav nav-pills onmalika-index-categories mb-3" id="pills-tab" role="tablist">
                    <li class="nav-item" v-for="(cat, index) in categories" :key="cat.id" role="presentation">
                        <button @click="loadProductsForCategory(cat, index)" class="nav-link btn-success btn"
                            :class="{ 'active': index == 0 }" :id="`pills-category-tab${index}`" data-bs-toggle="pill"
                            :data-bs-target="`#pills-category${index}`" type="button" role="tab"
                            :aria-controls="`pills-category${index}`" aria-selected="true">{{ cat.name
                            }}</button>
                    </li>
                </ul>
            </div>
        </div>
        <div class="tab-content" id="pills-tabContent">
            <div class="tab-pane fade" :class="{ 'active show': index == 0 }" v-for="(cat, index) in categories"
                :key="cat.id" :id="`pills-category${index}`" role="tabpanel"
                :aria-labelledby="`pills-category-tab${index}`">
                <div class="grid-parent" v-if="cat && cat.productsLoaded && cat.products && cat.products.length > 0">
                    <div :class="'grid-' + number" v-for="(product, number) in cat.products" :key="product">
                        <MiniCard :product_info="product" />
                    </div>
                </div>

            </div>

        </div>

    </div>
</template>

<script setup>
// Запрос категорий и продуктов для выбранной категории
const getCategoryId = ref(99);
const categories = ref([]);

const { data: getChosenCategory } = await useJsonPlaceholderData('/categories/?parent=' + getCategoryId.value);
if (getChosenCategory && getChosenCategory.value && getChosenCategory.value.results) {
    const productsRequests = getChosenCategory.value.results.map(category =>
        useJsonPlaceholderData(`/products/?category=${category.id}&limit=7`).then(response => {
            category.products = response.data.value;
            return category;
        })
    );
    const categoriesWithProducts = await Promise.all(productsRequests);
    categories.value = categoriesWithProducts; // Теперь categories содержит категории с товарами
    
}
const loadProductsForCategory = async (category, index) => {
    if (!category.productsLoaded) {
        try {
            // Выполнение запроса для загрузки продуктов выбранной категории
            const response = await useJsonPlaceholderData(`/products/?category=${category.id}&limit=7`);

            // Проверка на наличие ожидаемых данных в ответе
            if (response && response.data && response.data.value && response.data.value.results) {
                // Создание копии категории с новыми данными о продуктах и отметкой о загрузке
                const updatedCategory = {
                    ...category,
                    products: response.data.value.results,
                    productsLoaded: true,
                };

                // Обновление категории в массиве с обеспечением реактивности
                categories.value = categories.value.map((cat, catIndex) =>
                    catIndex === index ? updatedCategory : cat
                );
            } else {
                // Логирование в случае отсутствия ожидаемых данных
                console.error('Полученный ответ не содержит ожидаемых данных:', response);
            }
        } catch (error) {
            // Логирование ошибки запроса
            console.error('Ошибка при загрузке продуктов для категории:', error);
        }
    }
};
onMounted(() => {
    setTimeout(() => {
        loadProductsForCategory(categories.value[0], 0);
    }, 500); 
});


</script>
