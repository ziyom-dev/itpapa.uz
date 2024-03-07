<template>
    <div>
        <section class="bg-primary padding-y-sm">
            <div class="container">

                <ol class="breadcrumb ondark mb-0">
                    <li class="breadcrumb-item">
                        <NuxtLink to="/">Главная</NuxtLink>
                    </li>
                    <li class="breadcrumb-item" aria-current="page">
                        <NuxtLink to="/">Новости</NuxtLink>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">{{ $route.params.id }}</li>
                </ol>

            </div>
        </section>
        <section>
            <div class="container">
                <img  src="" alt="" />
                <h1></h1>
                <p></p>
            </div>
        </section>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped></style>