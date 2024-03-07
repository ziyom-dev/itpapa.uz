import { defineComponent, createVNode } from "vue";
import { j as createError } from "./chunk-pg-brands-4e133212.js";
import "hookable";
import "devalue";
import "destr";
import "klona";
import "ufo";
import "h3";
import "unctx";
import "cookie-es";
import "ohash";
import "vue/server-renderer";
import "@vue/devtools-api";
import "unhead";
import "@unhead/shared";
const components_islands = {};
const islandComponents = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: components_islands
});
const islandRenderer = /* @__PURE__ */ defineComponent({
  props: {
    context: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const component = islandComponents[props.context.name];
    if (!component) {
      throw createError({
        statusCode: 404,
        statusMessage: `Island component not found: ${props.context.name}`
      });
    }
    return () => createVNode(component || "span", { ...props.context.props, "nuxt-ssr-component-uid": "" });
  }
});
export {
  islandRenderer as default
};
//# sourceMappingURL=island-renderer-38c1f445.js.map
