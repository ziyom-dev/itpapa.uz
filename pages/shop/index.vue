<template>
    <div>
      
            <div class="container">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb onmalika-breadcrumb">
                        <li class="breadcrumb-item">
                            <NuxtLink to="/">Главная</NuxtLink>
                        </li>
                        <li class="breadcrumb-item active" aria-current="page">Магазинчик</li>
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
const { data: category } = await useJsonPlaceholderData('/categories/?parent_null=true')

useSeoMeta({
    title: 'Магазинчик',
    ogTitle: 'Магазинчик',

})
useHead({
    title: "Магазинчик",
    meta: [
        { name: 'Магазинчик 1', content: '' }
    ],
})
</script>

