<template>
    <section class="padding-y">
        <div class="container">
            <h1>Продукция брэнда: {{ brand.name }}</h1>
            <div class="row row-cols-4">
                <div class="col mb-4" v-for="product in prods_search.results" :key="product.id">

                    <Card :product_info="product" />
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
const route = useRoute()
const query = route.params.slug
const { data: brand } = await useJsonPlaceholderData(`/brands/${query}`);
if (!brand.value) {
    throw createError({ statusCode: 404, message: 'Такого брэнда у нас нет' })
}
const { data: prods_search } = await useJsonPlaceholderData(`/products/?brand_slug=${query}`);
useSeoMeta({
    title: brand.value.name,
    ogTitle: brand.value.name,

})
</script>


