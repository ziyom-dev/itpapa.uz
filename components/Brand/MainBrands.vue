<template>
    <div class="col-auto">
        <!-- <NuxtLink :to="'/brands/' + brand_info.slug" class="brand-main"> -->
        <!-- <img  :src="'https://admin.itpapa.uz' + brand_info.image.url" alt="" /> -->

        <!-- </NuxtLink> -->
        <NuxtLink to="/brands" class="onmalika-brand-item">
            <img src="/brand.svg" alt="">
        </NuxtLink>
    </div>
</template>

<script setup>
const props = defineProps({
    brand_info: {
        type: Object,
        required: false,
    },
});
const { brand_info } = props;
</script>

