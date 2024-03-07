<template>
    <article>
        <NuxtLink :to="'/news/' + 1" class="img-wrap">
            <img  class="rounded w-100" src="https://placehold.co/360x250" />
        </NuxtLink>
        <div class="mt-2">
            <time class="text-muted small d-block mb-1" datetime="2022-02-14 00:00"> <i class="fa fa-calendar-alt"></i>
                25.11.2022</time>
            <NuxtLink :to="'/news/' + 1">
                <h6 class="title">Success story of sellers</h6>
            </NuxtLink>
            <p>When you enter into any new area of science, you almost reach</p>
        </div>
    </article>
</template>

<script setup>
// const props = defineProps({
//     news_content: {
//         type: Object,
//         required: true,
//     }
// });
// const { news_content } = props;
</script>

<style lang="scss" scoped></style>