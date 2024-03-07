import { c as __nuxt_component_0 } from "../server.mjs";
import { ref, withAsyncContext, mergeProps, unref, useSSRContext } from "vue";
import { h as useJsonPlaceholderData } from "./chunk-pg-brands-4e133212.js";
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import "ofetch";
import "#internal/nitro";
import "vue-router";
import "h3";
import "./chunk-pg-user-4bc47dbe.js";
import "hookable";
import "devalue";
import "klona";
import "destr";
import "vue3-otp-input";
import "defu";
import "lodash";
import "ufo";
import "unctx";
import "cookie-es";
import "ohash";
import "@vue/devtools-api";
import "unhead";
import "@unhead/shared";
const _sfc_main = {
  __name: "IndexCategoryTabs",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const getCategoryId = ref(99);
    const categories = ref([]);
    const { data: getChosenCategory } = ([__temp, __restore] = withAsyncContext(() => useJsonPlaceholderData("/categories/?parent=" + getCategoryId.value)), __temp = await __temp, __restore(), __temp);
    if (getChosenCategory && getChosenCategory.value && getChosenCategory.value.results) {
      const productsRequests = getChosenCategory.value.results.map(
        (category) => useJsonPlaceholderData(`/products/?category=${category.id}&limit=7`).then((response) => {
          category.products = response.data.value;
          return category;
        })
      );
      const categoriesWithProducts = ([__temp, __restore] = withAsyncContext(() => Promise.all(productsRequests)), __temp = await __temp, __restore(), __temp);
      categories.value = categoriesWithProducts;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_MiniCard = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "category-tablist" }, _attrs))}><div class="row"><div class="col-6"><ul class="nav nav-pills onmalika-index-categories mb-3" id="pills-tab" role="tablist"><!--[-->`);
      ssrRenderList(unref(categories), (cat, index) => {
        _push(`<li class="nav-item" role="presentation"><button class="${ssrRenderClass([{ "active": index == 0 }, "nav-link btn-success btn"])}"${ssrRenderAttr("id", `pills-category-tab${index}`)} data-bs-toggle="pill"${ssrRenderAttr("data-bs-target", `#pills-category${index}`)} type="button" role="tab"${ssrRenderAttr("aria-controls", `pills-category${index}`)} aria-selected="true">${ssrInterpolate(cat.name)}</button></li>`);
      });
      _push(`<!--]--></ul></div></div><div class="tab-content" id="pills-tabContent"><!--[-->`);
      ssrRenderList(unref(categories), (cat, index) => {
        _push(`<div class="${ssrRenderClass([{ "active show": index == 0 }, "tab-pane fade"])}"${ssrRenderAttr("id", `pills-category${index}`)} role="tabpanel"${ssrRenderAttr("aria-labelledby", `pills-category-tab${index}`)}>`);
        if (cat && cat.productsLoaded && cat.products && cat.products.length > 0) {
          _push(`<div class="grid-parent"><!--[-->`);
          ssrRenderList(cat.products, (product, number) => {
            _push(`<div class="${ssrRenderClass("grid-" + number)}">`);
            _push(ssrRenderComponent(_component_MiniCard, { product_info: product }, null, _parent));
            _push(`</div>`);
          });
          _push(`<!--]--></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/IndexCategoryTabs.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=IndexCategoryTabs-573c220f.js.map
