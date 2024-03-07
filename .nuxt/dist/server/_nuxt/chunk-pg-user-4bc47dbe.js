import { mergeProps, withCtx, createVNode, openBlock, createBlock, createTextVNode, useSSRContext, unref, withAsyncContext, watch, ref, isRef } from "vue";
import { c as useAuthStore, a as useRouter, f as __nuxt_component_0, b as useCartStore, g as useCookie, d as useCurrencyStore, u as useRoute, h as useJsonPlaceholderData, k as useHead, e as useSeoMeta, j as createError, _ as _export_sfc } from "./chunk-pg-brands-4e133212.js";
import "hookable";
import "devalue";
import "klona";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrRenderAttr, ssrInterpolate, ssrRenderClass, ssrRenderList } from "vue/server-renderer";
import "destr";
import VOtpInput from "vue3-otp-input";
const __nuxt_page_meta$4 = {
  middleware: "auth"
};
const __nuxt_page_meta$3 = {
  middleware: "auth"
};
const __nuxt_page_meta$2 = {
  middleware: "auth"
};
const __nuxt_page_meta$1 = {
  middleware: "auth"
};
const __nuxt_page_meta = {
  middleware: "auth"
};
const _sfc_main$7 = {
  __name: "DashboardList",
  __ssrInlineRender: true,
  setup(__props) {
    const authStore = useAuthStore();
    const router = useRouter();
    const logOutClick = async () => {
      try {
        await $fetch("/api/logout");
        authStore.logout();
      } catch (error) {
        console.error("Ошибка при выходе из системы", error);
      }
    };
    const goToFavorites = async (event) => {
      await router.push("/user/favorite");
      location.reload();
    };
    const goToOrders = async (event) => {
      await router.push("/user/orders");
      location.reload();
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<aside${ssrRenderAttrs(mergeProps({ class: "col-lg-2 col-xl-2" }, _attrs))}><nav class="mb-4 onmalika-user-navigation">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "nav-link",
        to: "/user"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"${_scopeId}></path><path d="M12 8V13" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"${_scopeId}></path><path d="M11.9946 16H12.0036" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"${_scopeId}></path></svg> Информация </span><svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path d="M5.19751 11.6199L9.00084 7.81655C9.45001 7.36738 9.45001 6.63238 9.00084 6.18322L5.19751 2.37988" stroke="black" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"${_scopeId}></path></svg>`);
          } else {
            return [
              createVNode("span", null, [
                (openBlock(), createBlock("svg", {
                  width: "24",
                  height: "24",
                  viewBox: "0 0 24 24",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg"
                }, [
                  createVNode("path", {
                    d: "M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z",
                    stroke: "black",
                    "stroke-width": "1.5",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round"
                  }),
                  createVNode("path", {
                    d: "M12 8V13",
                    stroke: "black",
                    "stroke-width": "1.5",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round"
                  }),
                  createVNode("path", {
                    d: "M11.9946 16H12.0036",
                    stroke: "black",
                    "stroke-width": "2",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round"
                  })
                ])),
                createTextVNode(" Информация ")
              ]),
              (openBlock(), createBlock("svg", {
                width: "14",
                height: "14",
                viewBox: "0 0 14 14",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
              }, [
                createVNode("path", {
                  d: "M5.19751 11.6199L9.00084 7.81655C9.45001 7.36738 9.45001 6.63238 9.00084 6.18322L5.19751 2.37988",
                  stroke: "black",
                  "stroke-width": "1.5",
                  "stroke-miterlimit": "10",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round"
                })
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "nav-link",
        to: "/user/favorite",
        onClick: goToFavorites
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path d="M12.62 20.81C12.28 20.93 11.72 20.93 11.38 20.81C8.48 19.82 2 15.69 2 8.68998C2 5.59998 4.49 3.09998 7.56 3.09998C9.38 3.09998 10.99 3.97998 12 5.33998C13.01 3.97998 14.63 3.09998 16.44 3.09998C19.51 3.09998 22 5.59998 22 8.68998C22 15.69 15.52 19.82 12.62 20.81Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"${_scopeId}></path></svg> Избранные </span><svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path d="M5.19751 11.6199L9.00084 7.81655C9.45001 7.36738 9.45001 6.63238 9.00084 6.18322L5.19751 2.37988" stroke="black" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"${_scopeId}></path></svg>`);
          } else {
            return [
              createVNode("span", null, [
                (openBlock(), createBlock("svg", {
                  width: "24",
                  height: "24",
                  viewBox: "0 0 24 24",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg"
                }, [
                  createVNode("path", {
                    d: "M12.62 20.81C12.28 20.93 11.72 20.93 11.38 20.81C8.48 19.82 2 15.69 2 8.68998C2 5.59998 4.49 3.09998 7.56 3.09998C9.38 3.09998 10.99 3.97998 12 5.33998C13.01 3.97998 14.63 3.09998 16.44 3.09998C19.51 3.09998 22 5.59998 22 8.68998C22 15.69 15.52 19.82 12.62 20.81Z",
                    stroke: "black",
                    "stroke-width": "1.5",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round"
                  })
                ])),
                createTextVNode(" Избранные ")
              ]),
              (openBlock(), createBlock("svg", {
                width: "14",
                height: "14",
                viewBox: "0 0 14 14",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
              }, [
                createVNode("path", {
                  d: "M5.19751 11.6199L9.00084 7.81655C9.45001 7.36738 9.45001 6.63238 9.00084 6.18322L5.19751 2.37988",
                  stroke: "black",
                  "stroke-width": "1.5",
                  "stroke-miterlimit": "10",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round"
                })
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "nav-link",
        to: "/user/orders",
        onClick: goToOrders
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path d="M22 6V8.42C22 10 21 11 19.42 11H16V4.01C16 2.9 16.91 2 18.02 2C19.11 2.01 20.11 2.45 20.83 3.17C21.55 3.9 22 4.9 22 6Z" stroke="black" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"${_scopeId}></path><path d="M2 7V21C2 21.83 2.94 22.3 3.6 21.8L5.31 20.52C5.71 20.22 6.27 20.26 6.63 20.62L8.29 22.29C8.68 22.68 9.32 22.68 9.71 22.29L11.39 20.61C11.74 20.26 12.3 20.22 12.69 20.52L14.4 21.8C15.06 22.29 16 21.82 16 21V4C16 2.9 16.9 2 18 2H7H6C3 2 2 3.79 2 6V7Z" stroke="black" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"${_scopeId}></path><path d="M9 13.0098H12" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"${_scopeId}></path><path d="M9 9.00977H12" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"${_scopeId}></path><path d="M5.99561 13H6.00459" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"${_scopeId}></path><path d="M5.99561 9H6.00459" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"${_scopeId}></path></svg> Заказы </span><svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path d="M5.19751 11.6199L9.00084 7.81655C9.45001 7.36738 9.45001 6.63238 9.00084 6.18322L5.19751 2.37988" stroke="black" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"${_scopeId}></path></svg>`);
          } else {
            return [
              createVNode("span", null, [
                (openBlock(), createBlock("svg", {
                  width: "24",
                  height: "24",
                  viewBox: "0 0 24 24",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg"
                }, [
                  createVNode("path", {
                    d: "M22 6V8.42C22 10 21 11 19.42 11H16V4.01C16 2.9 16.91 2 18.02 2C19.11 2.01 20.11 2.45 20.83 3.17C21.55 3.9 22 4.9 22 6Z",
                    stroke: "black",
                    "stroke-width": "1.5",
                    "stroke-miterlimit": "10",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round"
                  }),
                  createVNode("path", {
                    d: "M2 7V21C2 21.83 2.94 22.3 3.6 21.8L5.31 20.52C5.71 20.22 6.27 20.26 6.63 20.62L8.29 22.29C8.68 22.68 9.32 22.68 9.71 22.29L11.39 20.61C11.74 20.26 12.3 20.22 12.69 20.52L14.4 21.8C15.06 22.29 16 21.82 16 21V4C16 2.9 16.9 2 18 2H7H6C3 2 2 3.79 2 6V7Z",
                    stroke: "black",
                    "stroke-width": "1.5",
                    "stroke-miterlimit": "10",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round"
                  }),
                  createVNode("path", {
                    d: "M9 13.0098H12",
                    stroke: "black",
                    "stroke-width": "1.5",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round"
                  }),
                  createVNode("path", {
                    d: "M9 9.00977H12",
                    stroke: "black",
                    "stroke-width": "1.5",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round"
                  }),
                  createVNode("path", {
                    d: "M5.99561 13H6.00459",
                    stroke: "black",
                    "stroke-width": "2",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round"
                  }),
                  createVNode("path", {
                    d: "M5.99561 9H6.00459",
                    stroke: "black",
                    "stroke-width": "2",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round"
                  })
                ])),
                createTextVNode(" Заказы ")
              ]),
              (openBlock(), createBlock("svg", {
                width: "14",
                height: "14",
                viewBox: "0 0 14 14",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
              }, [
                createVNode("path", {
                  d: "M5.19751 11.6199L9.00084 7.81655C9.45001 7.36738 9.45001 6.63238 9.00084 6.18322L5.19751 2.37988",
                  stroke: "black",
                  "stroke-width": "1.5",
                  "stroke-miterlimit": "10",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round"
                })
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "nav-link",
        to: "/user/settings"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}> Настройки </span><svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path d="M5.19751 11.6199L9.00084 7.81655C9.45001 7.36738 9.45001 6.63238 9.00084 6.18322L5.19751 2.37988" stroke="black" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"${_scopeId}></path></svg>`);
          } else {
            return [
              createVNode("span", null, " Настройки "),
              (openBlock(), createBlock("svg", {
                width: "14",
                height: "14",
                viewBox: "0 0 14 14",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
              }, [
                createVNode("path", {
                  d: "M5.19751 11.6199L9.00084 7.81655C9.45001 7.36738 9.45001 6.63238 9.00084 6.18322L5.19751 2.37988",
                  stroke: "black",
                  "stroke-width": "1.5",
                  "stroke-miterlimit": "10",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round"
                })
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "nav-link",
        onClick: logOutClick,
        to: "/"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path d="M8.8999 7.56023C9.2099 3.96023 11.0599 2.49023 15.1099 2.49023H15.2399C19.7099 2.49023 21.4999 4.28023 21.4999 8.75023V15.2702C21.4999 19.7402 19.7099 21.5302 15.2399 21.5302H15.1099C11.0899 21.5302 9.2399 20.0802 8.9099 16.5402" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"${_scopeId}></path><path d="M2 12H14.88" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"${_scopeId}></path><path d="M12.6499 8.6499L15.9999 11.9999L12.6499 15.3499" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"${_scopeId}></path></svg> Выйти </span><svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path d="M5.19751 11.6199L9.00084 7.81655C9.45001 7.36738 9.45001 6.63238 9.00084 6.18322L5.19751 2.37988" stroke="black" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"${_scopeId}></path></svg>`);
          } else {
            return [
              createVNode("span", null, [
                (openBlock(), createBlock("svg", {
                  width: "24",
                  height: "24",
                  viewBox: "0 0 24 24",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg"
                }, [
                  createVNode("path", {
                    d: "M8.8999 7.56023C9.2099 3.96023 11.0599 2.49023 15.1099 2.49023H15.2399C19.7099 2.49023 21.4999 4.28023 21.4999 8.75023V15.2702C21.4999 19.7402 19.7099 21.5302 15.2399 21.5302H15.1099C11.0899 21.5302 9.2399 20.0802 8.9099 16.5402",
                    stroke: "black",
                    "stroke-width": "1.5",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round"
                  }),
                  createVNode("path", {
                    d: "M2 12H14.88",
                    stroke: "black",
                    "stroke-width": "1.5",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round"
                  }),
                  createVNode("path", {
                    d: "M12.6499 8.6499L15.9999 11.9999L12.6499 15.3499",
                    stroke: "black",
                    "stroke-width": "1.5",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round"
                  })
                ])),
                createTextVNode(" Выйти ")
              ]),
              (openBlock(), createBlock("svg", {
                width: "14",
                height: "14",
                viewBox: "0 0 14 14",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
              }, [
                createVNode("path", {
                  d: "M5.19751 11.6199L9.00084 7.81655C9.45001 7.36738 9.45001 6.63238 9.00084 6.18322L5.19751 2.37988",
                  stroke: "black",
                  "stroke-width": "1.5",
                  "stroke-miterlimit": "10",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round"
                })
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</nav></aside>`);
    };
  }
};
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UserComponents/DashboardList.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_1 = _sfc_main$7;
const baseurl = "https://admin.itpapa.uz";
const _sfc_main$6 = {
  __name: "FavoritesCard",
  __ssrInlineRender: true,
  props: {
    product_info: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    useCartStore();
    useCookie("token_access");
    const { product_info } = props;
    const currencyStore = useCurrencyStore();
    const getPriceText = () => {
      const currency = currencyStore.selectedCurrency;
      const priceInfo = product_info.product.prices_in_currencies[currency];
      if (!priceInfo) {
        return "Цена не указана";
      }
      return `${priceInfo.price} ${priceInfo.symbol}`;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "col" }, _attrs))}><div class="card onmalika-card h-100"><div class="onmalika-card-badges"><span class="badge onmalika-card-badges-new" style="${ssrRenderStyle({ "background-color": "#80EE98" })}">new</span><span class="badge onmalika-card-badges-new" style="${ssrRenderStyle({ "background-color": "#FF4A4A" })}">-20%</span></div><button class="onmalika-card-favorite active"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.62 20.81C12.28 20.93 11.72 20.93 11.38 20.81C8.48 19.82 2 15.69 2 8.68998C2 5.59998 4.49 3.09998 7.56 3.09998C9.38 3.09998 10.99 3.97998 12 5.33998C13.01 3.97998 14.63 3.09998 16.44 3.09998C19.51 3.09998 22 5.59998 22 8.68998C22 15.69 15.52 19.82 12.62 20.81Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></button>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/shop/" + unref(product_info).product.category.parent.slug + "/" + unref(product_info).product.category.slug + "/" + unref(product_info).product.slug
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (unref(product_info).product && unref(product_info).product.image && unref(product_info).product.image.url) {
              _push2(`<img${ssrRenderAttr("src", baseurl + unref(product_info).product.image.url)} class="card-img-top" alt="..."${_scopeId}>`);
            } else {
              _push2(`<img src="https://placehold.co/250x250" class="w-100" alt=""${_scopeId}>`);
            }
          } else {
            return [
              unref(product_info).product && unref(product_info).product.image && unref(product_info).product.image.url ? (openBlock(), createBlock("img", {
                key: 0,
                src: baseurl + unref(product_info).product.image.url,
                class: "card-img-top",
                alt: "..."
              }, null, 8, ["src"])) : (openBlock(), createBlock("img", {
                key: 1,
                src: "https://placehold.co/250x250",
                class: "w-100",
                alt: ""
              }))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="card-body onmalika-card-body"><h5 class="onmalika-card-title">${ssrInterpolate(unref(product_info).product.name)}</h5><div class="onmalika-card-stock"><div class="stock in-stock"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="#46AC36" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M7.75 11.9999L10.58 14.8299L16.25 9.16992" stroke="#46AC36" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg><p> Есть в наличии</p></div></div><div class="onmalika-card-price"><span class="${ssrRenderClass({ "active": unref(product_info).product.sales_price })}">${ssrInterpolate(getPriceText())}</span><p class="${ssrRenderClass({ "d-none": !unref(product_info).product.sales_price })}">${ssrInterpolate(unref(product_info).product.sales_price)}</p></div><div class="onmalika-card-body-orderbtn"><button type="button" class="btn dark-cover w-50 justify-content-center"> В корзину</button><p><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.5639 4.3011L15.1502 7.49508C15.364 7.93681 15.9378 8.35588 16.4216 8.44649L19.2905 8.92219C21.1244 9.22799 21.5519 10.5645 20.2356 11.901L17.9967 14.1549C17.6254 14.5286 17.4116 15.2649 17.5354 15.7972L18.1767 18.5834C18.683 20.7807 17.5129 21.6415 15.589 20.4862L12.9001 18.8779C12.4163 18.5834 11.6062 18.5834 11.1224 18.8779L8.43351 20.4862C6.50963 21.6302 5.33955 20.7807 5.84583 18.5834L6.48712 15.7972C6.58838 15.2535 6.37462 14.5173 6.00334 14.1436L3.76444 11.8896C2.4481 10.5645 2.87563 9.22799 4.7095 8.91086L7.57845 8.43516C8.06223 8.35588 8.63602 7.92548 8.84979 7.48376L10.4361 4.28977C11.3025 2.56819 12.6975 2.56819 13.5639 4.3011Z" fill="#FFB800"></path></svg> 5.0 </p></div></div></div></div>`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UserComponents/FavoritesCard.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_2 = _sfc_main$6;
const _sfc_main$5 = {
  __name: "favorite",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const token_access = useCookie("token_access");
    const authStore = useAuthStore();
    const { data: favorite_products } = ([__temp, __restore] = withAsyncContext(() => useJsonPlaceholderData("/user/favorites/", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token_access.value}`
      }
    })), __temp = await __temp, __restore(), __temp);
    watch(() => route.path, (newPath) => {
      if (newPath === "/user/favorite" && !localStorage.getItem("reloaded")) {
        localStorage.setItem("reloaded", "true");
        window.location.reload();
      }
    });
    watch(() => route.path, (newPath) => {
      if (newPath !== "/user/favorite") {
        localStorage.removeItem("reloaded");
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_UserComponentsDashboardList = __nuxt_component_1;
      const _component_UserComponentsFavoritesCard = __nuxt_component_2;
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
      _push(`</li><li class="breadcrumb-item">`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/user" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Профиль`);
          } else {
            return [
              createTextVNode("Профиль")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="breadcrumb-item active" aria-current="page">Избранные</li></ol></nav></div><section class="padding-y">`);
      if (unref(authStore).user) {
        _push(`<div class="container"><h1>Избранные</h1><div class="row">`);
        _push(ssrRenderComponent(_component_UserComponentsDashboardList, null, null, _parent));
        _push(`<div class="col-10">`);
        if (unref(favorite_products) && unref(favorite_products).length > 0) {
          _push(`<div class="row row-cols-3"><!--[-->`);
          ssrRenderList(unref(favorite_products), (userFav) => {
            _push(ssrRenderComponent(_component_UserComponentsFavoritesCard, {
              key: userFav.product.id,
              product_info: userFav,
              userFav: true
            }, null, _parent));
          });
          _push(`<!--]--></div>`);
        } else {
          _push(`<div class="empty-cart"><h4> В избранном пока нет товаров</h4><p>Товары можно добавить, нажав на <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.62 20.81C12.28 20.93 11.72 20.93 11.38 20.81C8.48 19.82 2 15.69 2 8.68998C2 5.59998 4.49 3.09998 7.56 3.09998C9.38 3.09998 10.99 3.97998 12 5.33998C13.01 3.97998 14.63 3.09998 16.44 3.09998C19.51 3.09998 22 5.59998 22 8.68998C22 15.69 15.52 19.82 12.62 20.81Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></p></div>`);
        }
        _push(`</div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</section></div>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/user/favorite.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const favorite = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: _sfc_main$5
});
const _sfc_main$4 = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const authStore = useAuthStore();
    useCookie("token_access");
    const name = ref(authStore.user.first_name);
    const surname = ref(authStore.user.last_name);
    const number = ref(authStore.user.phone_number);
    const email = ref(authStore.user.email);
    useHead({
      title: "Кабинет",
      meta: []
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_UserComponentsDashboardList = __nuxt_component_1;
      if (unref(authStore).user) {
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
        _push(`</li><li class="breadcrumb-item active" aria-current="page">Профиль</li></ol></nav></div><section><div class="container"><h1>Профиль</h1><div class="row">`);
        _push(ssrRenderComponent(_component_UserComponentsDashboardList, null, null, _parent));
        _push(`<div class="col-lg-10 col-xl-10"><div class="onmalika-user-settings"><form><div class="row"><div class="col-6 mb-3"><label for="userChangeName" class="form-label">Ваше имя</label><input${ssrRenderAttr("value", unref(name))} type="text" class="form-control" id="userChangeName"></div><div class="col-6 mb-3"><label for="userChangeSurName" class="form-label">Ваша фамилия</label><input${ssrRenderAttr("value", unref(surname))} type="text" class="form-control" id="userChangeSurName"></div><div class="col-6 mb-3"><label for="userChangeNumber" class="form-label">Ваш номер</label><input${ssrRenderAttr("value", unref(number))} type="text" class="form-control" id="userChangeNumber"></div><div class="col-6 mb-3"><label for="userChangeNumber" class="form-label">Ваш email</label><input${ssrRenderAttr("value", unref(email))} type="email" class="form-control" id="userChangeNumber"></div></div><div class="btn-group" role="group" aria-label="Basic example"><button type="submit" class="btn dark-cover"> Применить изменения</button></div></form></div></div></div></div></section></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/user/index.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const index$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: _sfc_main$4
});
const _imports_0 = "" + __publicAssetsURL("img/mini-logo.svg");
const _sfc_main$3 = {
  __name: "login",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    useRoute();
    const errorMessage = ref("");
    useAuthStore();
    const number = ref("");
    const timer = ref(60);
    const canResend = ref(false);
    ref();
    const isSend = ref(false);
    const otpInput = ref(null);
    const bindModal = ref("");
    const otpValue = ref("");
    ref();
    const handleOnComplete = (value) => {
      otpValue.value = value;
    };
    useSeoMeta({
      title: "Авторизация"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
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
      _push(`</li><li class="breadcrumb-item active" aria-current="page">Авторизация</li></ol></nav></div><section><div class="container"><div class="onmalika-auth">`);
      if (unref(errorMessage)) {
        _push(`<div class="alert text-center alert-danger">${ssrInterpolate(unref(errorMessage))}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="user-form"><div class="text-center mb-5"><img${ssrRenderAttr("src", _imports_0)} alt=""></div><form class="${ssrRenderClass({ "d-none": unref(isSend) })}"><div class="mb-3"><input autocomplete="username" placeholder="Введите ваш номер" type="tel" class="form-control"${ssrRenderAttr("value", unref(number))} id="userLogin" aria-describedby="userHelp" required></div><button type="submit" class="btn dark-cover justify-content-center w-100">Получить код</button></form><div class="${ssrRenderClass({ "d-none": !unref(isSend) })}"><form><div class="mb-4" style="${ssrRenderStyle({ "display": "flex", "flex-direction": "row", "justify-content": "center" })}">`);
      _push(ssrRenderComponent(unref(VOtpInput), {
        ref_key: "otpInput",
        ref: otpInput,
        modelValue: unref(bindModal),
        "onUpdate:modelValue": ($event) => isRef(bindModal) ? bindModal.value = $event : null,
        "input-classes": "otp-input",
        separator: "",
        "num-inputs": 6,
        value: "",
        "should-auto-focus": true,
        "input-type": "letter-numeric",
        conditionalClass: ["one", "two", "three", "four"],
        placeholder: ["*", "*", "*", "*", "*", "*"],
        onOnComplete: handleOnComplete
      }, null, _parent));
      _push(`</div><button type="submit" class="btn dark-cover justify-content-center mb-3 w-100">Войти</button>`);
      if (!unref(canResend)) {
        _push(`<div class="text-center">Повторная отправка кода возможна через: ${ssrInterpolate(unref(timer))} секунд</div>`);
      } else {
        _push(`<button class="btn dark-cover justify-content-center w-100">Отправить код еще раз</button>`);
      }
      _push(`</form></div></div></div></div></section></div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/user/login.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const login = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: _sfc_main$3
});
const _sfc_main$2 = {
  __name: "[id]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const token_access = useCookie("token_access");
    const route = useRoute();
    const { data: order } = ([__temp, __restore] = withAsyncContext(() => useJsonPlaceholderData("/user/orders/" + route.params.id, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token_access.value}`
      }
    })), __temp = await __temp, __restore(), __temp);
    if (!order.value || !order.value.id || !order.value.items) {
      throw createError({ statusCode: 404, message: "Такого заказа не существует" });
    }
    const currencyStore = useCurrencyStore();
    const getPriceInSelectedCurrency = (product) => {
      const selectedCurrency = currencyStore.selectedCurrency;
      const priceInfo = product.prices_in_currencies[selectedCurrency];
      if (!priceInfo) {
        return "Цена не указана";
      }
      return `${priceInfo.price} ${priceInfo.symbol}`;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}><section class="bg-primary padding-y-sm"><div class="container"><ol class="breadcrumb ondark mb-0"><li class="breadcrumb-item">`);
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
      _push(`</li><li class="breadcrumb-item">`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/user" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Кабинет`);
          } else {
            return [
              createTextVNode("Кабинет")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="breadcrumb-item">`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/user/orders" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Заказы`);
          } else {
            return [
              createTextVNode("Заказы")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="breadcrumb-item active" aria-current="page">Заказ #${ssrInterpolate(unref(order).id)}</li></ol></div></section><section class="padding-y"><div class="container"><h2>Заказ #${ssrInterpolate(unref(order).id)}</h2><h3>Общая сумма ${ssrInterpolate(unref(order).total_price)}$</h3><h4 class="mb-3">Товары которые вы заказли</h4><!--[-->`);
      ssrRenderList(unref(order).items, (item) => {
        _push(`<div class="row align-items-center mb-3"><div class="col-2"><img${ssrRenderAttr("src", "https://admin.itpapa.uz" + item.product.image.url)} class="w-100" alt=""></div><div class="col-3"><h6>${ssrInterpolate(item.product.name)}</h6></div><div class="col-2"><h6> Кол-во: ${ssrInterpolate(item.quantity)}</h6></div><div class="col-2"><h6> Цена товара: <br> ${ssrInterpolate(getPriceInSelectedCurrency(item.product))}</h6></div><div class="col-3"><h6>Общая сумма этого товара <br> ${ssrInterpolate(item.total_price)}$ </h6></div></div>`);
      });
      _push(`<!--]--></div></section></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/user/orders/[id].vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _id_ = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: _sfc_main$2
});
const index_vue_vue_type_style_index_0_scoped_7f357c8a_lang = "";
const _sfc_main$1 = {
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const token_access = useCookie("token_access");
    const { data: order_list } = ([__temp, __restore] = withAsyncContext(() => useJsonPlaceholderData("/user/orders/", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token_access.value}`
      }
    })), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_UserComponentsDashboardList = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-7f357c8a><section class="bg-primary padding-y-sm" data-v-7f357c8a><div class="container" data-v-7f357c8a><ol class="breadcrumb ondark mb-0" data-v-7f357c8a><li class="breadcrumb-item" data-v-7f357c8a>`);
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
      _push(`</li><li class="breadcrumb-item" data-v-7f357c8a>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/user" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Кабинет`);
          } else {
            return [
              createTextVNode("Кабинет")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="breadcrumb-item active" aria-current="page" data-v-7f357c8a>Избранные</li></ol></div></section><section class="padding-y" data-v-7f357c8a><div class="container" data-v-7f357c8a><div class="row" data-v-7f357c8a>`);
      _push(ssrRenderComponent(_component_UserComponentsDashboardList, null, null, _parent));
      _push(`<div class="col-9" data-v-7f357c8a><h1 data-v-7f357c8a>Заказы</h1><div class="row mb-3 order-head" data-v-7f357c8a><div class="col-2" data-v-7f357c8a>Номер Заказа</div><div class="col-2" data-v-7f357c8a>Статус</div><div class="col-3" data-v-7f357c8a>Время</div><div class="col-3" data-v-7f357c8a>Сумма</div><div class="col-2" data-v-7f357c8a>Подробнее</div></div><!--[-->`);
      ssrRenderList(unref(order_list), (order) => {
        _push(`<div class="order-list" data-v-7f357c8a><div class="row" data-v-7f357c8a><div class="col-2" data-v-7f357c8a><div class="order-item" data-v-7f357c8a> #${ssrInterpolate(order.id)}</div></div><div class="col-2" data-v-7f357c8a><div class="order-item" data-v-7f357c8a> Неизвестно </div></div><div class="col-3" data-v-7f357c8a><div class="order-item" data-v-7f357c8a>${ssrInterpolate(order.created_at)}</div></div><div class="col-3" data-v-7f357c8a><div class="order-item" data-v-7f357c8a>${ssrInterpolate(order.total_price)}$ </div></div><div class="col-2" data-v-7f357c8a><div class="order-item" data-v-7f357c8a>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/user/orders/" + order.id
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` К заказу <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" data-v-7f357c8a${_scopeId}><path d="M2.5 8H13.5" stroke="#2DA5F3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-7f357c8a${_scopeId}></path><path d="M9 3.5L13.5 8L9 12.5" stroke="#2DA5F3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-7f357c8a${_scopeId}></path></svg>`);
            } else {
              return [
                createTextVNode(" К заказу "),
                (openBlock(), createBlock("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "16",
                  height: "16",
                  viewBox: "0 0 16 16",
                  fill: "none"
                }, [
                  createVNode("path", {
                    d: "M2.5 8H13.5",
                    stroke: "#2DA5F3",
                    "stroke-width": "1.5",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round"
                  }),
                  createVNode("path", {
                    d: "M9 3.5L13.5 8L9 12.5",
                    stroke: "#2DA5F3",
                    "stroke-width": "1.5",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round"
                  })
                ]))
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div></div></div></div>`);
      });
      _push(`<!--]--></div></div></div></section></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/user/orders/index.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-7f357c8a"]]);
const index$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: index
});
const _sfc_main = {
  __name: "settings",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_UserComponentsDashboardList = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="container"><ol class="breadcrumb onmalika-breadcrumb"><li class="breadcrumb-item">`);
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
      _push(`</li><li class="breadcrumb-item">`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/user" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Кабинет`);
          } else {
            return [
              createTextVNode("Кабинет")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="breadcrumb-item active" aria-current="page">Настройки</li></ol></div>`);
      if (_ctx.authStore.user) {
        _push(`<section class="padding-y"><div class="container"><h1>Настройки</h1><div class="row">`);
        _push(ssrRenderComponent(_component_UserComponentsDashboardList, null, null, _parent));
        _push(`<div class="col-10"><div class="onmalika-user-settings"><form><div class="row"><div class="col-6 mb-3"><label for="userChangeName" class="form-label">Ваше имя</label><input${ssrRenderAttr("value", _ctx.name)} type="text" class="form-control" id="userChangeName"></div><div class="col-6 mb-3"><label for="userChangeSurName" class="form-label">Ваша фамилия</label><input${ssrRenderAttr("value", _ctx.surname)} type="text" class="form-control" id="userChangeSurName"></div><div class="col-6 mb-3"><label for="userChangeNumber" class="form-label">Ваш номер</label><input${ssrRenderAttr("value", _ctx.number)} type="text" class="form-control" id="userChangeNumber"></div><div class="col-6 mb-3"><label for="userChangeNumber" class="form-label">Ваш email</label><input${ssrRenderAttr("value", _ctx.email)} type="email" class="form-control" id="userChangeNumber"></div></div><div class="btn-group" role="group" aria-label="Basic example"><button type="submit" class="btn dark-cover"> Применить изменения</button></div></form></div></div></div></div></section>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/user/settings.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const settings = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: _sfc_main
});
export {
  __nuxt_page_meta$4 as _,
  __nuxt_page_meta$3 as a,
  __nuxt_page_meta$2 as b,
  __nuxt_page_meta$1 as c,
  __nuxt_page_meta as d,
  _id_ as e,
  favorite as f,
  index$1 as g,
  index$2 as i,
  login as l,
  settings as s
};
//# sourceMappingURL=chunk-pg-user-4bc47dbe.js.map
