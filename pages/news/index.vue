<template>
    <div>
        <section class="bg-primary padding-y-sm">
            <div class="container">

                <ol class="breadcrumb ondark mb-0">
                    <li class="breadcrumb-item">
                        <NuxtLink to="/">Главная</NuxtLink>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">Новости</li>
                </ol>

            </div>
        </section>
        <section class="padding-y">
            <div class="container">
                <div class="row">
                    <div class="col-lg-3 col-md-6 col-sm-6 col-12">
                        <NewsCard />
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped></style>