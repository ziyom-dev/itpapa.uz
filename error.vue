<template>
    <MainLayoutHeader />
    <section class="padding-y">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-5">
                    <!-- <img  src="@/404.png" class="w-100" alt="" /> -->
                </div>


            </div>
            <div class="row justify-content-center">
                <div class="col-5 text-center">
                    <h1 class="text-center mb-4"> {{ error.statusCode }},
                        {{ error.message }}</h1>
                    <NuxtLink to="/" class="btn btn-primary"> На главную </NuxtLink>
                </div>
            </div>
        </div>
    </section>
    <MainLayoutFooter />
</template>

<script setup>
defineProps(['error'])
</script>

<style scoped></style>