<template>
    <div>

        <div class="container">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb onmalika-breadcrumb">
                    <li class="breadcrumb-item">
                        <NuxtLink to="/">Главная</NuxtLink>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">Оформление заказа</li>
                </ol>
            </nav>
        </div> <!-- container //  -->

        <section>
            <div class="container">
                <div v-if="cartStore.items.length > 0">
                    <div class="row justify-content-between">
                        <div class="col-6">
                            <h1> Оформление заказа </h1>
                            <ul class="nav nav-pills onmalika-checkout-tabs" id="pills-tab" role="tablist">
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link active" id="pills-delivery-tab" data-bs-toggle="pill"
                                        data-bs-target="#pills-delivery" type="button" role="tab"
                                        aria-controls="pills-delivery" aria-selected="true">Доставка</button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link" id="pills-takeout-tab" data-bs-toggle="pill"
                                        data-bs-target="#pills-takeout" type="button" role="tab"
                                        aria-controls="pills-takeout" aria-selected="false">Самовывоз</button>
                                </li>
                            </ul>
                            <div class="tab-content" id="pills-tabContent">
                                <div class="tab-pane fade show active" id="pills-delivery" role="tabpanel"
                                    aria-labelledby="pills-home-tab" tabindex="0">
                                    <div class="gray-cover">
                                        <h5 class="mb-3">Ваши данные</h5>
                                        <div class="d-flex column-gap-3">
                                            <div class="form-floating w-100">
                                                <input type="email" class="form-control" id="deliverynameInput"
                                                    placeholder="ФИО">
                                                <label for="floatingInput">ФИО</label>
                                            </div>
                                            <div class="form-floating w-100">
                                                <input type="email" class="form-control" id="deliverynumberInput"
                                                    placeholder="">
                                                <label for="floatingInput">Номер</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="gray-cover">
                                        <h5 class="mb-3">Ваши адреса</h5>
                                        <div class="onmalika-address">
                                            <ul>
                                                <li>
                                                    <div class="form-check p-0 m-0">
                                                        <input class="form-check-input" type="radio" name="flexRadioDefault"
                                                            id="flexRadioDefault1">
                                                        <label class="form-check-label" for="flexRadioDefault1">
                                                            Шайхантахур район, Жангох Ц 15 массив 33а
                                                        </label>
                                                    </div>
                                                    <button type="button">
                                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M15.832 18.3334V9.16669" stroke="black"
                                                                stroke-width="1.5" stroke-miterlimit="10"
                                                                stroke-linecap="round" stroke-linejoin="round" />
                                                            <path d="M15.832 5.83335V1.66669" stroke="black"
                                                                stroke-width="1.5" stroke-miterlimit="10"
                                                                stroke-linecap="round" stroke-linejoin="round" />
                                                            <path d="M10 18.3334V14.1667" stroke="black" stroke-width="1.5"
                                                                stroke-miterlimit="10" stroke-linecap="round"
                                                                stroke-linejoin="round" />
                                                            <path d="M10 10.8334V1.66669" stroke="black" stroke-width="1.5"
                                                                stroke-miterlimit="10" stroke-linecap="round"
                                                                stroke-linejoin="round" />
                                                            <path d="M4.16797 18.3334V9.16669" stroke="black"
                                                                stroke-width="1.5" stroke-miterlimit="10"
                                                                stroke-linecap="round" stroke-linejoin="round" />
                                                            <path d="M4.16797 5.83335V1.66669" stroke="black"
                                                                stroke-width="1.5" stroke-miterlimit="10"
                                                                stroke-linecap="round" stroke-linejoin="round" />
                                                            <path d="M2.5 9.16669H5.83333" stroke="black" stroke-width="1.5"
                                                                stroke-miterlimit="10" stroke-linecap="round"
                                                                stroke-linejoin="round" />
                                                            <path d="M14.168 9.16669H17.5013" stroke="black"
                                                                stroke-width="1.5" stroke-miterlimit="10"
                                                                stroke-linecap="round" stroke-linejoin="round" />
                                                            <path d="M8.33203 10.8333H11.6654" stroke="black"
                                                                stroke-width="1.5" stroke-miterlimit="10"
                                                                stroke-linecap="round" stroke-linejoin="round" />
                                                        </svg>
                                                    </button>
                                                </li>
                                                <li>
                                                    <button type="button" class="onmalika-address-add">
                                                        <div class="form-check p-0 m-0">
                                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                                xmlns="http://www.w3.org/2000/svg">
                                                                <path
                                                                    d="M11.9989 13.43C13.722 13.43 15.1189 12.0331 15.1189 10.31C15.1189 8.58687 13.722 7.19 11.9989 7.19C10.2758 7.19 8.87891 8.58687 8.87891 10.31C8.87891 12.0331 10.2758 13.43 11.9989 13.43Z"
                                                                    stroke="black" stroke-width="1.5" />
                                                                <path
                                                                    d="M3.62166 8.49C5.59166 -0.169998 18.4217 -0.159997 20.3817 8.5C21.5317 13.58 18.3717 17.88 15.6017 20.54C13.5917 22.48 10.4117 22.48 8.39166 20.54C5.63166 17.88 2.47166 13.57 3.62166 8.49Z"
                                                                    stroke="black" stroke-width="1.5" />
                                                            </svg>

                                                            Добавить новый адрес
                                                        </div>
                                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M2 8H14" stroke="#292D32" stroke-width="1.5"
                                                                stroke-linecap="round" stroke-linejoin="round" />
                                                            <path d="M8 14V2" stroke="#292D32" stroke-width="1.5"
                                                                stroke-linecap="round" stroke-linejoin="round" />
                                                        </svg>
                                                    </button>


                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="gray-cover">
                                        <h5 class="mb-3">Выберите способ оплаты</h5>
                                        <div class="d-flex column-gap-5">
                                            <div class="form-check p-0 m-0">
                                                <input class="form-check-input" type="radio" name="payment"
                                                    id="deliverypayment1">
                                                <label class="form-check-label" for="payment1">
                                                    Click
                                                </label>
                                            </div>
                                            <div class="form-check p-0 m-0">
                                                <input class="form-check-input" type="radio" name="payment"
                                                    id="deliverypayment2">
                                                <label class="form-check-label" for="payment2">
                                                    Payme
                                                </label>
                                            </div>
                                            <div class="form-check p-0 m-0">
                                                <input class="form-check-input" type="radio" name="payment"
                                                    id="deliverypayment3">
                                                <label class="form-check-label" for="payment3">
                                                    Наличные
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="gray-cover">
                                        <h5 class="mb-3">Выберите способ оплаты</h5>
                                        <textarea name="" placeholder="Введите"></textarea>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="pills-takeout" role="tabpanel"
                                    aria-labelledby="pills-takeout-tab" tabindex="0">
                                    <div class="gray-cover">
                                        <h5 class="mb-3">Ваши данные</h5>
                                        <div class="d-flex column-gap-3">
                                            <div class="form-floating w-100">
                                                <input type="email" class="form-control" id="nameInput" placeholder="ФИО">
                                                <label for="floatingInput">ФИО</label>
                                            </div>
                                            <div class="form-floating w-100">
                                                <input type="email" class="form-control" id="numberInput" placeholder="">
                                                <label for="floatingInput">Номер</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="gray-cover">
                                        <h5 class="mb-3">Пункт выдачи</h5>
                                        <div class="onmalika-take-address d-flex align-items-center column-gap-2">
                                            <svg height="24" viewBox="0 0 24 24" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M16.25 22.5C17.2165 22.5 18 21.7165 18 20.75C18 19.7835 17.2165 19 16.25 19C15.2835 19 14.5 19.7835 14.5 20.75C14.5 21.7165 15.2835 22.5 16.25 22.5Z"
                                                    fill="black" />
                                                <path
                                                    d="M8.25 22.5C9.2165 22.5 10 21.7165 10 20.75C10 19.7835 9.2165 19 8.25 19C7.2835 19 6.5 19.7835 6.5 20.75C6.5 21.7165 7.2835 22.5 8.25 22.5Z"
                                                    fill="black" />
                                                <path
                                                    d="M4.84 3.94L4.64 6.39C4.6 6.86 4.97 7.25 5.44 7.25H20.75C21.17 7.25 21.52 6.93 21.55 6.51C21.68 4.74 20.33 3.3 18.56 3.3H6.27C6.17 2.86 5.97 2.44 5.66 2.09C5.16 1.56 4.46 1.25 3.74 1.25H2C1.59 1.25 1.25 1.59 1.25 2C1.25 2.41 1.59 2.75 2 2.75H3.74C4.05 2.75 4.34 2.88 4.55 3.1C4.76 3.33 4.86 3.63 4.84 3.94Z"
                                                    fill="black" />
                                                <path
                                                    d="M20.5101 8.75H5.17005C4.75005 8.75 4.41005 9.07 4.37005 9.48L4.01005 13.83C3.87005 15.54 5.21005 17 6.92005 17H18.0401C19.5401 17 20.8601 15.77 20.9701 14.27L21.3001 9.6C21.3401 9.14 20.9801 8.75 20.5101 8.75Z"
                                                    fill="black" />
                                            </svg>
                                            <p>
                                                <span>Товары можно будет забрать в магазине</span>
                                                По адресу: DeLonghi, Шайхантахурский район, Малая кольцевая дорога, 59
                                            </p>
                                        </div>

                                    </div>
                                    <div class="gray-cover">
                                        <h5 class="mb-3">Выберите способ оплаты</h5>
                                        <div class="d-flex column-gap-5">
                                            <div class="form-check p-0 m-0">
                                                <input class="form-check-input" type="radio" name="payment" id="payment1">
                                                <label class="form-check-label" for="payment1">
                                                    Click
                                                </label>
                                            </div>
                                            <div class="form-check p-0 m-0">
                                                <input class="form-check-input" type="radio" name="payment" id="payment2">
                                                <label class="form-check-label" for="payment2">
                                                    Payme
                                                </label>
                                            </div>
                                            <div class="form-check p-0 m-0">
                                                <input class="form-check-input" type="radio" name="payment" id="payment3">
                                                <label class="form-check-label" for="payment3">
                                                    Наличные
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="gray-cover">
                                        <h5 class="mb-3">Выберите способ оплаты</h5>
                                        <textarea name="" placeholder="Введите"></textarea>
                                    </div>
                                </div>

                            </div>

                        </div>
                        <div class="col-5">
                            <h2>Ваш заказ</h2>
                            <div class="onmalika-cart-list">
                                <ul>
                                    <li v-for="item in cartStore.items" :key="item.id">
                                        <div class="card mb-3">
                                            <div class="row g-0 align-items-center">
                                                <div class="col-md-3">
                                                    <div class="gray-cover m-0">
                                                        <img v-if="item && item.product && item.product.image && item.product.image.url"
                                                            :src="baseurl + item.product.image.url" class="card-img-top"
                                                            alt="..." />
                                                        <img v-else src="http://placehold.co/250x250" class="card-img-top"
                                                            alt="..." />
                                                    </div>
                                                </div>
                                                <div class="col-md-9">
                                                    <div class="card-body">
                                                        <h5 class="card-title">{{ item.product.name }}</h5>
                                                        <p class="card-text">{{ item.quantity }} * {{
                                                            getPriceInSelectedCurrency(item.product) }}</p>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>

                                </ul>
                            </div>
                            <div class="onmalika-price-total">
                                <div class="d-flex justify-content-between mb-3">
                                    <p>Стоимость доставки:</p> <span>50 000 сум</span>
                                </div>
                                <div class="d-flex justify-content-between">
                                    <p>Общая сумма:</p> <span>{{ totalPrice }}</span>
                                </div>
                            </div>
                            <button @click="sendCheckout" class="dark-cover w-100 justify-content-center"
                                type="button">Оформить заказ</button>

                        </div>
                    </div>
                </div>
                <div v-else>
                    <h3>Пока что здесь пусто, закиньте суда что то :)</h3>
                </div>
            </div>

        </section>
    </div>
