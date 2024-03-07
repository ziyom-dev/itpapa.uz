<template>
  <main>
    <section>
      <div id="carouselExampleIndicators" class="carousel slide onmalika-carousel">
        <div class="carousel-indicators onmalika-carousel-controls">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"
            aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
            aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
            aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item  onmalika-carousel-item active">
            <img src="/img/carousel-bg.webp" class="w-100 bg-img" alt="">
          </div>
          <div class="carousel-item  onmalika-carousel-item">
            <img src="/img/carousel-bg.webp" class="w-100 bg-img" alt="">
          </div>
          <div class="carousel-item  onmalika-carousel-item">
            <img src="/img/carousel-bg.webp" class="w-100 bg-img" alt="">
          </div>
        </div>
        <button class="carousel-control-prev" style="opacity: 1;" type="button"
          data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span class="dark-cover">
            <img src="/img/arrow-left.svg" alt="">
          </span>
        </button>
        <button class="carousel-control-next" style="opacity: 1;" type="button"
          data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span class="dark-cover">
            <img src="/img/arrow-right.svg" alt="">
          </span>
        </button>
      </div>
    </section>
    <SliderComponent :idSlider="'new-slider'" :product_list="products" :titleText="'Новинки'" />
    <section>
      <img src="/img/carousel-bg.webp" class="w-100" alt="" />
    </section>
    <SliderComponent :idSlider="'sales-slider'" :product_list="products" :titleText="'Скидки'" />
    <section>
      <div class="container">
        <h2>Популярные товары</h2>
        <LazyIndexCategoryTabs />
      </div>
    </section>
    <SliderComponent :idSlider="'recomindation-slider'" :product_list="products" :titleText="'Рекомендуемые'" />
    <section>
      <div class="container">
        <div class="row justify-content-between">
          <div class="col-2">
            <h2>Бренды</h2>
          </div>
          <div class="col-2">
            <h4>
              <NuxtLink to="/brands" class="onmalika-link">все бренды</NuxtLink>
            </h4>
          </div>
        </div>
        <div class="row onmalika-brand">
          <!-- <BrandMainBrands v-for="brand in brands.results" :key="brand.id" :brand_info="brand" /> -->
          <BrandMainBrands />
          <BrandMainBrands />
          <BrandMainBrands />
          <BrandMainBrands />
          <BrandMainBrands />
          <BrandMainBrands />
          <BrandMainBrands />
          <BrandMainBrands />
        </div>
      </div>
    </section>
  </main>
</template>
<script setup>
const [productsResponse, brandsResponse] = await Promise.all([
  useJsonPlaceholderData('/products/?limit=8'),
  useJsonPlaceholderData('/brands/?limit=8'),
]);
const products = productsResponse.data;
const brands = brandsResponse.data;
</script>

<style lang="scss">
.page-enter-active,
.page-leave-active {
  transition: all 0.3s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
  
