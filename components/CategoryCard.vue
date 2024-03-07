<template>
    <NuxtLink :to="($route.path + '/' + category_info.slug)" class="card h-100 onmalika-category-card text-center">
        <img  :src="baseurl + category_info.image.url" v-if="category_info.image" class="w-100" alt="..." />
        <p>{{ category_info.name }}</p>
    </NuxtLink>
</template>



<script setup>

const props = defineProps({
    category_info: {
        type: Object,
        required: true,
    },
});
const { category_info } = props;
const baseurl = 'https://admin.itpapa.uz'

</script>