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
                    <li class="breadcrumb-item active" aria-current="page">{{ solo_category.name }}</li>
                </ol>
            </nav>
        </div>

        <section class="padding-y">
            <div class="container">
                <div class="row row-cols-5">
                    <div class="col" v-for="cat in category.results" :key="cat.id">
                        <CategoryCard :category_info="cat" />
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>


<script setup>
const route = useRoute()
const page_slug = route.params.category
const backUrl = useRouter().options.history.state.back

const { data: category } = await useJsonPlaceholderData('/categories/?parent_slug=' + page_slug)
if (!category.value || !category.value) {
    throw createError({ statusCode: 404, message: 'Такой категории нету' })
}
const { data: solo_category } = await useJsonPlaceholderData('/categories/' + page_slug)

const getCategories = computed(() => category.value)
const getSoloCat = computed(() => solo_category.value)




useSeoMeta({
    title: solo_category.value.name,
    ogTitle: solo_category.value.name,

})
</script>
