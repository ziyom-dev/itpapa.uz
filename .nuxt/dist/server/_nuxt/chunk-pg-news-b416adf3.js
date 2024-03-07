import { _ as _export_sfc, f as __nuxt_component_0 } from "./chunk-pg-brands-4e133212.js";
import { withCtx, createTextVNode, useSSRContext, createVNode } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
const _sfc_main$2 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
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
  _push(`</li><li class="breadcrumb-item" aria-current="page">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Новости`);
      } else {
        return [
          createTextVNode("Новости")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="breadcrumb-item active" aria-current="page">${ssrInterpolate(_ctx.$route.params.id)}</li></ol></div></section><section><div class="container"><img${ssrRenderAttr("src", "")} alt=""><h1></h1><p></p></div></section></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/news/[id].vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _id_ = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]);
const _id_$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: _id_
});
const _sfc_main$1 = {
  __name: "NewsCard",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<article${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/news/1",
        class: "img-wrap"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img class="rounded w-100" src="https://placehold.co/360x250"${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                class: "rounded w-100",
                src: "https://placehold.co/360x250"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="mt-2"><time class="text-muted small d-block mb-1" datetime="2022-02-14 00:00"><i class="fa fa-calendar-alt"></i> 25.11.2022</time>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/news/1" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h6 class="title"${_scopeId}>Success story of sellers</h6>`);
          } else {
            return [
              createVNode("h6", { class: "title" }, "Success story of sellers")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<p>When you enter into any new area of science, you almost reach</p></div></article>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/NewsCard.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = _sfc_main$1;
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0;
  const _component_NewsCard = __nuxt_component_1;
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
  _push(`</li><li class="breadcrumb-item active" aria-current="page">Новости</li></ol></div></section><section class="padding-y"><div class="container"><div class="row"><div class="col-lg-3 col-md-6 col-sm-6 col-12">`);
  _push(ssrRenderComponent(_component_NewsCard, null, null, _parent));
  _push(`</div></div></div></section></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/news/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
const index$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: index
});
export {
  _id_$1 as _,
  index$1 as i
};
//# sourceMappingURL=chunk-pg-news-b416adf3.js.map