</template>

<script setup>
import { useCartStore } from '~/store/cart';
import { useAuthStore } from '~/store/auth';
const authStore = useAuthStore()
const router = useRouter()
const cartStore = useCartStore();
const baseurl = 'https://admin.itpapa.uz'

const totalPrice = computed(() => {
    return cartStore.items.reduce((total, item) => {
        return total + (item.quantity * item.product.price);
    }, 0);
});
const token_access = useCookie('token_access');

const sendCheckout = (async () => {


    const items = cartStore.items.map(item => ({
        product_id: item.product.id, // Замените 'id' на соответствующее поле для ID товара
        quantity: item.quantity // Поле для количества товара
    }));
    if (authStore.isAuthenticated) {
        try {
            const sendCheckoutToAdmin = await useJsonPlaceholderData('/user/orders/', {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${token_access.value}`
                },
                body: {
                    user: authStore.user.id,
                    items: items
                }
            })
            const savedCart = sessionStorage.clear('cart');
            await router.push('/success')
            location.reload()
        } catch (error) {

        }
    } else {
        await router.push({ path: '/user/login', query: { redirect: 'checkout' } });

    }
})

import { useCurrencyStore } from '~/store/currencyStore';
const currencyStore = useCurrencyStore();
const getPriceInSelectedCurrency = (product) => {
    const selectedCurrency = currencyStore.selectedCurrency;
    const priceInfo = product.prices_in_currencies[selectedCurrency];
    if (!priceInfo) {
        return "Цена не указана";
    }
    return `${priceInfo.price} ${priceInfo.symbol}`;
};

onMounted(() => {
    cartStore.loadCart();
    loadYandexMapsApi().then(() => {
        initMap();
    });

});


const lastCoords = ref('');
const lastAddress = ref('');
let currentMarker = null;
function loadYandexMapsApi() {
    return new Promise((resolve) => {
        const script = document.createElement('script');
        script.src = "https://api-maps.yandex.ru/2.1/?apikey=fc66b718-d4d4-4470-8086-fab6da14f40c&lang=ru_RU";
        script.onload = resolve;
        document.head.appendChild(script);
    });
}
function initMap() {
    ymaps.ready(() => {
        const map = new ymaps.Map("map", {
            center: [41.311153, 69.279729],
            zoom: 15
        });

        const searchControl = new ymaps.control.SearchControl({
            options: {
                noPlacemark: true, // Не создаем метку на карте
                noPopup: true, // Не показываем всплывающее окно с информацией о месте
            }
        });
        map.controls.remove('searchControl')
        map.controls.add(searchControl);

        // Объявляем функцию updateMapWithNewLocation на уровне функции initMap
        function updateMapWithNewLocation(coords, address = '') {
            lastCoords.value = coords.join(', ');

            if (currentMarker) {
                map.geoObjects.remove(currentMarker);
            }

            currentMarker = new ymaps.Placemark(coords, {
                hintContent: 'Местоположение',
                balloonContent: 'Загрузка адреса...'
            });

            map.geoObjects.add(currentMarker);

            if (address) {
                lastAddress.value = address;
                currentMarker.properties.set({ balloonContent: address });
            } else {
                ymaps.geocode(coords).then((res) => {
                    const firstGeoObject = res.geoObjects.get(0);
                    lastAddress.value = firstGeoObject.getAddressLine();
                    currentMarker.properties.set({ balloonContent: firstGeoObject.getAddressLine() });
                });
            }
        }

        // Обработчик событий для resultselect
        searchControl.events.add('resultselect', (e) => {
            const index = e.get('index');
            searchControl.getResult(index).then((res) => {
                const coords = res.geometry.getCoordinates();
                updateMapWithNewLocation(coords, res.properties.get('name'));
            }).catch((error) => {
                console.log('Ошибка при получении адреса:', error);
            });
        });

        // Обработчик событий для клика по карте
        map.events.add('click', function (e) {
            const coords = e.get('coords');
            updateMapWithNewLocation(coords);
        });
    });
}

</script>

<style lang="scss">
.products-block-checkout {
    padding: 20px;
    border: 1px solid #E4E7E9;

    .checkout-card {
        border: 0;

        img {
            width: 64px;
            height: 64px;
            object-fit: contain;
        }

        .card-body {
            padding: 0;
        }

        .card-title {
            font-size: 14px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;

        }

        .card-text {
            color: #2DA5F3;

            span {
                color: #5F6C72;
            }
        }
    }

    .total-price {
        margin-top: 16px;
        border-top: 1px solid #E4E7E9;
        padding-top: 16px;
        display: flex;
        justify-content: space-between;
        margin-bottom: 24px;

        span {
            font-weight: 700;
        }
    }
}

.btn-orange-cart {
    background-color: #0d6efd;
    width: 100%;
    padding: 16px 0;
    color: #fff;
    border: 0;
    display: flex;
    align-items: center;
    column-gap: 8px;
    justify-content: center;
}
</style>