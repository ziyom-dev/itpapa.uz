<template>
    <section>
        <div class="container">
            <div class="row mb-50 justify-content-between">
                <div class="col-2">
                    <h2 class="mb-0">{{ titleText }}</h2>
                </div>
                <div class="col-2">
                    <div class="onmalika-slider-controls">
                        <button type="button" class="dark-cover" :disabled="currentIndex <= 0" :id="'prev-' + idSlider"
                            @click="moveSlider(currentIndex - 1)">
                            <img src="/img/arrow-left.svg" alt="">
                        </button>
                        <button type="button" class="dark-cover" :disabled="currentIndex >= product_list.results.length - 4" :id="'next-' + idSlider"
                            @click="moveSlider(currentIndex + 1)">
                            <img src="/img/arrow-right.svg" alt="">
                        </button>
                    </div>
                </div>
            </div>
            <div id="onmalika-slider">
                <div :ref="setSlidesContainer" :class="'slides-container-' + idSlider" class="row row-cols-4">
                    <div :class="'slide-' + idSlider" class="col" v-for="product in product_list.results" :key="product.id">
                        <LazyCard :product_info="product" />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
  
<script setup>
import { gsap } from 'gsap';


const props = defineProps({
    idSlider: String,
    product_list: Object,
    titleText: String,
});

const slidesContainer = ref(null);
let currentIndex = ref(0); // Используем ref для реактивности

const setSlidesContainer = (element) => {
    slidesContainer.value = element;
};

const moveSlider = (index) => {
    currentIndex.value = Math.max(0, Math.min(index, props.product_list.results.length - 4));
    const movePosition = -(currentIndex.value * slidesContainer.value.children[0].clientWidth);
    gsap.to(slidesContainer.value, { x: movePosition, duration: 0.2 });
};

onMounted(() => {
    if (!slidesContainer.value) {
        console.error('Элемент .slides-container не найден!');
        return;
    }
});
</script>
  