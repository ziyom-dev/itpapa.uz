import { c as useAuthStore, b as useCartStore, u as useRoute, a as useRouter, h as useJsonPlaceholderData, j as createError, d as useCurrencyStore, e as useSeoMeta, f as __nuxt_component_0, _ as _export_sfc, k as useHead } from "./chunk-pg-brands-4e133212.js";
import { withAsyncContext, ref, withCtx, createTextVNode, unref, toDisplayString, useSSRContext, mergeProps, computed, watch, defineAsyncComponent, openBlock, createBlock, createCommentVNode, createVNode } from "vue";
import "hookable";
import "destr";
import "devalue";
import "klona";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrRenderStyle, ssrRenderClass, ssrIncludeBooleanAttr } from "vue/server-renderer";
const urlOfMedia = "https://admin.itpapa.uz";
const _sfc_main$5 = {
  __name: "[id]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    useAuthStore();
    useCartStore();
    const route = useRoute();
    const router = useRouter();
    const { data: product } = ([__temp, __restore] = withAsyncContext(() => useJsonPlaceholderData("/products/" + route.params.id)), __temp = await __temp, __restore(), __temp);
    if (!product.value || !product.value.category) {
      throw createError({ statusCode: 404, message: "Такого товара нету" });
    }
    ref(5);
    ref(null);
    const quantity = ref(1);
    const goToBrand = async (slug) => {
      await router.push("/brands/" + slug);
    };
    const currencyStore = useCurrencyStore();
    const getPriceText = () => {
      const currency = currencyStore.selectedCurrency;
      const priceInfo = product.value.prices_in_currencies[currency];
      if (!priceInfo) {
        return "Цена не указана";
      }
      return `${priceInfo.price} ${priceInfo.symbol}`;
    };
    useSeoMeta({
      title: product.value.name,
      ogTitle: product.value.name
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
      _push(`</li><li class="breadcrumb-item">`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/shop" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Магазинчик`);
          } else {
            return [
              createTextVNode("Магазинчик")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="breadcrumb-item">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/shop/" + unref(product).category.parent.slug
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(product).category.parent.name)}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(product).category.parent.name), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="breadcrumb-item">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/shop/" + unref(product).category.parent.slug + "/" + unref(product).category.slug
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(product).category.name)}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(product).category.name), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="breadcrumb-item active" aria-current="page">${ssrInterpolate(unref(product).name)}</li></ol></nav></div><section><div class="container"><div class="row justify-content-between onmalika-product"><div class="col-6"><div class="row"><div class="col-2"><div class="onmalika-product-gallery">`);
      if (unref(product).images && unref(product).images.length > 1) {
        _push(`<div class="onmalika-product-gallery-item active"><!--[-->`);
        ssrRenderList(unref(product).images, (progall, index2) => {
          _push(`<div><img${ssrRenderAttr("src", urlOfMedia + progall.url)} class="w-100" alt=""></div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="col-10"><!--[-->`);
      ssrRenderList(unref(product).images, (progall) => {
        _push(`<div class="onmalika-product-main-img"><img${ssrRenderAttr("src", urlOfMedia + progall.url)} class="w-100" alt=""><div class="onmalika-product-rating"><button type="button" class="onmalika-product-favorite"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.62 20.81C12.28 20.93 11.72 20.93 11.38 20.81C8.48 19.82 2 15.69 2 8.68998C2 5.59998 4.49 3.09998 7.56 3.09998C9.38 3.09998 10.99 3.97998 12 5.33998C13.01 3.97998 14.63 3.09998 16.44 3.09998C19.51 3.09998 22 5.59998 22 8.68998C22 15.69 15.52 19.82 12.62 20.81Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></button><p><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.5639 4.3011L15.1502 7.49508C15.364 7.93681 15.9378 8.35588 16.4216 8.44649L19.2905 8.92219C21.1244 9.22799 21.5519 10.5645 20.2356 11.901L17.9967 14.1549C17.6254 14.5286 17.4116 15.2649 17.5354 15.7972L18.1767 18.5834C18.683 20.7807 17.5129 21.6415 15.589 20.4862L12.9001 18.8779C12.4163 18.5834 11.6062 18.5834 11.1224 18.8779L8.43351 20.4862C6.50963 21.6302 5.33955 20.7807 5.84583 18.5834L6.48712 15.7972C6.58838 15.2535 6.37462 14.5173 6.00334 14.1436L3.76444 11.8896C2.4481 10.5645 2.87563 9.22799 4.7095 8.91086L7.57845 8.43516C8.06223 8.35588 8.63602 7.92548 8.84979 7.48376L10.4361 4.28977C11.3025 2.56819 12.6975 2.56819 13.5639 4.3011Z" fill="#FFB800"></path></svg> 5.0 </p></div></div>`);
      });
      _push(`<!--]--></div></div><div></div></div><div class="col-6"><h1 class="onmalika-product-title">${ssrInterpolate(unref(product).name)}</h1><h4 class="onmalika-product-short-title"> Краткое описание: </h4><p class="onmalika-product-short">${ssrInterpolate(unref(product).short_description)}</p><p class="onmalika-product-short">${ssrInterpolate(unref(product).sku)}</p><div class="onmalika-product-reviews-stock"><p><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="#46AC36" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M7.75 11.9999L10.58 14.8299L16.25 9.16992" stroke="#46AC36" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg> Есть в наличии </p><button type="button" class="onmalika-product-reviews" data-bs-toggle="modal" data-bs-target="#reviewsModal"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.5 19H8C4 19 2 18 2 13V8C2 4 4 2 8 2H16C20 2 22 4 22 8V13C22 17 20 19 16 19H15.5C15.19 19 14.89 19.15 14.7 19.4L13.2 21.4C12.54 22.28 11.46 22.28 10.8 21.4L9.3 19.4C9.14 19.18 8.77 19 8.5 19Z" stroke="black" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M15.9965 11H16.0054" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M11.9945 11H12.0035" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M7.99451 11H8.00349" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg><span> Отзывы </span></button></div><h4 class="onmalika-product-price">${ssrInterpolate(getPriceText())}</h4><p class="mb-3">Brand: `);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/brands/" + unref(product).brand.slug,
        onClick: ($event) => goToBrand(unref(product).brand.slug)
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(product).brand.name)}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(product).brand.name), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</p><div class="onmalika-product-btns"><button class="btn dark-cover" type="button"> В корзину </button><div class="product-counter"><button type="button"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#999" viewBox="0 0 24 24"><path d="M19 13H5v-2h14v2z"></path></svg></button><input class="text-center" type="text"${ssrRenderAttr("value", unref(quantity))} disabled><button type="button"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#999" viewBox="0 0 24 24"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path></svg></button></div></div></div></div></div></section><section><div class="container"><div class="row"><div class="col-6"><div class="accordion onmalika-accardion" id="accordionExample">`);
      if (unref(product).description) {
        _push(`<div class="accordion-item"><h2 class="accordion-header"><button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"> Описание </button></h2><div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample"><div class="accordion-body">${ssrInterpolate(unref(product).description)}</div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="accordion-item"><h2 class="accordion-header"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"> Характеристики </button></h2><div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample"><div class="accordion-body"><!--[-->`);
      ssrRenderList(unref(product).product_attrs, (atrs) => {
        _push(`<ul><li>${ssrInterpolate(atrs.attribute.name)} <span>${ssrInterpolate(atrs.attribute_value.value)}</span></li></ul>`);
      });
      _push(`<!--]--></div></div></div></div></div><div class="col-6"><div>${unref(product).content}</div></div></div></div></section></div>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/shop/[category]/[subCategory]/[id].vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _id_ = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: _sfc_main$5
});
const MultiRangeSlider_vue_vue_type_style_index_0_lang = "";
const _sfc_main$4 = {
  name: "MultiRangeSlider",
  props: {
    baseClassName: {
      type: String,
      default: "multi-range-slider"
    },
    min: { type: Number },
    max: { type: Number },
    minValue: { type: Number },
    maxValue: { type: Number },
    step: { type: Number, default: 1 },
    preventWheel: { type: Boolean, default: false },
    ruler: { type: Boolean, default: true },
    label: { type: Boolean, default: true },
    labels: { type: Array },
    minCaption: { type: String },
    maxCaption: { type: String },
    rangeMargin: { type: Number }
  },
  data() {
    let _labels = this.labels || [];
    let _minimum = this.min === void 0 ? 0 : this.min;
    let max = _labels.length ? _labels.length - 1 : 100;
    let _maximum = this.max === void 0 ? max : this.max;
    let _minValue = this.minValue === void 0 ? 25 : this.minValue;
    if (_labels.length && this.minValue === void 0) {
      _minValue = 1;
    }
    let _maxValue = this.maxValue || 75;
    if (_labels.length && this.maxValue === void 0) {
      _maxValue = _labels.length - 2;
    }
    if (_maximum <= _minimum) {
      throw new Error("Invalid props min or max");
    }
    if (_minValue > _maxValue) {
      throw new Error("Invalid props minValue or maxValue");
    }
    let _rangeMargin = this.rangeMargin === void 0 ? this.step : this.rangeMargin;
    let m = _rangeMargin % this.step;
    m && (_rangeMargin = _rangeMargin + this.step - m);
    return {
      valueMin: _minValue < _minimum ? _minimum : _minValue,
      valueMax: _maxValue > _maximum ? _maximum : _maxValue,
      interVal: null,
      startX: null,
      mouseMoveCounter: null,
      barBox: null,
      barValue: 0,
      rangeMarginValue: _rangeMargin
    };
  },
  methods: {
    onBarLeftClick() {
      if (this.valueMin - this.step >= this.minimum) {
        this.valueMin -= this.step;
      } else {
        this.valueMin = this.minimum;
      }
    },
    onInnerBarLeftClick() {
      if (this.valueMin + this.rangeMarginValue < this.valueMax) {
        this.valueMin += this.step;
      }
    },
    onBarRightClick() {
      if (this.valueMax + this.step <= this.maximum) {
        this.valueMax += this.step;
      } else {
        this.valueMax = this.maximum;
      }
    },
    onInnerBarRightClick() {
      if (this.valueMax - this.rangeMarginValue > this.valueMin) {
        this.valueMax -= this.step;
      }
    },
    onInputMinChange(e) {
      let val = parseFloat(e.target.value);
      if (val <= this.valueMax - this.rangeMarginValue && val >= this.minimum) {
        this.valueMin = val;
      } else {
        e.target.value = this.valueMin;
      }
    },
    onInputMaxChange(e) {
      let val = parseFloat(e.target.value);
      if (val >= this.valueMin + this.rangeMarginValue && val <= this.maximum) {
        this.valueMax = val;
      } else {
        e.target.value = this.valueMax;
      }
    },
    onLeftThumbMousedown(e) {
      e.preventDefault();
      this.startX = e.clientX;
      if (e.type === "touchstart") {
        if (e.touches.length === 1) {
          this.startX = e.touches[0].clientX;
        } else {
          return;
        }
      }
      this.mouseMoveCounter = 0;
      this.barValue = this.valueMin;
      this.barBox = e.target.parentNode.getBoundingClientRect();
      document.addEventListener("mousemove", this.onLeftThumbMousemove);
      document.addEventListener("mouseup", this.onLeftThumbMouseup);
      document.addEventListener("touchmove", this.onLeftThumbMousemove);
      document.addEventListener("touchend", this.onLeftThumbMouseup);
    },
    onLeftThumbMousemove(e) {
      this.mouseMoveCounter++;
      let clientX = e.clientX;
      if (e.type === "touchmove") {
        clientX = e.touches[0].clientX;
      }
      let dx = clientX - this.startX;
      let per = dx / this.barBox.width;
      let val = this.barValue + (this.maximum - this.minimum) * per;
      let mod = val % this.step;
      val -= mod;
      if (val < this.minimum) {
        val = this.minimum;
      } else if (val > this.valueMax - this.rangeMarginValue) {
        val = this.valueMax - this.rangeMarginValue;
      }
      this.valueMin = val;
    },
    onLeftThumbMouseup() {
      document.removeEventListener("mousemove", this.onLeftThumbMousemove);
      document.removeEventListener("mouseup", this.onLeftThumbMouseup);
      document.removeEventListener("touchmove", this.onLeftThumbMousemove);
      document.removeEventListener("touchend", this.onLeftThumbMouseup);
    },
    onRightThumbMousedown(e) {
      e.preventDefault();
      this.startX = e.clientX;
      if (e.type === "touchstart") {
        if (e.touches.length === 1) {
          this.startX = e.touches[0].clientX;
        } else {
          return;
        }
      }
      this.mouseMoveCounter = 0;
      this.barValue = this.valueMax;
      this.barBox = e.target.parentNode.getBoundingClientRect();
      document.addEventListener("mousemove", this.onRightThumbMousemove);
      document.addEventListener("mouseup", this.onRightThumbMouseup);
      document.addEventListener("touchmove", this.onRightThumbMousemove);
      document.addEventListener("touchend", this.onRightThumbMouseup);
    },
    onRightThumbMousemove(e) {
      this.mouseMoveCounter++;
      let clientX = e.clientX;
      if (e.type === "touchmove") {
        clientX = e.touches[0].clientX;
      }
      let dx = clientX - this.startX;
      let per = dx / this.barBox.width;
      let val = this.barValue + (this.maximum - this.minimum) * per;
      let mod = val % this.step;
      val -= mod;
      if (val < this.valueMin + this.rangeMarginValue) {
        val = this.valueMin + this.rangeMarginValue;
      } else if (val > this.maximum) {
        val = this.maximum;
      }
      this.valueMax = val;
    },
    onRightThumbMouseup() {
      document.removeEventListener("mousemove", this.onRightThumbMousemove);
      document.removeEventListener("mouseup", this.onRightThumbMouseup);
      document.removeEventListener("touchmove", this.onRightThumbMousemove);
      document.removeEventListener("touchend", this.onRightThumbMouseup);
    },
    onMouseWheel(e) {
      if (this.preventWheel === true) {
        return;
      }
      if (!e.shiftKey && !e.ctrlKey) {
        return;
      }
      let val = this.step;
      if (e.deltaY < 0) {
        val = -val;
      }
      if (e.shiftKey && e.ctrlKey) {
        if (this.valueMin + val >= this.minimum && this.valueMax + val <= this.maximum) {
          this.valueMin = this.valueMin + val;
          this.valueMax = this.valueMax + val;
        }
      } else if (e.ctrlKey) {
        val = this.valueMax + val;
        if (val < this.valueMin + this.rangeMarginValue) {
          val = this.valueMin + this.rangeMarginValue;
        } else if (val > this.maximum) {
          val = this.maximum;
        }
        this.valueMax = val;
      } else if (e.shiftKey) {
        val = this.valueMin + val;
        if (val < this.minimum) {
          val = this.minimum;
        } else if (val > this.valueMax - this.rangeMarginValue) {
          val = this.valueMax - this.rangeMarginValue;
        }
        this.valueMin = val;
      }
    },
    triggerInput() {
      let fixed = 0;
      if (this.step.toString().includes(".")) {
        fixed = 2;
      }
      let retObj = {
        min: this.minimum,
        max: this.maximum,
        minValue: parseFloat(this.valueMin.toFixed(fixed)),
        maxValue: parseFloat(this.valueMax.toFixed(fixed))
      };
      this.$emit("input", retObj);
    }
  },
  computed: {
    minimum() {
      return this.min === void 0 ? 0 : this.min;
    },
    maximum() {
      let _labels = this.labels || [];
      let max = _labels.length ? _labels.length - 1 : 100;
      return this.max === void 0 ? max : this.max;
    },
    stepCount() {
      let _labels = this.labels || [];
      if (_labels.length) {
        return _labels.length - 1;
      }
      return Math.floor((this.maximum - this.minimum) / this.step);
    },
    subStepCount() {
      let _labels = this.labels || [];
      if (_labels.length && this.step > 1) {
        return (this.maximum - this.minimum) / this.step;
      }
      return 0;
    },
    barMin() {
      let per = (this.valueMin - this.minimum) / (this.maximum - this.minimum) * 100;
      return per;
    },
    barMax() {
      let per = 100 - (this.valueMax - this.minimum) / (this.maximum - this.minimum) * 100;
      return per;
    },
    barMinVal() {
      let fixed = 0;
      if (this.step.toString().includes(".")) {
        fixed = 2;
      }
      return (this.valueMin || 0).toFixed(fixed);
    },
    barMaxVal() {
      let fixed = 0;
      if (this.step.toString().includes(".")) {
        fixed = 2;
      }
      return (this.valueMax || 100).toFixed(fixed);
    },
    scaleLabels() {
      let _labels = this.labels || [];
      if (_labels.length === 0) {
        _labels = [];
        _labels.push(this.minimum);
        _labels.push(this.maximum);
      }
      return _labels;
    }
  },
  watch: {
    valueMin() {
      this.triggerInput();
    },
    valueMax() {
      this.triggerInput();
    },
    minValue(newValue) {
      this.valueMin = newValue < this.minimum ? this.minimum : newValue;
    },
    maxValue(newValue) {
      this.valueMax = newValue > this.maximum ? this.maximum : newValue;
    }
  },
  mounted() {
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: [$props.baseClassName, $data.rangeMarginValue === 0 ? "zero-ranage-margin" : ""]
  }, _attrs))}><div class="bar"><div class="bar-left" style="${ssrRenderStyle({ width: $options.barMin + "%" })}"></div><input class="input-type-range input-type-range-min" type="range"${ssrRenderAttr("min", $options.minimum)}${ssrRenderAttr("max", $options.maximum)}${ssrRenderAttr("step", $props.step)}${ssrRenderAttr("value", $data.valueMin)}><div class="thumb thumb-left"><div class="caption"><span class="min-caption">${ssrInterpolate($props.minCaption || $options.barMinVal)}</span></div></div><div class="bar-inner"><div class="bar-inner-left"></div><div class="bar-inner-right"></div></div><input class="input-type-range input-type-range-max" type="range"${ssrRenderAttr("min", $options.minimum)}${ssrRenderAttr("max", $options.maximum)}${ssrRenderAttr("step", $props.step)}${ssrRenderAttr("value", $data.valueMax)}><div class="thumb thumb-right"><div class="caption"><span class="max-caption">${ssrInterpolate($props.maxCaption || $options.barMaxVal)}</span></div></div><div class="bar-right" style="${ssrRenderStyle({ width: $options.barMax + "%" })}"></div></div>`);
  if ($props.ruler) {
    _push(`<div class="ruler"><!--[-->`);
    ssrRenderList($options.stepCount, (n) => {
      _push(`<div class="ruler-rule"></div>`);
    });
    _push(`<!--]--></div>`);
  } else {
    _push(`<!---->`);
  }
  if ($options.subStepCount) {
    _push(`<div class="sub-ruler"><!--[-->`);
    ssrRenderList($options.subStepCount, (n) => {
      _push(`<div class="ruler-sub-rule"></div>`);
    });
    _push(`<!--]--></div>`);
  } else {
    _push(`<!---->`);
  }
  if ($props.label) {
    _push(`<div class="labels"><!--[-->`);
    ssrRenderList($options.scaleLabels, (label) => {
      _push(`<div class="label">${ssrInterpolate(label)}</div>`);
    });
    _push(`<!--]--></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/multi-range-slider-vue/MultiRangeSlider.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const MultiRangeSlider = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender]]);
const __nuxt_component_1_lazy = /* @__PURE__ */ defineAsyncComponent(() => import("./chunk-pg-brands-4e133212.js").then(function(n) {
  return n.D;
}).then((m) => m.default || m));
const _sfc_main$3 = {
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const router = useRouter();
    const attrList = ref();
    const { data: category } = ([__temp, __restore] = withAsyncContext(() => useJsonPlaceholderData("/categories/")), __temp = await __temp, __restore(), __temp);
    const { data: solo_category } = ([__temp, __restore] = withAsyncContext(() => useJsonPlaceholderData("/categories/" + route.params.subCategory)), __temp = await __temp, __restore(), __temp);
    const { data: attr_list } = ([__temp, __restore] = withAsyncContext(() => useJsonPlaceholderData(`/products/?category=${solo_category.value.id}`)), __temp = await __temp, __restore(), __temp);
    attrList.value = attr_list.value.attr_filters;
    if (!solo_category.value) {
      throw createError({ statusCode: 404, message: "Такой категории нету" });
    }
    const { data: previous_category } = ([__temp, __restore] = withAsyncContext(() => useJsonPlaceholderData("/categories/" + route.params.category)), __temp = await __temp, __restore(), __temp);
    computed(() => category.value);
    const hierarchicalCategories = ref([]);
    const isSubcategorySelected = (cats) => {
      return cats.subcategories.some((subcat) => route.params.subCategory === subcat.slug);
    };
    const products = ref([]);
    const nextUrl = ref(null);
    const prevUrl = ref(null);
    const currentPage = ref(1);
    const totalCount = ref(0);
    const selectedAttributes = ref([]);
    const pageSize = ref(9);
    pageSize.value = Number(route.query.pageSize) || 9;
    watch(() => route.query.pageSize, (newSize) => {
      if (newSize !== void 0 && newSize !== pageSize.value) {
        pageSize.value = Number(newSize);
        fetchProducts("/products/?category=" + solo_category.value.id + "&limit=" + pageSize.value);
      }
    });
    const totalPages = computed(() => Math.ceil(totalCount.value / pageSize.value));
    const selectFilterOfProducts = ref("");
    const selectedFilterText = ref("Выберите сортировку");
    const sortFilter = ref("");
    const barMinValue = ref(0);
    const barMaxValue = ref(1e3);
    const priceFilterTimeout = ref(null);
    const UpdateValues = (e) => {
      barMinValue.value = e.minValue;
      barMaxValue.value = e.maxValue;
      if (priceFilterTimeout.value) {
        clearTimeout(priceFilterTimeout.value);
      }
      debounceFetchProducts();
    };
    const debounceFetchProducts = () => {
      if (priceFilterTimeout.value)
        clearTimeout(priceFilterTimeout.value);
      priceFilterTimeout.value = setTimeout(() => {
        let url = `/products/?category=${solo_category.value.id}&limit=${pageSize.value}&price_from=${barMinValue.value}&price_to=${barMaxValue.value}`;
        if (route.query.attr) {
          url += `&attr=${route.query.attr}`;
        }
        fetchProducts(url);
      }, 1e3);
    };
    watch([barMinValue, barMaxValue], () => {
      if (priceFilterTimeout.value) {
        clearTimeout(priceFilterTimeout.value);
      }
      priceFilterTimeout.value = setTimeout(() => {
        if (route.query.attr) {
          fetchProducts(`/products/?category=${solo_category.value.id}&limit=${pageSize.value}&attr=${route.query.attr}&price_from=${barMinValue.value}&price_to=${barMaxValue.value}`);
        } else {
          fetchProducts(`/products/?category=${solo_category.value.id}&limit=${pageSize.value}&price_from=${barMinValue.value}&price_to=${barMaxValue.value}`);
        }
      }, 1e3);
    });
    const fetchProducts = async (url) => {
      try {
        const res = await useJsonPlaceholderData(url + "&ordering=" + sortFilter.value, {
          cache: false
        });
        const data = res.data;
        products.value = data.value.results;
        nextUrl.value = data.value.next;
        prevUrl.value = data.value.previous;
        totalCount.value = data.value.count;
      } catch (error) {
        console.error("Ошибка при получении данных: ", error);
      }
    };
    fetchProducts("/products/?category=" + solo_category.value.id + "&limit=" + pageSize.value);
    if (route.query.page) {
      console.log(route.query.page);
    }
    const updateProductsByPage = (page) => {
      const offset = (page - 1) * pageSize.value;
      let url = `/products/?category=${solo_category.value.id}&limit=${pageSize.value}&offset=${offset}`;
      if (route.query.attr) {
        url += `&attr=${route.query.attr}`;
      }
      fetchProducts(url);
    };
    watch(selectedAttributes, () => {
      const { path, query } = router.currentRoute.value;
      const newQuery = { ...query };
      if (selectedAttributes.value.length === 0) {
        delete newQuery.attr;
      } else {
        newQuery.attr = selectedAttributes.value.join(",");
      }
      router.replace({
        path,
        query: newQuery
      });
    });
    watch(selectFilterOfProducts, () => {
      sortFilter.value = selectFilterOfProducts.value;
      updateProductsByPage(currentPage.value);
    });
    const isSelected = (id) => {
      const queryParams = route.query.attr ? route.query.attr.split(",").map((value) => parseInt(value, 10)) : [];
      const isSelected2 = queryParams.includes(id);
      return isSelected2;
    };
    const paginationRange = computed(() => paginate(totalPages.value, currentPage.value, 2));
    function paginate(totalPages2, currentPage2, width) {
      let start = currentPage2 - width;
      let end = currentPage2 + width;
      const range = [];
      if (start > 1) {
        range.push(1);
      }
      if (start > 2) {
        range.push("...");
      }
      start = Math.max(start, 1);
      end = Math.min(end, totalPages2);
      for (let i = start; i <= end; i++) {
        range.push(i);
      }
      if (end < totalPages2 - 1) {
        range.push("...");
      }
      if (end < totalPages2) {
        range.push(totalPages2);
      }
      return range;
    }
    useSeoMeta({
      title: solo_category.value.name,
      ogTitle: solo_category.value.name
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_LazyCard = __nuxt_component_1_lazy;
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
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/shop" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Магазинчик`);
          } else {
            return [
              createTextVNode("Магазинчик")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="breadcrumb-item">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/shop/" + unref(previous_category).slug
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(previous_category).name)}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(previous_category).name), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="breadcrumb-item active" aria-current="page">${ssrInterpolate(unref(solo_category).name)}</li></ol></nav></div><section class="padding-y"><div class="container"><div class="row mb-4"><div class="col-3"><div class="accordion onmalika-accardion mb-5" id="accordionCategories"><!--[-->`);
      ssrRenderList(unref(hierarchicalCategories), (cats, index2) => {
        _push(`<div class="accordion-item"><h2 class="accordion-header"${ssrRenderAttr("id", "headingOne-" + cats.slug)}><button class="${ssrRenderClass([{ "collapsed": !isSubcategorySelected(cats) }, "accordion-button"])}" type="button" data-bs-toggle="collapse"${ssrRenderAttr("data-bs-target", "#collapseOne-" + cats.slug)} aria-expanded="true"${ssrRenderAttr("aria-controls", "collapseOne-" + cats.slug)}>${ssrInterpolate(cats.name)}</button></h2><div${ssrRenderAttr("id", "collapseOne-" + cats.slug)} class="${ssrRenderClass([{ "show": isSubcategorySelected(cats) }, "accordion-collapse collapse"])}"${ssrRenderAttr("aria-labelledby", "headingOne" + cats.slug)} data-bs-parent="#accordionCategories"><div class="accordion-body"><!--[-->`);
        ssrRenderList(cats.subcategories, (subcat) => {
          _push(`<div class="form-check"><input class="form-check-input"${ssrIncludeBooleanAttr(unref(route).params.subCategory === subcat.slug) ? " checked" : ""} type="radio" name="categoryRadio"${ssrRenderAttr("id", "category" + subcat.id)}${ssrRenderAttr("value", subcat.slug)}><label class="form-check-label"${ssrRenderAttr("for", "category" + subcat.id)}>${ssrInterpolate(subcat.name)}</label></div>`);
        });
        _push(`<!--]--></div></div></div>`);
      });
      _push(`<!--]--></div><div class="multi-range mb-5"><div class="multi-range-inputs"><input type="number"${ssrRenderAttr("value", unref(barMinValue))} class="form-control gray-conrol w-100"><input type="number"${ssrRenderAttr("value", unref(barMaxValue))} class="form-control gray-conrol w-100"></div>`);
      _push(ssrRenderComponent(unref(MultiRangeSlider), {
        min: 0,
        step: 100,
        max: 1e3,
        ruler: false,
        label: false,
        minValue: unref(barMinValue),
        maxValue: unref(barMaxValue),
        onInput: UpdateValues
      }, null, _parent));
      _push(`</div><div class="accordion onmalika-accardion mb-5" id="accordionFilters"><!--[-->`);
      ssrRenderList(unref(attrList), (atrs, index2) => {
        _push(`<div class="accordion-item"><h2 class="accordion-header"><button type="button" class="accordion-button" data-bs-toggle="collapse"${ssrRenderAttr("data-bs-target", "#collapseOne" + index2)}><i class="icon-control fa fa-chevron-down"></i> ${ssrInterpolate(atrs.attribute.name)}</button></h2><div class="accordion-collapse show"${ssrRenderAttr("id", "collapseOne" + index2)}><div class="accordion-body"><!--[-->`);
        ssrRenderList(atrs.attribute_values, (atr_val) => {
          _push(`<label class="form-check mb-2"><input class="form-check-input" type="checkbox"${ssrIncludeBooleanAttr(isSelected(atr_val.id)) ? " checked" : ""}${ssrRenderAttr("value", atr_val.id)}><span class="form-check-label">${ssrInterpolate(atr_val.value)}</span></label>`);
        });
        _push(`<!--]--></div></div></div>`);
      });
      _push(`<!--]--></div></div><div class="col-9"><div class="row justify-content-between mb-3"><div class="col-3"><div class="dropdown onmalika-dropdown"><button class="btn onmalika-dropdown-toggle dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">${ssrInterpolate(unref(selectedFilterText))} <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.2807 5.9668L8.93404 10.3135C8.4207 10.8268 7.5807 10.8268 7.06737 10.3135L2.7207 5.9668" stroke="black" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path></svg></button><ul class="dropdown-menu onmalika-dropdown-menu"><li><div class="form-check dropdown-item"><input class="form-check-input" type="radio" name="sortRadio" id="price-up"><label class="form-check-label" for="price-up"> По возрастанию цены </label></div></li><li><div class="form-check dropdown-item"><input class="form-check-input" type="radio" name="sortRadio" id="price-down"><label class="form-check-label" for="price-down"> По убыванию цены </label></div></li><li><div class="form-check dropdown-item"><input class="form-check-input" type="radio" name="sortRadio" id="ASC"><label class="form-check-label" for="ASC"> В алфавитном порядке </label></div></li><li><div class="form-check dropdown-item"><input class="form-check-input" type="radio" name="sortRadio" id="DESC"><label class="form-check-label" for="DESC"> С конца алфавитного порядка </label></div></li></ul></div></div><div class="col-auto"><div class="dropdown onmalika-dropdown"><button class="btn onmalika-dropdown-toggle dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false"> Сколько товаров показывать <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.2807 5.9668L8.93404 10.3135C8.4207 10.8268 7.5807 10.8268 7.06737 10.3135L2.7207 5.9668" stroke="black" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path></svg></button><ul class="dropdown-menu onmalika-dropdown-menu"><li><div class="form-check dropdown-item"><input class="form-check-input" type="radio" name="categoryRadio" id="price-up"><label class="form-check-label" for="price-up"> 9 </label></div></li><li><div class="form-check dropdown-item"><input class="form-check-input" type="radio" name="categoryRadio" id="price-down"><label class="form-check-label" for="price-down"> 12 </label></div></li><li><div class="form-check dropdown-item"><input class="form-check-input" type="radio" name="categoryRadio" id="ASC"><label class="form-check-label" for="ASC"> 15 </label></div></li></ul></div></div></div><div class="row row-cols-3"><!--[-->`);
      ssrRenderList(unref(products), (product) => {
        _push(`<div class="col mb-4">`);
        _push(ssrRenderComponent(_component_LazyCard, { product_info: product }, null, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div></div></div>`);
      if (unref(totalPages) > 1) {
        _push(`<nav aria-label="Page navigation example"><ul class="pagination onmalika-pagination justify-content-center"><li class="page-item"><button type="button" class="${ssrRenderClass([{ "disabled": unref(currentPage) === 1 }, "dark-cover"])}"${ssrIncludeBooleanAttr(unref(currentPage) === 1) ? " disabled" : ""}><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.9763 4.94165L2.91797 9.99998L7.9763 15.0583" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M17.0836 10H3.05859" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path></svg></button></li><!--[-->`);
        ssrRenderList(unref(paginationRange), (page) => {
          _push(`<li class="page-item">`);
          if (page === "...") {
            _push(`<div><span class="onmalika-pagination-more">...</span></div>`);
          } else {
            _push(`<button type="button" class="${ssrRenderClass([{ active: page === unref(currentPage) }, "onmalika-pagination-links"])}">${ssrInterpolate(page)}</button>`);
          }
          _push(`</li>`);
        });
        _push(`<!--]--><li class="page-item"><button type="button" class="${ssrRenderClass([{ "disabled": unref(currentPage) === unref(totalPages) }, "dark-cover"])}"${ssrIncludeBooleanAttr(unref(currentPage) === unref(totalPages)) ? " disabled" : ""}><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.0234 4.94165L17.0818 9.99998L12.0234 15.0583" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M2.91797 10H16.943" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path></svg></button></li></ul></nav>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></section></div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/shop/[category]/[subCategory]/index.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const index$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: _sfc_main$3
});
const baseurl = "https://admin.itpapa.uz";
const _sfc_main$2 = {
  __name: "CategoryCard",
  __ssrInlineRender: true,
  props: {
    category_info: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const { category_info } = props;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
        to: _ctx.$route.path + "/" + unref(category_info).slug,
        class: "card h-100 onmalika-category-card text-center"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (unref(category_info).image) {
              _push2(`<img${ssrRenderAttr("src", baseurl + unref(category_info).image.url)} class="w-100" alt="..."${_scopeId}>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<p${_scopeId}>${ssrInterpolate(unref(category_info).name)}</p>`);
          } else {
            return [
              unref(category_info).image ? (openBlock(), createBlock("img", {
                key: 0,
                src: baseurl + unref(category_info).image.url,
                class: "w-100",
                alt: "..."
              }, null, 8, ["src"])) : createCommentVNode("", true),
              createVNode("p", null, toDisplayString(unref(category_info).name), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CategoryCard.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1 = _sfc_main$2;
const _sfc_main$1 = {
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const page_slug = route.params.category;
    useRouter().options.history.state.back;
    const { data: category } = ([__temp, __restore] = withAsyncContext(() => useJsonPlaceholderData("/categories/?parent_slug=" + page_slug)), __temp = await __temp, __restore(), __temp);
    if (!category.value || !category.value) {
      throw createError({ statusCode: 404, message: "Такой категории нету" });
    }
    const { data: solo_category } = ([__temp, __restore] = withAsyncContext(() => useJsonPlaceholderData("/categories/" + page_slug)), __temp = await __temp, __restore(), __temp);
    computed(() => category.value);
    computed(() => solo_category.value);
    useSeoMeta({
      title: solo_category.value.name,
      ogTitle: solo_category.value.name
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_CategoryCard = __nuxt_component_1;
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
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/shop" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Магазинчик`);
          } else {
            return [
              createTextVNode("Магазинчик")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="breadcrumb-item active" aria-current="page">${ssrInterpolate(unref(solo_category).name)}</li></ol></nav></div><section class="padding-y"><div class="container"><div class="row row-cols-5"><!--[-->`);
      ssrRenderList(unref(category).results, (cat) => {
        _push(`<div class="col">`);
        _push(ssrRenderComponent(_component_CategoryCard, { category_info: cat }, null, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div></div></section></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/shop/[category]/index.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const index$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: _sfc_main$1
});
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { data: category } = ([__temp, __restore] = withAsyncContext(() => useJsonPlaceholderData("/categories/?parent_null=true")), __temp = await __temp, __restore(), __temp);
    useSeoMeta({
      title: "Магазинчик",
      ogTitle: "Магазинчик"
    });
    useHead({
      title: "Магазинчик",
      meta: [
        { name: "Магазинчик 1", content: "" }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_CategoryCard = __nuxt_component_1;
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
      _push(`</li><li class="breadcrumb-item active" aria-current="page">Магазинчик</li></ol></nav></div><section class="padding-y"><div class="container"><div class="row row-cols-5"><!--[-->`);
      ssrRenderList(unref(category).results, (cat) => {
        _push(`<div class="col">`);
        _push(ssrRenderComponent(_component_CategoryCard, { category_info: cat }, null, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div></div></section></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/shop/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: _sfc_main
});
export {
  _id_ as _,
  index$1 as a,
  index as b,
  index$2 as i
};
//# sourceMappingURL=chunk-pg-shop-79e05571.js.map
