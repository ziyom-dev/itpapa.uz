import { useSSRContext, computed, withCtx, createTextVNode, unref, createVNode, ref, mergeProps, defineAsyncComponent, withAsyncContext, watch } from "vue";
import "hookable";
import { u as useRoute, _ as _export_sfc, a as useRouter, b as useCartStore, c as useAuthStore, d as useCurrencyStore, e as useSeoMeta, f as __nuxt_component_0$1, g as useCookie, h as useJsonPlaceholderData, i as __nuxt_component_0$2 } from "./chunk-pg-brands-4e133212.js";
import "destr";
import "devalue";
import "klona";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrIncludeBooleanAttr, ssrRenderClass, ssrRenderStyle } from "vue/server-renderer";
const _sfc_main$8 = {
  __name: "about",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    console.log(route);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><h1>About</h1></div>`);
    };
  }
};
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const about = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: _sfc_main$8
});
const cart_vue_vue_type_style_index_0_scoped_2d97f5ce_lang = "";
const baseurl$1 = "https://admin.itpapa.uz";
const _sfc_main$7 = {
  __name: "cart",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    const cartStore = useCartStore();
    useAuthStore();
    const totalPrice = computed(() => {
      return cartStore.items.reduce((total, item) => {
        return total + item.quantity * item.product.price;
      }, 0);
    });
    const currencyStore = useCurrencyStore();
    const getPriceInSelectedCurrency = (product) => {
      const selectedCurrency = currencyStore.selectedCurrency;
      const priceInfo = product.prices_in_currencies[selectedCurrency];
      if (!priceInfo) {
        return "Цена не указана";
      }
      return `${priceInfo.price} ${priceInfo.symbol}`;
    };
    useSeoMeta({
      title: "Корзина",
      ogTitle: "Корзина"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-2d97f5ce><section class="bg-primary py-5" data-v-2d97f5ce><div class="container" data-v-2d97f5ce><ol class="breadcrumb ondark mb-0" data-v-2d97f5ce><li class="breadcrumb-item" data-v-2d97f5ce>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Главная`);
          } else {
            return [
              createTextVNode("Главная")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="breadcrumb-item active" aria-current="page" data-v-2d97f5ce>Корзина</li></ol></div></section><section class="padding-y" data-v-2d97f5ce><div class="container" data-v-2d97f5ce>`);
      if (unref(cartStore).items.length > 0) {
        _push(`<div data-v-2d97f5ce><div class="row" data-v-2d97f5ce><div class="col-9" data-v-2d97f5ce><div class="big-cart-block" data-v-2d97f5ce><div class="cart-title" data-v-2d97f5ce><h1 class="m-0" data-v-2d97f5ce> Корзина</h1></div><div class="cart-info-list" data-v-2d97f5ce><div class="row" data-v-2d97f5ce><div class="col-5" data-v-2d97f5ce> Товары </div><div class="col-3" data-v-2d97f5ce> Цены </div><div class="col-2" data-v-2d97f5ce> Количество </div><div class="col-2" data-v-2d97f5ce> Общая сумма </div></div></div><div class="cart-products" data-v-2d97f5ce><!--[-->`);
        ssrRenderList(unref(cartStore).items, (item) => {
          _push(`<div class="row align-items-center" data-v-2d97f5ce><div class="col-5" data-v-2d97f5ce><div class="cart-product-info" data-v-2d97f5ce><button type="button" class="remove-button" data-v-2d97f5ce><i class="far fa-times-circle" data-v-2d97f5ce></i></button>`);
          if (item && item.product && item.product.image && item.product.image.url) {
            _push(`<img${ssrRenderAttr("src", baseurl$1 + item.product.image.url)} class="card-img-top" alt="..." data-v-2d97f5ce>`);
          } else {
            _push(`<img src="http://placehold.co/250x250" class="card-img-top" alt="..." data-v-2d97f5ce>`);
          }
          _push(`<p data-v-2d97f5ce>${ssrInterpolate(item.product.name)}</p></div></div><div class="col-3" data-v-2d97f5ce>${ssrInterpolate(getPriceInSelectedCurrency(item.product))}</div><div class="col-2" data-v-2d97f5ce><div class="input-group input-spinner" data-v-2d97f5ce><button type="button" class="btn btn-icon btn-light" data-v-2d97f5ce><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#999" viewBox="0 0 24 24" data-v-2d97f5ce><path d="M19 13H5v-2h14v2z" data-v-2d97f5ce></path></svg></button><input${ssrRenderAttr("value", item.quantity)} disabled class="form-control text-center" placeholder="" data-v-2d97f5ce><button type="button" class="btn btn-icon btn-light" data-v-2d97f5ce><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#999" viewBox="0 0 24 24" data-v-2d97f5ce><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" data-v-2d97f5ce></path></svg></button></div></div><div class="col-2" data-v-2d97f5ce><span data-v-2d97f5ce>${ssrInterpolate(item.quantity * item.product.price)} UZS</span></div></div>`);
        });
        _push(`<!--]--></div></div>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          class: "to-shop-link",
          to: "/shop"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<i class="fal fa-arrow-left" data-v-2d97f5ce${_scopeId}></i> В магазин `);
            } else {
              return [
                createVNode("i", { class: "fal fa-arrow-left" }),
                createTextVNode(" В магазин ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><div class="col-3" data-v-2d97f5ce><div class="products-block-checkout" data-v-2d97f5ce><p data-v-2d97f5ce>Общая сумма</p><div class="total-price" data-v-2d97f5ce><p data-v-2d97f5ce>Всего</p><span data-v-2d97f5ce>${ssrInterpolate(unref(totalPrice))} $</span></div><button type="button" class="btn-orange-cart" data-v-2d97f5ce> Перейти к оформлению заказа <i class="fal fa-arrow-right" data-v-2d97f5ce></i></button></div></div></div></div>`);
      } else {
        _push(`<div data-v-2d97f5ce><h3 data-v-2d97f5ce>Пока что здесь пусто, закиньте суда что то :)</h3></div>`);
      }
      _push(`</div></section></div>`);
    };
  }
};
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/cart.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const cart = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-2d97f5ce"]]);
const cart$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: cart
});
const checkout_vue_vue_type_style_index_0_lang = "";
const baseurl = "https://admin.itpapa.uz";
const _sfc_main$6 = {
  __name: "checkout",
  __ssrInlineRender: true,
  setup(__props) {
    useAuthStore();
    useRouter();
    const cartStore = useCartStore();
    const totalPrice = computed(() => {
      return cartStore.items.reduce((total, item) => {
        return total + item.quantity * item.product.price;
      }, 0);
    });
    useCookie("token_access");
    const currencyStore = useCurrencyStore();
    const getPriceInSelectedCurrency = (product) => {
      const selectedCurrency = currencyStore.selectedCurrency;
      const priceInfo = product.prices_in_currencies[selectedCurrency];
      if (!priceInfo) {
        return "Цена не указана";
      }
      return `${priceInfo.price} ${priceInfo.symbol}`;
    };
    ref("");
    ref("");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="container"><nav aria-label="breadcrumb"><ol class="breadcrumb onmalika-breadcrumb"><li class="breadcrumb-item">`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Главная`);
          } else {
            return [
              createTextVNode("Главная")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="breadcrumb-item active" aria-current="page">Оформление заказа</li></ol></nav></div><section><div class="container">`);
      if (unref(cartStore).items.length > 0) {
        _push(`<div><div class="row justify-content-between"><div class="col-6"><h1> Оформление заказа </h1><ul class="nav nav-pills onmalika-checkout-tabs" id="pills-tab" role="tablist"><li class="nav-item" role="presentation"><button class="nav-link active" id="pills-delivery-tab" data-bs-toggle="pill" data-bs-target="#pills-delivery" type="button" role="tab" aria-controls="pills-delivery" aria-selected="true">Доставка</button></li><li class="nav-item" role="presentation"><button class="nav-link" id="pills-takeout-tab" data-bs-toggle="pill" data-bs-target="#pills-takeout" type="button" role="tab" aria-controls="pills-takeout" aria-selected="false">Самовывоз</button></li></ul><div class="tab-content" id="pills-tabContent"><div class="tab-pane fade show active" id="pills-delivery" role="tabpanel" aria-labelledby="pills-home-tab" tabindex="0"><div class="gray-cover"><h5 class="mb-3">Ваши данные</h5><div class="d-flex column-gap-3"><div class="form-floating w-100"><input type="email" class="form-control" id="deliverynameInput" placeholder="ФИО"><label for="floatingInput">ФИО</label></div><div class="form-floating w-100"><input type="email" class="form-control" id="deliverynumberInput" placeholder=""><label for="floatingInput">Номер</label></div></div></div><div class="gray-cover"><h5 class="mb-3">Ваши адреса</h5><div class="onmalika-address"><ul><li><div class="form-check p-0 m-0"><input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"><label class="form-check-label" for="flexRadioDefault1"> Шайхантахур район, Жангох Ц 15 массив 33а </label></div><button type="button"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.832 18.3334V9.16669" stroke="black" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M15.832 5.83335V1.66669" stroke="black" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M10 18.3334V14.1667" stroke="black" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M10 10.8334V1.66669" stroke="black" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M4.16797 18.3334V9.16669" stroke="black" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M4.16797 5.83335V1.66669" stroke="black" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M2.5 9.16669H5.83333" stroke="black" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M14.168 9.16669H17.5013" stroke="black" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8.33203 10.8333H11.6654" stroke="black" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path></svg></button></li><li><button type="button" class="onmalika-address-add"><div class="form-check p-0 m-0"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.9989 13.43C13.722 13.43 15.1189 12.0331 15.1189 10.31C15.1189 8.58687 13.722 7.19 11.9989 7.19C10.2758 7.19 8.87891 8.58687 8.87891 10.31C8.87891 12.0331 10.2758 13.43 11.9989 13.43Z" stroke="black" stroke-width="1.5"></path><path d="M3.62166 8.49C5.59166 -0.169998 18.4217 -0.159997 20.3817 8.5C21.5317 13.58 18.3717 17.88 15.6017 20.54C13.5917 22.48 10.4117 22.48 8.39166 20.54C5.63166 17.88 2.47166 13.57 3.62166 8.49Z" stroke="black" stroke-width="1.5"></path></svg> Добавить новый адрес </div><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 8H14" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8 14V2" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></button></li></ul></div></div><div class="gray-cover"><h5 class="mb-3">Выберите способ оплаты</h5><div class="d-flex column-gap-5"><div class="form-check p-0 m-0"><input class="form-check-input" type="radio" name="payment" id="deliverypayment1"><label class="form-check-label" for="payment1"> Click </label></div><div class="form-check p-0 m-0"><input class="form-check-input" type="radio" name="payment" id="deliverypayment2"><label class="form-check-label" for="payment2"> Payme </label></div><div class="form-check p-0 m-0"><input class="form-check-input" type="radio" name="payment" id="deliverypayment3"><label class="form-check-label" for="payment3"> Наличные </label></div></div></div><div class="gray-cover"><h5 class="mb-3">Выберите способ оплаты</h5><textarea name="" placeholder="Введите"></textarea></div></div><div class="tab-pane fade" id="pills-takeout" role="tabpanel" aria-labelledby="pills-takeout-tab" tabindex="0"><div class="gray-cover"><h5 class="mb-3">Ваши данные</h5><div class="d-flex column-gap-3"><div class="form-floating w-100"><input type="email" class="form-control" id="nameInput" placeholder="ФИО"><label for="floatingInput">ФИО</label></div><div class="form-floating w-100"><input type="email" class="form-control" id="numberInput" placeholder=""><label for="floatingInput">Номер</label></div></div></div><div class="gray-cover"><h5 class="mb-3">Пункт выдачи</h5><div class="onmalika-take-address d-flex align-items-center column-gap-2"><svg height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.25 22.5C17.2165 22.5 18 21.7165 18 20.75C18 19.7835 17.2165 19 16.25 19C15.2835 19 14.5 19.7835 14.5 20.75C14.5 21.7165 15.2835 22.5 16.25 22.5Z" fill="black"></path><path d="M8.25 22.5C9.2165 22.5 10 21.7165 10 20.75C10 19.7835 9.2165 19 8.25 19C7.2835 19 6.5 19.7835 6.5 20.75C6.5 21.7165 7.2835 22.5 8.25 22.5Z" fill="black"></path><path d="M4.84 3.94L4.64 6.39C4.6 6.86 4.97 7.25 5.44 7.25H20.75C21.17 7.25 21.52 6.93 21.55 6.51C21.68 4.74 20.33 3.3 18.56 3.3H6.27C6.17 2.86 5.97 2.44 5.66 2.09C5.16 1.56 4.46 1.25 3.74 1.25H2C1.59 1.25 1.25 1.59 1.25 2C1.25 2.41 1.59 2.75 2 2.75H3.74C4.05 2.75 4.34 2.88 4.55 3.1C4.76 3.33 4.86 3.63 4.84 3.94Z" fill="black"></path><path d="M20.5101 8.75H5.17005C4.75005 8.75 4.41005 9.07 4.37005 9.48L4.01005 13.83C3.87005 15.54 5.21005 17 6.92005 17H18.0401C19.5401 17 20.8601 15.77 20.9701 14.27L21.3001 9.6C21.3401 9.14 20.9801 8.75 20.5101 8.75Z" fill="black"></path></svg><p><span>Товары можно будет забрать в магазине</span> По адресу: DeLonghi, Шайхантахурский район, Малая кольцевая дорога, 59 </p></div></div><div class="gray-cover"><h5 class="mb-3">Выберите способ оплаты</h5><div class="d-flex column-gap-5"><div class="form-check p-0 m-0"><input class="form-check-input" type="radio" name="payment" id="payment1"><label class="form-check-label" for="payment1"> Click </label></div><div class="form-check p-0 m-0"><input class="form-check-input" type="radio" name="payment" id="payment2"><label class="form-check-label" for="payment2"> Payme </label></div><div class="form-check p-0 m-0"><input class="form-check-input" type="radio" name="payment" id="payment3"><label class="form-check-label" for="payment3"> Наличные </label></div></div></div><div class="gray-cover"><h5 class="mb-3">Выберите способ оплаты</h5><textarea name="" placeholder="Введите"></textarea></div></div></div></div><div class="col-5"><h2>Ваш заказ</h2><div class="onmalika-cart-list"><ul><!--[-->`);
        ssrRenderList(unref(cartStore).items, (item) => {
          _push(`<li><div class="card mb-3"><div class="row g-0 align-items-center"><div class="col-md-3"><div class="gray-cover m-0">`);
          if (item && item.product && item.product.image && item.product.image.url) {
            _push(`<img${ssrRenderAttr("src", baseurl + item.product.image.url)} class="card-img-top" alt="...">`);
          } else {
            _push(`<img src="http://placehold.co/250x250" class="card-img-top" alt="...">`);
          }
          _push(`</div></div><div class="col-md-9"><div class="card-body"><h5 class="card-title">${ssrInterpolate(item.product.name)}</h5><p class="card-text">${ssrInterpolate(item.quantity)} * ${ssrInterpolate(getPriceInSelectedCurrency(item.product))}</p></div></div></div></div></li>`);
        });
        _push(`<!--]--></ul></div><div class="onmalika-price-total"><div class="d-flex justify-content-between mb-3"><p>Стоимость доставки:</p> <span>50 000 сум</span></div><div class="d-flex justify-content-between"><p>Общая сумма:</p> <span>${ssrInterpolate(unref(totalPrice))}</span></div></div><button class="dark-cover w-100 justify-content-center" type="button">Оформить заказ</button></div></div></div>`);
      } else {
        _push(`<div><h3>Пока что здесь пусто, закиньте суда что то :)</h3></div>`);
      }
      _push(`</div></section></div>`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/checkout.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const checkout = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: _sfc_main$6
});
const _sfc_main$5 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))}><h1>Contacts</h1></div>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contacts.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const contacts = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$1]]);
const contacts$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: contacts
});
const _imports_1 = "" + __publicAssetsURL("img/arrow-left.svg");
const _imports_2 = "" + __publicAssetsURL("img/arrow-right.svg");
const __nuxt_component_0_lazy = /* @__PURE__ */ defineAsyncComponent(() => import("./chunk-pg-brands-4e133212.js").then(function(n) {
  return n.D;
}).then((m) => m.default || m));
const _sfc_main$4 = {
  __name: "SliderComponent",
  __ssrInlineRender: true,
  props: {
    idSlider: String,
    product_list: Object,
    titleText: String
  },
  setup(__props) {
    ref(null);
    let currentIndex = ref(0);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LazyCard = __nuxt_component_0_lazy;
      _push(`<section${ssrRenderAttrs(_attrs)}><div class="container"><div class="row mb-50 justify-content-between"><div class="col-2"><h2 class="mb-0">${ssrInterpolate(__props.titleText)}</h2></div><div class="col-2"><div class="onmalika-slider-controls"><button type="button" class="dark-cover"${ssrIncludeBooleanAttr(unref(currentIndex) <= 0) ? " disabled" : ""}${ssrRenderAttr("id", "prev-" + __props.idSlider)}><img${ssrRenderAttr("src", _imports_1)} alt=""></button><button type="button" class="dark-cover"${ssrIncludeBooleanAttr(unref(currentIndex) >= __props.product_list.results.length - 4) ? " disabled" : ""}${ssrRenderAttr("id", "next-" + __props.idSlider)}><img${ssrRenderAttr("src", _imports_2)} alt=""></button></div></div></div><div id="onmalika-slider"><div class="${ssrRenderClass(["slides-container-" + __props.idSlider, "row row-cols-4"])}"><!--[-->`);
      ssrRenderList(__props.product_list.results, (product) => {
        _push(`<div class="${ssrRenderClass(["slide-" + __props.idSlider, "col"])}">`);
        _push(ssrRenderComponent(_component_LazyCard, { product_info: product }, null, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div></div></div></section>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SliderComponent.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_0 = _sfc_main$4;
const _imports_0$1 = "" + __publicAssetsURL("brand.svg");
const _sfc_main$3 = {
  __name: "MainBrands",
  __ssrInlineRender: true,
  props: {
    brand_info: {
      type: Object,
      required: false
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "col-auto" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/brands",
        class: "onmalika-brand-item"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_0$1)} alt=""${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_0$1,
                alt: ""
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Brand/MainBrands.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_3 = _sfc_main$3;
const _imports_0 = "" + __publicAssetsURL("img/carousel-bg.webp");
const index_vue_vue_type_style_index_0_lang = "";
const __nuxt_component_1_lazy = /* @__PURE__ */ defineAsyncComponent(() => import("./IndexCategoryTabs-573c220f.js").then((m) => m.default || m));
const _sfc_main$2 = {
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const [productsResponse, brandsResponse] = ([__temp, __restore] = withAsyncContext(() => Promise.all([
      useJsonPlaceholderData("/products/?limit=8"),
      useJsonPlaceholderData("/brands/?limit=8")
    ])), __temp = await __temp, __restore(), __temp);
    const products = productsResponse.data;
    brandsResponse.data;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SliderComponent = __nuxt_component_0;
      const _component_LazyIndexCategoryTabs = __nuxt_component_1_lazy;
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_BrandMainBrands = __nuxt_component_3;
      _push(`<main${ssrRenderAttrs(_attrs)}><section><div id="carouselExampleIndicators" class="carousel slide onmalika-carousel"><div class="carousel-indicators onmalika-carousel-controls"><button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button><button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button><button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button></div><div class="carousel-inner"><div class="carousel-item onmalika-carousel-item active"><img${ssrRenderAttr("src", _imports_0)} class="w-100 bg-img" alt=""></div><div class="carousel-item onmalika-carousel-item"><img${ssrRenderAttr("src", _imports_0)} class="w-100 bg-img" alt=""></div><div class="carousel-item onmalika-carousel-item"><img${ssrRenderAttr("src", _imports_0)} class="w-100 bg-img" alt=""></div></div><button class="carousel-control-prev" style="${ssrRenderStyle({ "opacity": "1" })}" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev"><span class="dark-cover"><img${ssrRenderAttr("src", _imports_1)} alt=""></span></button><button class="carousel-control-next" style="${ssrRenderStyle({ "opacity": "1" })}" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next"><span class="dark-cover"><img${ssrRenderAttr("src", _imports_2)} alt=""></span></button></div></section>`);
      _push(ssrRenderComponent(_component_SliderComponent, {
        idSlider: "new-slider",
        product_list: unref(products),
        titleText: "Новинки"
      }, null, _parent));
      _push(`<section><img${ssrRenderAttr("src", _imports_0)} class="w-100" alt=""></section>`);
      _push(ssrRenderComponent(_component_SliderComponent, {
        idSlider: "sales-slider",
        product_list: unref(products),
        titleText: "Скидки"
      }, null, _parent));
      _push(`<section><div class="container"><h2>Популярные товары</h2>`);
      _push(ssrRenderComponent(_component_LazyIndexCategoryTabs, null, null, _parent));
      _push(`</div></section>`);
      _push(ssrRenderComponent(_component_SliderComponent, {
        idSlider: "recomindation-slider",
        product_list: unref(products),
        titleText: "Рекомендуемые"
      }, null, _parent));
      _push(`<section><div class="container"><div class="row justify-content-between"><div class="col-2"><h2>Бренды</h2></div><div class="col-2"><h4>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/brands",
        class: "onmalika-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`все бренды`);
          } else {
            return [
              createTextVNode("все бренды")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</h4></div></div><div class="row onmalika-brand">`);
      _push(ssrRenderComponent(_component_BrandMainBrands, null, null, _parent));
      _push(ssrRenderComponent(_component_BrandMainBrands, null, null, _parent));
      _push(ssrRenderComponent(_component_BrandMainBrands, null, null, _parent));
      _push(ssrRenderComponent(_component_BrandMainBrands, null, null, _parent));
      _push(ssrRenderComponent(_component_BrandMainBrands, null, null, _parent));
      _push(ssrRenderComponent(_component_BrandMainBrands, null, null, _parent));
      _push(ssrRenderComponent(_component_BrandMainBrands, null, null, _parent));
      _push(ssrRenderComponent(_component_BrandMainBrands, null, null, _parent));
      _push(`</div></div></section></main>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const index = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: _sfc_main$2
});
const pageSize = 3;
const _sfc_main$1 = {
  __name: "search",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    useRouter();
    const query = computed(() => route.query.search);
    const products = ref({ results: [], next: null, previous: null, count: 0 });
    const nextUrl = ref(null);
    const prevUrl = ref(null);
    const currentPage = ref(1);
    const totalCount = ref(0);
    const totalPages = computed(() => Math.ceil(totalCount.value / pageSize));
    const fetchProducts = async (url) => {
      console.log("Запрашиваемый URL:", url);
      try {
        const res = await useJsonPlaceholderData(url);
        if (res && res.data && res.data.value) {
          const data = res.data.value;
          products.value = data;
          nextUrl.value = data.next;
          prevUrl.value = data.previous;
          totalCount.value = data.count;
        } else {
          console.error("Ответ от сервера пустой или не соответствует ожидаемому формату", res);
        }
      } catch (error) {
        console.error("Ошибка при получении данных: ", error);
      }
    };
    fetchProducts("/products/?search=" + query.value + "&limit=" + pageSize);
    const updateProductsByPage = (page) => {
      const offset = (page - 1) * pageSize;
      fetchProducts(`/products/?search=${query.value}&limit=${pageSize}&offset=${offset}`);
    };
    watch(() => route.query.page, (newPage) => {
      const page = parseInt(newPage, 10) || 1;
      if (page !== currentPage.value) {
        currentPage.value = page;
        updateProductsByPage(page);
      }
    }, { immediate: true });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Card = __nuxt_component_0$2;
      _push(`<section${ssrRenderAttrs(_attrs)}><div class="container"><h1>Результаты поиска : ${ssrInterpolate(unref(query))}</h1><div class="row row-cols-4"><!--[-->`);
      ssrRenderList(unref(products).results, (product) => {
        _push(`<div class="col mb-4">`);
        _push(ssrRenderComponent(_component_Card, { product_info: product }, null, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div>`);
      if (unref(totalPages) > 1) {
        _push(`<nav aria-label="Page navigation example"><ul class="pagination justify-content-center"><li class="page-item"><button class="${ssrRenderClass([{ "disabled": !unref(prevUrl) }, "page-link"])}"${ssrIncludeBooleanAttr(!unref(prevUrl)) ? " disabled" : ""}>Предыдущая страница</button></li><!--[-->`);
        ssrRenderList(unref(totalPages), (page) => {
          _push(`<li class="page-item"><button class="${ssrRenderClass([{ active: page === unref(currentPage) }, "page-link"])}">${ssrInterpolate(page)}</button></li>`);
        });
        _push(`<!--]--><li class="page-item"><button class="${ssrRenderClass([{ "disabled": !unref(nextUrl) }, "page-link"])}"${ssrIncludeBooleanAttr(!unref(nextUrl)) ? " disabled" : ""}>Следующая страница</button></li></ul></nav>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></section>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/search.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const search = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: _sfc_main$1
});
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "padding-y d-flex h-100 align-items-center flex-column justify-content-center" }, _attrs))}><div class="container text-center"><svg xmlns="http://www.w3.org/2000/svg" width="88" height="88" viewBox="0 0 88 88" fill="none"><path opacity="0.2" d="M44 77C62.2254 77 77 62.2254 77 44C77 25.7746 62.2254 11 44 11C25.7746 11 11 25.7746 11 44C11 62.2254 25.7746 77 44 77Z" fill="#2DB324"></path><path d="M59.125 35.75L38.9469 55L28.875 45.375" stroke="#2DB324" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><path d="M44 77C62.2254 77 77 62.2254 77 44C77 25.7746 62.2254 11 44 11C25.7746 11 11 25.7746 11 44C11 62.2254 25.7746 77 44 77Z" stroke="#2DB324" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path></svg><h1 class="mb-3">Заказ оформлен</h1>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "btn btn-primary",
    to: "/"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`На главную`);
      } else {
        return [
          createTextVNode("На главную")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></section>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/success.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const success = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
const success$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: success
});
export {
  about as a,
  checkout as b,
  cart$1 as c,
  contacts$1 as d,
  success$1 as e,
  index as i,
  search as s
};
//# sourceMappingURL=chunk-pg-misc-d48d71ba.js.map
