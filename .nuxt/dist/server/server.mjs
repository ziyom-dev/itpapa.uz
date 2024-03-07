var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t;
import { nextTick, shallowRef, shallowReactive, reactive, isReadonly, isRef, isShallow, isReactive, toRaw, h, defineComponent, inject, computed, unref, ref, Suspense, mergeProps, Transition, provide, withCtx, createVNode, useSSRContext, openBlock, createBlock, toDisplayString, createCommentVNode, withAsyncContext, onUnmounted, createTextVNode, watch, onErrorCaptured, onServerPrefetch, resolveDynamicComponent, defineAsyncComponent, createApp } from "vue";
import { $fetch } from "ofetch";
import { useRuntimeConfig } from "#internal/nitro";
import { a as useRouter, m as useNuxtApp, o as appPageTransition, l as defineNuxtRouteMiddleware, p as defineNuxtPlugin, q as useRuntimeConfig$1, r as useError, s as useState, t as showError, n as navigateTo, v as createPinia, w as setActivePinia, x as definePayloadReducer, y as isNuxtError, c as useAuthStore, g as useCookie, h as useJsonPlaceholderData, P as PageRouteSymbol, u as useRoute, z as appLayoutTransition, L as LayoutMetaSymbol, A as appKeepalive, _ as _export_sfc, b as useCartStore, f as __nuxt_component_0$4, d as useCurrencyStore, B as createNuxtApp, C as applyPlugins } from "./_nuxt/chunk-pg-brands-4e133212.js";
import { createMemoryHistory, createRouter, START_LOCATION, useRoute as useRoute$1, RouterView } from "vue-router";
import { createError } from "h3";
import { _ as __nuxt_page_meta, a as __nuxt_page_meta$1, b as __nuxt_page_meta$2, c as __nuxt_page_meta$3, d as __nuxt_page_meta$4 } from "./_nuxt/chunk-pg-user-4bc47dbe.js";
import "hookable";
import "destr";
import "devalue";
import "klona";
import { ssrRenderComponent, ssrRenderAttrs, ssrInterpolate, ssrRenderStyle, ssrRenderList, ssrRenderAttr, ssrRenderClass, ssrIncludeBooleanAttr, ssrRenderSuspense, ssrRenderVNode } from "vue/server-renderer";
import { defu } from "defu";
import pkg from "lodash";
import "ufo";
import "unctx";
import "cookie-es";
import "ohash";
import "@vue/devtools-api";
import "unhead";
import "@unhead/shared";
import "vue3-otp-input";
const appConfig = useRuntimeConfig().app;
const baseURL = () => appConfig.baseURL;
function createContext(opts = {}) {
  let currentInstance;
  let isSingleton = false;
  const checkConflict = (instance) => {
    if (currentInstance && currentInstance !== instance) {
      throw new Error("Context conflict");
    }
  };
  let als;
  if (opts.asyncContext) {
    const _AsyncLocalStorage = opts.AsyncLocalStorage || globalThis.AsyncLocalStorage;
    if (_AsyncLocalStorage) {
      als = new _AsyncLocalStorage();
    } else {
      console.warn("[unctx] `AsyncLocalStorage` is not provided.");
    }
  }
  const _getCurrentInstance = () => {
    if (als && currentInstance === void 0) {
      const instance = als.getStore();
      if (instance !== void 0) {
        return instance;
      }
    }
    return currentInstance;
  };
  return {
    use: () => {
      const _instance = _getCurrentInstance();
      if (_instance === void 0) {
        throw new Error("Context is not available");
      }
      return _instance;
    },
    tryUse: () => {
      return _getCurrentInstance();
    },
    set: (instance, replace) => {
      if (!replace) {
        checkConflict(instance);
      }
      currentInstance = instance;
      isSingleton = true;
    },
    unset: () => {
      currentInstance = void 0;
      isSingleton = false;
    },
    call: (instance, callback) => {
      checkConflict(instance);
      currentInstance = instance;
      try {
        return als ? als.run(instance, callback) : callback();
      } finally {
        if (!isSingleton) {
          currentInstance = void 0;
        }
      }
    },
    async callAsync(instance, callback) {
      currentInstance = instance;
      const onRestore = () => {
        currentInstance = instance;
      };
      const onLeave = () => currentInstance === instance ? onRestore : void 0;
      asyncHandlers.add(onLeave);
      try {
        const r = als ? als.run(instance, callback) : callback();
        if (!isSingleton) {
          currentInstance = void 0;
        }
        return await r;
      } finally {
        asyncHandlers.delete(onLeave);
      }
    }
  };
}
function createNamespace(defaultOpts = {}) {
  const contexts = {};
  return {
    get(key, opts = {}) {
      if (!contexts[key]) {
        contexts[key] = createContext({ ...defaultOpts, ...opts });
      }
      contexts[key];
      return contexts[key];
    }
  };
}
const _globalThis = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof global !== "undefined" ? global : {};
const globalKey = "__unctx__";
_globalThis[globalKey] || (_globalThis[globalKey] = createNamespace());
const asyncHandlersKey = "__unctx_async_handlers__";
const asyncHandlers = _globalThis[asyncHandlersKey] || (_globalThis[asyncHandlersKey] = /* @__PURE__ */ new Set());
function executeAsync(function_) {
  const restores = [];
  for (const leaveHandler of asyncHandlers) {
    const restore2 = leaveHandler();
    if (restore2) {
      restores.push(restore2);
    }
  }
  const restore = () => {
    for (const restore2 of restores) {
      restore2();
    }
  };
  let awaitable = function_();
  if (awaitable && typeof awaitable === "object" && "catch" in awaitable) {
    awaitable = awaitable.catch((error) => {
      restore();
      throw error;
    });
  }
  return [awaitable, restore];
}
const _routes = [
  {
    name: "about",
    path: "/about",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import("./_nuxt/chunk-pg-misc-d48d71ba.js").then(function(n) {
      return n.a;
    }).then((m) => m.default || m)
  },
  {
    name: "brands-slug",
    path: "/brands/:slug()",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import("./_nuxt/chunk-pg-brands-4e133212.js").then(function(n) {
      return n.E;
    }).then((m) => m.default || m)
  },
  {
    name: "brands",
    path: "/brands",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import("./_nuxt/chunk-pg-brands-4e133212.js").then(function(n) {
      return n.F;
    }).then((m) => m.default || m)
  },
  {
    name: "cart",
    path: "/cart",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import("./_nuxt/chunk-pg-misc-d48d71ba.js").then(function(n) {
      return n.c;
    }).then((m) => m.default || m)
  },
  {
    name: "checkout",
    path: "/checkout",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import("./_nuxt/chunk-pg-misc-d48d71ba.js").then(function(n) {
      return n.b;
    }).then((m) => m.default || m)
  },
  {
    name: "contacts",
    path: "/contacts",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import("./_nuxt/chunk-pg-misc-d48d71ba.js").then(function(n) {
      return n.d;
    }).then((m) => m.default || m)
  },
  {
    name: "index",
    path: "/",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import("./_nuxt/chunk-pg-misc-d48d71ba.js").then(function(n) {
      return n.i;
    }).then((m) => m.default || m)
  },
  {
    name: "news-id",
    path: "/news/:id()",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import("./_nuxt/chunk-pg-news-b416adf3.js").then(function(n) {
      return n._;
    }).then((m) => m.default || m)
  },
  {
    name: "news",
    path: "/news",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import("./_nuxt/chunk-pg-news-b416adf3.js").then(function(n) {
      return n.i;
    }).then((m) => m.default || m)
  },
  {
    name: "search",
    path: "/search",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import("./_nuxt/chunk-pg-misc-d48d71ba.js").then(function(n) {
      return n.s;
    }).then((m) => m.default || m)
  },
  {
    name: "shop-category-subCategory-id",
    path: "/shop/:category()/:subCategory()/:id()",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import("./_nuxt/chunk-pg-shop-79e05571.js").then(function(n) {
      return n._;
    }).then((m) => m.default || m)
  },
  {
    name: "shop-category-subCategory",
    path: "/shop/:category()/:subCategory()",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import("./_nuxt/chunk-pg-shop-79e05571.js").then(function(n) {
      return n.i;
    }).then((m) => m.default || m)
  },
  {
    name: "shop-category",
    path: "/shop/:category()",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import("./_nuxt/chunk-pg-shop-79e05571.js").then(function(n) {
      return n.a;
    }).then((m) => m.default || m)
  },
  {
    name: "shop",
    path: "/shop",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import("./_nuxt/chunk-pg-shop-79e05571.js").then(function(n) {
      return n.b;
    }).then((m) => m.default || m)
  },
  {
    name: "success",
    path: "/success",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import("./_nuxt/chunk-pg-misc-d48d71ba.js").then(function(n) {
      return n.e;
    }).then((m) => m.default || m)
  },
  {
    name: ((_a = __nuxt_page_meta) == null ? void 0 : _a.name) ?? "user-favorite",
    path: ((_b = __nuxt_page_meta) == null ? void 0 : _b.path) ?? "/user/favorite",
    meta: __nuxt_page_meta || {},
    alias: ((_c = __nuxt_page_meta) == null ? void 0 : _c.alias) || [],
    redirect: ((_d = __nuxt_page_meta) == null ? void 0 : _d.redirect) || void 0,
    component: () => import("./_nuxt/chunk-pg-user-4bc47dbe.js").then(function(n) {
      return n.f;
    }).then((m) => m.default || m)
  },
  {
    name: ((_e = __nuxt_page_meta$1) == null ? void 0 : _e.name) ?? "user",
    path: ((_f = __nuxt_page_meta$1) == null ? void 0 : _f.path) ?? "/user",
    meta: __nuxt_page_meta$1 || {},
    alias: ((_g = __nuxt_page_meta$1) == null ? void 0 : _g.alias) || [],
    redirect: ((_h = __nuxt_page_meta$1) == null ? void 0 : _h.redirect) || void 0,
    component: () => import("./_nuxt/chunk-pg-user-4bc47dbe.js").then(function(n) {
      return n.i;
    }).then((m) => m.default || m)
  },
  {
    name: "user-login",
    path: "/user/login",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import("./_nuxt/chunk-pg-user-4bc47dbe.js").then(function(n) {
      return n.l;
    }).then((m) => m.default || m)
  },
  {
    name: ((_i = __nuxt_page_meta$2) == null ? void 0 : _i.name) ?? "user-orders-id",
    path: ((_j = __nuxt_page_meta$2) == null ? void 0 : _j.path) ?? "/user/orders/:id()",
    meta: __nuxt_page_meta$2 || {},
    alias: ((_k = __nuxt_page_meta$2) == null ? void 0 : _k.alias) || [],
    redirect: ((_l = __nuxt_page_meta$2) == null ? void 0 : _l.redirect) || void 0,
    component: () => import("./_nuxt/chunk-pg-user-4bc47dbe.js").then(function(n) {
      return n.e;
    }).then((m) => m.default || m)
  },
  {
    name: ((_m = __nuxt_page_meta$3) == null ? void 0 : _m.name) ?? "user-orders",
    path: ((_n = __nuxt_page_meta$3) == null ? void 0 : _n.path) ?? "/user/orders",
    meta: __nuxt_page_meta$3 || {},
    alias: ((_o = __nuxt_page_meta$3) == null ? void 0 : _o.alias) || [],
    redirect: ((_p = __nuxt_page_meta$3) == null ? void 0 : _p.redirect) || void 0,
    component: () => import("./_nuxt/chunk-pg-user-4bc47dbe.js").then(function(n) {
      return n.g;
    }).then((m) => m.default || m)
  },
  {
    name: ((_q = __nuxt_page_meta$4) == null ? void 0 : _q.name) ?? "user-settings",
    path: ((_r = __nuxt_page_meta$4) == null ? void 0 : _r.path) ?? "/user/settings",
    meta: __nuxt_page_meta$4 || {},
    alias: ((_s = __nuxt_page_meta$4) == null ? void 0 : _s.alias) || [],
    redirect: ((_t = __nuxt_page_meta$4) == null ? void 0 : _t.redirect) || void 0,
    component: () => import("./_nuxt/chunk-pg-user-4bc47dbe.js").then(function(n) {
      return n.s;
    }).then((m) => m.default || m)
  }
];
const routerOptions0 = {
  scrollBehavior(to, from, savedPosition) {
    var _a2;
    const nuxtApp = useNuxtApp();
    const behavior = ((_a2 = useRouter().options) == null ? void 0 : _a2.scrollBehaviorType) ?? "auto";
    let position = savedPosition || void 0;
    const routeAllowsScrollToTop = typeof to.meta.scrollToTop === "function" ? to.meta.scrollToTop(to, from) : to.meta.scrollToTop;
    if (!position && from && to && routeAllowsScrollToTop !== false && _isDifferentRoute(from, to)) {
      position = { left: 0, top: 0 };
    }
    if (to.path === from.path) {
      if (from.hash && !to.hash) {
        return { left: 0, top: 0 };
      }
      if (to.hash) {
        return { el: to.hash, top: _getHashElementScrollMarginTop(to.hash), behavior };
      }
    }
    const hasTransition = (route) => !!(route.meta.pageTransition ?? appPageTransition);
    const hookToWait = hasTransition(from) && hasTransition(to) ? "page:transition:finish" : "page:finish";
    return new Promise((resolve) => {
      nuxtApp.hooks.hookOnce(hookToWait, async () => {
        await nextTick();
        if (to.hash) {
          position = { el: to.hash, top: _getHashElementScrollMarginTop(to.hash), behavior };
        }
        resolve(position);
      });
    });
  }
};
function _getHashElementScrollMarginTop(selector) {
  try {
    const elem = document.querySelector(selector);
    if (elem) {
      return parseFloat(getComputedStyle(elem).scrollMarginTop);
    }
  } catch {
  }
  return 0;
}
function _isDifferentRoute(from, to) {
  const samePageComponent = to.matched.every((comp, index) => {
    var _a2, _b2, _c2;
    return ((_a2 = comp.components) == null ? void 0 : _a2.default) === ((_c2 = (_b2 = from.matched[index]) == null ? void 0 : _b2.components) == null ? void 0 : _c2.default);
  });
  if (!samePageComponent) {
    return true;
  }
  if (samePageComponent && JSON.stringify(from.params) !== JSON.stringify(to.params)) {
    return true;
  }
  return false;
}
const configRouterOptions = {};
const routerOptions = {
  ...configRouterOptions,
  ...routerOptions0
};
const validate = /* @__PURE__ */ defineNuxtRouteMiddleware(async (to) => {
  var _a2;
  let __temp, __restore;
  if (!((_a2 = to.meta) == null ? void 0 : _a2.validate)) {
    return;
  }
  useRouter();
  const result = ([__temp, __restore] = executeAsync(() => Promise.resolve(to.meta.validate(to))), __temp = await __temp, __restore(), __temp);
  if (result === true) {
    return;
  }
  {
    return result;
  }
});
const globalMiddleware = [
  validate
];
const namedMiddleware = {
  auth: () => import("./_nuxt/auth-7f7bf086.js")
};
const plugin$1 = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:router",
  enforce: "pre",
  async setup(nuxtApp) {
    var _a2, _b2;
    let __temp, __restore;
    let routerBase = useRuntimeConfig$1().app.baseURL;
    if (routerOptions.hashMode && !routerBase.includes("#")) {
      routerBase += "#";
    }
    const history = ((_a2 = routerOptions.history) == null ? void 0 : _a2.call(routerOptions, routerBase)) ?? createMemoryHistory(routerBase);
    const routes = ((_b2 = routerOptions.routes) == null ? void 0 : _b2.call(routerOptions, _routes)) ?? _routes;
    let startPosition;
    const initialURL = nuxtApp.ssrContext.url;
    const router = createRouter({
      ...routerOptions,
      scrollBehavior: (to, from, savedPosition) => {
        var _a3;
        if (from === START_LOCATION) {
          startPosition = savedPosition;
          return;
        }
        router.options.scrollBehavior = routerOptions.scrollBehavior;
        return (_a3 = routerOptions.scrollBehavior) == null ? void 0 : _a3.call(routerOptions, to, START_LOCATION, startPosition || savedPosition);
      },
      history,
      routes
    });
    nuxtApp.vueApp.use(router);
    const previousRoute = shallowRef(router.currentRoute.value);
    router.afterEach((_to, from) => {
      previousRoute.value = from;
    });
    Object.defineProperty(nuxtApp.vueApp.config.globalProperties, "previousRoute", {
      get: () => previousRoute.value
    });
    const _route = shallowRef(router.resolve(initialURL));
    const syncCurrentRoute = () => {
      _route.value = router.currentRoute.value;
    };
    nuxtApp.hook("page:finish", syncCurrentRoute);
    router.afterEach((to, from) => {
      var _a3, _b3, _c2, _d2;
      if (((_b3 = (_a3 = to.matched[0]) == null ? void 0 : _a3.components) == null ? void 0 : _b3.default) === ((_d2 = (_c2 = from.matched[0]) == null ? void 0 : _c2.components) == null ? void 0 : _d2.default)) {
        syncCurrentRoute();
      }
    });
    const route = {};
    for (const key in _route.value) {
      Object.defineProperty(route, key, {
        get: () => _route.value[key]
      });
    }
    nuxtApp._route = shallowReactive(route);
    nuxtApp._middleware = nuxtApp._middleware || {
      global: [],
      named: {}
    };
    useError();
    try {
      if (true) {
        ;
        [__temp, __restore] = executeAsync(() => router.push(initialURL)), await __temp, __restore();
        ;
      }
      ;
      [__temp, __restore] = executeAsync(() => router.isReady()), await __temp, __restore();
      ;
    } catch (error2) {
      [__temp, __restore] = executeAsync(() => nuxtApp.runWithContext(() => showError(error2))), await __temp, __restore();
    }
    const initialLayout = useState("_layout");
    router.beforeEach(async (to, from) => {
      var _a3, _b3;
      to.meta = reactive(to.meta);
      if (nuxtApp.isHydrating && initialLayout.value && !isReadonly(to.meta.layout)) {
        to.meta.layout = initialLayout.value;
      }
      nuxtApp._processingMiddleware = true;
      if (!((_a3 = nuxtApp.ssrContext) == null ? void 0 : _a3.islandContext)) {
        const middlewareEntries = /* @__PURE__ */ new Set([...globalMiddleware, ...nuxtApp._middleware.global]);
        for (const component of to.matched) {
          const componentMiddleware = component.meta.middleware;
          if (!componentMiddleware) {
            continue;
          }
          if (Array.isArray(componentMiddleware)) {
            for (const entry2 of componentMiddleware) {
              middlewareEntries.add(entry2);
            }
          } else {
            middlewareEntries.add(componentMiddleware);
          }
        }
        for (const entry2 of middlewareEntries) {
          const middleware = typeof entry2 === "string" ? nuxtApp._middleware.named[entry2] || await ((_b3 = namedMiddleware[entry2]) == null ? void 0 : _b3.call(namedMiddleware).then((r) => r.default || r)) : entry2;
          if (!middleware) {
            throw new Error(`Unknown route middleware: '${entry2}'.`);
          }
          const result = await nuxtApp.runWithContext(() => middleware(to, from));
          {
            if (result === false || result instanceof Error) {
              const error2 = result || createError({
                statusCode: 404,
                statusMessage: `Page Not Found: ${initialURL}`
              });
              await nuxtApp.runWithContext(() => showError(error2));
              return false;
            }
          }
          if (result || result === false) {
            return result;
          }
        }
      }
    });
    router.onError(() => {
      delete nuxtApp._processingMiddleware;
    });
    router.afterEach(async (to, _from, failure) => {
      var _a3;
      delete nuxtApp._processingMiddleware;
      if ((failure == null ? void 0 : failure.type) === 4) {
        return;
      }
      if (to.matched.length === 0 && !((_a3 = nuxtApp.ssrContext) == null ? void 0 : _a3.islandContext)) {
        await nuxtApp.runWithContext(() => showError(createError({
          statusCode: 404,
          fatal: false,
          statusMessage: `Page not found: ${to.fullPath}`
        })));
      } else if (to.redirectedFrom && to.fullPath !== initialURL) {
        await nuxtApp.runWithContext(() => navigateTo(to.fullPath || "/"));
      }
    });
    nuxtApp.hooks.hookOnce("app:created", async () => {
      try {
        await router.replace({
          ...router.resolve(initialURL),
          name: void 0,
          // #4920, #4982
          force: true
        });
        router.options.scrollBehavior = routerOptions.scrollBehavior;
      } catch (error2) {
        await nuxtApp.runWithContext(() => showError(error2));
      }
    });
    return { provide: { router } };
  }
});
const plugin = /* @__PURE__ */ defineNuxtPlugin((nuxtApp) => {
  const pinia = createPinia();
  nuxtApp.vueApp.use(pinia);
  setActivePinia(pinia);
  {
    nuxtApp.payload.pinia = pinia.state.value;
  }
  return {
    provide: {
      pinia
    }
  };
});
const reducers = {
  NuxtError: (data) => isNuxtError(data) && data.toJSON(),
  EmptyShallowRef: (data) => isRef(data) && isShallow(data) && !data.value && (typeof data.value === "bigint" ? "0n" : JSON.stringify(data.value) || "_"),
  EmptyRef: (data) => isRef(data) && !data.value && (typeof data.value === "bigint" ? "0n" : JSON.stringify(data.value) || "_"),
  ShallowRef: (data) => isRef(data) && isShallow(data) && data.value,
  ShallowReactive: (data) => isReactive(data) && isShallow(data) && toRaw(data),
  Ref: (data) => isRef(data) && data.value,
  Reactive: (data) => isReactive(data) && toRaw(data)
};
const revive_payload_server_eJ33V7gbc6 = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:revive-payload:server",
  setup() {
    for (const reducer in reducers) {
      definePayloadReducer(reducer, reducers[reducer]);
    }
  }
});
const components_plugin_KR1HBZs4kY = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:global-components"
});
const unhead_KgADcZ0jPj = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:head",
  setup(nuxtApp) {
    const head = nuxtApp.ssrContext.head;
    nuxtApp.vueApp.use(head);
  }
});
const check_bZQzmrCirX = /* @__PURE__ */ defineNuxtPlugin(async (nuxtApp) => {
  let __temp, __restore;
  const authStore = useAuthStore();
  const token_access = useCookie("token_access");
  const token_refresh = useCookie("token_refresh");
  if (token_access.value) {
    try {
      const getUser = ([__temp, __restore] = executeAsync(() => useJsonPlaceholderData("/user/", {
        headers: {
          Authorization: `Bearer ${token_access.value}`
        }
      })), __temp = await __temp, __restore(), __temp);
      if (getUser.error.value && getUser.error.value.statusCode != 200) {
        const getNewAccess = ([__temp, __restore] = executeAsync(() => useJsonPlaceholderData("/token/refresh/", {
          method: "POST",
          body: {
            refresh: token_refresh.value
          }
        })), __temp = await __temp, __restore(), __temp);
        token_access.value = getNewAccess.data.value.access;
        if (getNewAccess.status.value === "success") {
          const getNewData = ([__temp, __restore] = executeAsync(() => useJsonPlaceholderData("/user/", {
            headers: {
              Authorization: `Bearer ${token_access.value}`
            }
          })), __temp = await __temp, __restore(), __temp);
          authStore.login(getNewData.data.value);
        } else {
          authStore.isAuthenticated = false;
          authStore.logout();
        }
      } else {
        authStore.login(getUser.data.value);
      }
    } catch (error) {
      if (error instanceof TypeError && error.message.includes("access")) {
        token_access.value = void 0;
        token_refresh.value = void 0;
      }
      authStore.logout();
      authStore.isAuthenticated = false;
    }
  } else {
    authStore.isAuthenticated = false;
    authStore.logout();
  }
});
const route_guard_q2LZ00fWG1 = /* @__PURE__ */ defineNuxtPlugin((nuxtApp) => {
  const authStore = useAuthStore();
  const token_access = useCookie("token_access");
  const router = useRouter();
  router.beforeEach((to, from, next) => {
    if (!token_access.value) {
      authStore.logout();
      if (to.path === "/user") {
        next("/user/login");
      } else {
        next();
      }
    } else {
      next();
    }
  });
});
const plugins = [
  plugin$1,
  plugin,
  revive_payload_server_eJ33V7gbc6,
  components_plugin_KR1HBZs4kY,
  unhead_KgADcZ0jPj,
  check_bZQzmrCirX,
  route_guard_q2LZ00fWG1
];
const _wrapIf = (component, props, slots) => {
  props = props === true ? {} : props;
  return { default: () => {
    var _a2;
    return props ? h(component, props, slots) : (_a2 = slots.default) == null ? void 0 : _a2.call(slots);
  } };
};
const layouts = {
  default: () => import("./_nuxt/default-989b3800.js").then((m) => m.default || m)
};
const LayoutLoader = /* @__PURE__ */ defineComponent({
  name: "LayoutLoader",
  inheritAttrs: false,
  props: {
    name: String,
    layoutProps: Object
  },
  async setup(props, context) {
    const LayoutComponent = await layouts[props.name]().then((r) => r.default || r);
    return () => h(LayoutComponent, props.layoutProps, context.slots);
  }
});
const __nuxt_component_0$3 = /* @__PURE__ */ defineComponent({
  name: "NuxtLayout",
  inheritAttrs: false,
  props: {
    name: {
      type: [String, Boolean, Object],
      default: null
    }
  },
  setup(props, context) {
    const nuxtApp = useNuxtApp();
    const injectedRoute = inject(PageRouteSymbol);
    const route = injectedRoute === useRoute() ? useRoute$1() : injectedRoute;
    const layout = computed(() => unref(props.name) ?? route.meta.layout ?? "default");
    const layoutRef = ref();
    context.expose({ layoutRef });
    const done = nuxtApp.deferHydration();
    return () => {
      const hasLayout = layout.value && layout.value in layouts;
      const transitionProps = route.meta.layoutTransition ?? appLayoutTransition;
      return _wrapIf(Transition, hasLayout && transitionProps, {
        default: () => h(Suspense, { suspensible: true, onResolve: () => {
          nextTick(done);
        } }, {
          default: () => h(
            // @ts-expect-error seems to be an issue in vue types
            LayoutProvider,
            {
              layoutProps: mergeProps(context.attrs, { ref: layoutRef }),
              key: layout.value,
              name: layout.value,
              shouldProvide: !props.name,
              hasTransition: !!transitionProps
            },
            context.slots
          )
        })
      }).default();
    };
  }
});
const LayoutProvider = /* @__PURE__ */ defineComponent({
  name: "NuxtLayoutProvider",
  inheritAttrs: false,
  props: {
    name: {
      type: [String, Boolean]
    },
    layoutProps: {
      type: Object
    },
    hasTransition: {
      type: Boolean
    },
    shouldProvide: {
      type: Boolean
    }
  },
  setup(props, context) {
    const name = props.name;
    if (props.shouldProvide) {
      provide(LayoutMetaSymbol, {
        isCurrent: (route) => name === (route.meta.layout ?? "default")
      });
    }
    return () => {
      var _a2, _b2;
      if (!name || typeof name === "string" && !(name in layouts)) {
        return (_b2 = (_a2 = context.slots).default) == null ? void 0 : _b2.call(_a2);
      }
      return h(
        // @ts-expect-error seems to be an issue in vue types
        LayoutLoader,
        { key: name, layoutProps: props.layoutProps, name },
        context.slots
      );
    };
  }
});
const interpolatePath = (route, match) => {
  return match.path.replace(/(:\w+)\([^)]+\)/g, "$1").replace(/(:\w+)[?+*]/g, "$1").replace(/:\w+/g, (r) => {
    var _a2;
    return ((_a2 = route.params[r.slice(1)]) == null ? void 0 : _a2.toString()) || "";
  });
};
const generateRouteKey = (routeProps, override) => {
  const matchedRoute = routeProps.route.matched.find((m) => {
    var _a2;
    return ((_a2 = m.components) == null ? void 0 : _a2.default) === routeProps.Component.type;
  });
  const source = override ?? (matchedRoute == null ? void 0 : matchedRoute.meta.key) ?? (matchedRoute && interpolatePath(routeProps.route, matchedRoute));
  return typeof source === "function" ? source(routeProps.route) : source;
};
const wrapInKeepAlive = (props, children) => {
  return { default: () => children };
};
const RouteProvider = /* @__PURE__ */ defineComponent({
  name: "RouteProvider",
  props: {
    vnode: {
      type: Object,
      required: true
    },
    route: {
      type: Object,
      required: true
    },
    vnodeRef: Object,
    renderKey: String,
    trackRootNodes: Boolean
  },
  setup(props) {
    const previousKey = props.renderKey;
    const previousRoute = props.route;
    const route = {};
    for (const key in props.route) {
      Object.defineProperty(route, key, {
        get: () => previousKey === props.renderKey ? props.route[key] : previousRoute[key]
      });
    }
    provide(PageRouteSymbol, shallowReactive(route));
    return () => {
      return h(props.vnode, { ref: props.vnodeRef });
    };
  }
});
const __nuxt_component_2 = /* @__PURE__ */ defineComponent({
  name: "NuxtPage",
  inheritAttrs: false,
  props: {
    name: {
      type: String
    },
    transition: {
      type: [Boolean, Object],
      default: void 0
    },
    keepalive: {
      type: [Boolean, Object],
      default: void 0
    },
    route: {
      type: Object
    },
    pageKey: {
      type: [Function, String],
      default: null
    }
  },
  setup(props, { attrs, expose }) {
    const nuxtApp = useNuxtApp();
    const pageRef = ref();
    inject(PageRouteSymbol, null);
    expose({ pageRef });
    inject(LayoutMetaSymbol, null);
    let vnode;
    const done = nuxtApp.deferHydration();
    return () => {
      return h(RouterView, { name: props.name, route: props.route, ...attrs }, {
        default: (routeProps) => {
          if (!routeProps.Component) {
            return;
          }
          const key = generateRouteKey(routeProps, props.pageKey);
          const hasTransition = !!(props.transition ?? routeProps.route.meta.pageTransition ?? appPageTransition);
          const transitionProps = hasTransition && _mergeTransitionProps([
            props.transition,
            routeProps.route.meta.pageTransition,
            appPageTransition,
            { onAfterLeave: () => {
              nuxtApp.callHook("page:transition:finish", routeProps.Component);
            } }
          ].filter(Boolean));
          vnode = _wrapIf(
            Transition,
            hasTransition && transitionProps,
            wrapInKeepAlive(
              props.keepalive ?? routeProps.route.meta.keepalive ?? appKeepalive,
              h(Suspense, {
                suspensible: true,
                onPending: () => nuxtApp.callHook("page:start", routeProps.Component),
                onResolve: () => {
                  nextTick(() => nuxtApp.callHook("page:finish", routeProps.Component).finally(done));
                }
              }, {
                // @ts-expect-error seems to be an issue in vue types
                default: () => h(RouteProvider, {
                  key,
                  vnode: routeProps.Component,
                  route: routeProps.route,
                  renderKey: key,
                  trackRootNodes: hasTransition,
                  vnodeRef: pageRef
                })
              })
            )
          ).default();
          return vnode;
        }
      });
    };
  }
});
function _toArray(val) {
  return Array.isArray(val) ? val : val ? [val] : [];
}
function _mergeTransitionProps(routeProps) {
  const _props = routeProps.map((prop) => ({
    ...prop,
    onAfterLeave: _toArray(prop.onAfterLeave)
  }));
  return defu(..._props);
}
const _sfc_main$7 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLayout = __nuxt_component_0$3;
  const _component_NuxtPage = __nuxt_component_2;
  _push(ssrRenderComponent(_component_NuxtLayout, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_NuxtPage, null, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_NuxtPage)
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/nuxt/dist/pages/runtime/app.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const AppComponent = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$6 = {
  __name: "HeaderUser",
  __ssrInlineRender: true,
  setup(__props) {
    const router = useRouter();
    const CartStore = useCartStore();
    useAuthStore();
    useCookie("token_access");
    useCookie("token_refresh");
    const totalUniqueItemsInCart = computed(() => CartStore.items.length);
    const goToFavorites = async (event) => {
      await router.push("/user/favorite");
      location.reload();
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$4;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "onmalika-header-bottom-user-navigation" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "onmalika-header-bottom-user-links",
        to: "/user"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"${_scopeId}></path><path d="M20.5901 22C20.5901 18.13 16.7402 15 12.0002 15C7.26015 15 3.41016 18.13 3.41016 22" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"${_scopeId}></path></svg>`);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
              }, [
                createVNode("path", {
                  d: "M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z",
                  stroke: "white",
                  "stroke-width": "1.5",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round"
                }),
                createVNode("path", {
                  d: "M20.5901 22C20.5901 18.13 16.7402 15 12.0002 15C7.26015 15 3.41016 18.13 3.41016 22",
                  stroke: "white",
                  "stroke-width": "1.5",
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
        to: "#",
        class: "position-relative onmalika-header-bottom-user-links",
        "data-bs-toggle": "modal",
        "data-bs-target": "#cardModal"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path d="M2 2H3.74001C4.82001 2 5.67 2.93 5.58 4L4.75 13.96C4.61 15.59 5.89999 16.99 7.53999 16.99H18.19C19.63 16.99 20.89 15.81 21 14.38L21.54 6.88C21.66 5.22 20.4 3.87 18.73 3.87H5.82001" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"${_scopeId}></path><path d="M16.25 22C16.9404 22 17.5 21.4404 17.5 20.75C17.5 20.0596 16.9404 19.5 16.25 19.5C15.5596 19.5 15 20.0596 15 20.75C15 21.4404 15.5596 22 16.25 22Z" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"${_scopeId}></path><path d="M8.25 22C8.94036 22 9.5 21.4404 9.5 20.75C9.5 20.0596 8.94036 19.5 8.25 19.5C7.55964 19.5 7 20.0596 7 20.75C7 21.4404 7.55964 22 8.25 22Z" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"${_scopeId}></path><path d="M9 8H21" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"${_scopeId}></path></svg>`);
            if (unref(totalUniqueItemsInCart) > 0) {
              _push2(`<sub${_scopeId}>${ssrInterpolate(unref(totalUniqueItemsInCart))}</sub>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              (openBlock(), createBlock("svg", {
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
              }, [
                createVNode("path", {
                  d: "M2 2H3.74001C4.82001 2 5.67 2.93 5.58 4L4.75 13.96C4.61 15.59 5.89999 16.99 7.53999 16.99H18.19C19.63 16.99 20.89 15.81 21 14.38L21.54 6.88C21.66 5.22 20.4 3.87 18.73 3.87H5.82001",
                  stroke: "white",
                  "stroke-width": "1.5",
                  "stroke-miterlimit": "10",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round"
                }),
                createVNode("path", {
                  d: "M16.25 22C16.9404 22 17.5 21.4404 17.5 20.75C17.5 20.0596 16.9404 19.5 16.25 19.5C15.5596 19.5 15 20.0596 15 20.75C15 21.4404 15.5596 22 16.25 22Z",
                  stroke: "white",
                  "stroke-width": "1.5",
                  "stroke-miterlimit": "10",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round"
                }),
                createVNode("path", {
                  d: "M8.25 22C8.94036 22 9.5 21.4404 9.5 20.75C9.5 20.0596 8.94036 19.5 8.25 19.5C7.55964 19.5 7 20.0596 7 20.75C7 21.4404 7.55964 22 8.25 22Z",
                  stroke: "white",
                  "stroke-width": "1.5",
                  "stroke-miterlimit": "10",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round"
                }),
                createVNode("path", {
                  d: "M9 8H21",
                  stroke: "white",
                  "stroke-width": "1.5",
                  "stroke-miterlimit": "10",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round"
                })
              ])),
              unref(totalUniqueItemsInCart) > 0 ? (openBlock(), createBlock("sub", { key: 0 }, toDisplayString(unref(totalUniqueItemsInCart)), 1)) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "onmalika-header-bottom-user-links",
        onClick: goToFavorites,
        to: "/user/favorite"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path d="M12.62 20.81C12.28 20.93 11.72 20.93 11.38 20.81C8.48 19.82 2 15.69 2 8.69C2 5.6 4.49 3.1 7.56 3.1C9.38 3.1 10.99 3.98 12 5.34C13.01 3.98 14.63 3.1 16.44 3.1C19.51 3.1 22 5.6 22 8.69C22 15.69 15.52 19.82 12.62 20.81Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"${_scopeId}></path></svg>`);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
              }, [
                createVNode("path", {
                  d: "M12.62 20.81C12.28 20.93 11.72 20.93 11.38 20.81C8.48 19.82 2 15.69 2 8.69C2 5.6 4.49 3.1 7.56 3.1C9.38 3.1 10.99 3.98 12 5.34C13.01 3.98 14.63 3.1 16.44 3.1C19.51 3.1 22 5.6 22 8.69C22 15.69 15.52 19.82 12.62 20.81Z",
                  stroke: "white",
                  "stroke-width": "1.5",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round"
                })
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/MainLayout/HeaderUser.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_1 = _sfc_main$6;
const _imports_1 = "" + __publicAssetsURL("img/instagram.svg");
const _imports_2 = "" + __publicAssetsURL("img/facebook.svg");
const _imports_3 = "" + __publicAssetsURL("img/telegram.svg");
const _imports_0 = "" + __publicAssetsURL("img/Logo.svg");
const _imports_4 = "" + __publicAssetsURL("img/search-normal.svg");
const _sfc_main$5 = {
  __name: "Header",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { data: category } = ([__temp, __restore] = withAsyncContext(() => useJsonPlaceholderData("/categories/")), __temp = await __temp, __restore(), __temp);
    computed(() => category.value);
    const hierarchicalCategories = ref([]);
    const categoryBlockRef = ref(null);
    const toggleButtonRef = ref(null);
    const isShown = ref(true);
    const handleClickOutside = (event) => {
      if (categoryBlockRef.value && !categoryBlockRef.value.contains(event.target) && toggleButtonRef.value && !toggleButtonRef.value.contains(event.target)) {
        isShown.value = true;
      }
    };
    const close = () => {
      isShown.value = true;
    };
    onUnmounted(() => {
      window.removeEventListener("click", handleClickOutside);
    });
    const { data: currency } = ([__temp, __restore] = withAsyncContext(() => useJsonPlaceholderData("/currency/")), __temp = await __temp, __restore(), __temp);
    useCurrencyStore();
    const uzsIndex = currency.value.findIndex((cur) => cur.code === "UZS");
    const currentIndex = ref(uzsIndex !== -1 ? uzsIndex : 0);
    const currencyStyles = computed(() => {
      return currency.value.map((_, index) => {
        if (index === currentIndex.value) {
          return {
            transform: "translateY(0)",
            transition: "transform 0.5s",
            position: "absolute",
            left: "0",
            bottom: "0",
            display: "flex",
            top: "0",
            right: 0,
            zIndex: 2
            // Убедитесь, что текущий элемент находится над другими элементами
          };
        } else if (index < currentIndex.value) {
          return {
            transform: "translateY(-100%)",
            transition: "transform 0.5s",
            position: "absolute",
            left: "0",
            bottom: "0",
            display: "flex",
            top: "0",
            right: 0,
            zIndex: 1
          };
        } else {
          return {
            transform: "translateY(100%)",
            transition: "transform 0.5s",
            position: "absolute",
            left: "0",
            bottom: "0",
            display: "flex",
            top: "0",
            right: 0,
            zIndex: 1
          };
        }
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$4;
      const _component_MainLayoutHeaderUser = __nuxt_component_1;
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "onmalika-header" }, _attrs))}><div class="container"><div class="onmalika-header-top d-flex justify-content-between"><ul class="navbar-nav onmalika-header-top-nav"><li class="nav-item">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "nav-link",
        "aria-current": "page",
        to: "/about"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`О нас`);
          } else {
            return [
              createTextVNode("О нас")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="nav-item">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "nav-link",
        "aria-current": "page",
        to: "/contacts"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Контакты`);
          } else {
            return [
              createTextVNode("Контакты")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul><div class="onmalika-header-top-currency d-flex"><div class="d-flex align-items-center column-gap-3"><p>Показывать цены на сайте:</p><div class="onmalika-header-top-currency-toggle" style="${ssrRenderStyle({ "position": "relative", "height": "30px" })}"><!--[-->`);
      ssrRenderList(unref(currency), (cur, index) => {
        _push(`<span style="${ssrRenderStyle(unref(currencyStyles)[index])}">${ssrInterpolate(cur.code)}</span>`);
      });
      _push(`<!--]--></div></div><div class="onmalika-header-top-social d-flex"><a href="https://instagram.com/onmalika.uz" target="_blank"><img${ssrRenderAttr("src", _imports_1)} alt=""></a><a href="https://www.facebook.com/onmalika.uz" target="_blank"><img${ssrRenderAttr("src", _imports_2)} alt=""></a><a href="https://t.me/onmalika" target="_blank"><img${ssrRenderAttr("src", _imports_3)} alt=""></a></div></div></div></div><hr><div class="container"><nav class="navbar navbar-expand-lg onmalika-header-bottom justify-content-between"><div class="onmalika-header-bottom-menu d-flex">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "navbar-brand",
        to: "/"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_0)} alt=""${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_0,
                alt: ""
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<button type="button" class="${ssrRenderClass([{ "active": !unref(isShown) }, "btn dark-cover btn-elemetn-in"])}"> Каталог <svg class="${ssrRenderClass({ "d-none": !unref(isShown) })}" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 7H21" stroke="white" stroke-width="1.5" stroke-linecap="round"></path><path d="M3 12H21" stroke="white" stroke-width="1.5" stroke-linecap="round"></path><path d="M3 17H21" stroke="white" stroke-width="1.5" stroke-linecap="round"></path></svg><svg class="${ssrRenderClass({ "d-none": unref(isShown) })}" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 19L19 5" stroke="black" fill="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M19 19L5 5" stroke="black" fill="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></button><button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button><div class="collapse navbar-collapse" id="navbarSupportedContent"><ul class="navbar-nav me-auto mb-2 mb-lg-0"><li class="nav-item">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "nav-link",
        "aria-current": "page",
        to: "/about"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`О нас`);
          } else {
            return [
              createTextVNode("О нас")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="nav-item">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "nav-link",
        "aria-current": "page",
        to: "/contacts"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Контакты`);
          } else {
            return [
              createTextVNode("Контакты")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></div></div><div class="onmalika-header-bottom-user"><button type="button" data-bs-toggle="modal" data-bs-target="#searchModal" class="btn dark-cover"><img${ssrRenderAttr("src", _imports_4)} alt=""></button><div class="dark-cover onmalika-header-bottom-user-nav"><a class="onmalika-header-bottom-tel" href="tel:+998951031111"><b>+998 95 103 11 11</b></a>`);
      _push(ssrRenderComponent(_component_MainLayoutHeaderUser, null, null, _parent));
      _push(`</div></div></nav></div><div class="${ssrRenderClass([{ "d-block": !unref(isShown) }, "onmalika-category"])}"><div class="container"><div class="onmalika-category-block"><div class="row justify-content-between"><div class="col-3"><ul class="nav onmalika-category-block-list nav-pills mb-3" id="pills-tab" role="tablist"><!--[-->`);
      ssrRenderList(unref(hierarchicalCategories), (cat, index) => {
        _push(`<li class="nav-item" role="presentation"><button class="${ssrRenderClass([{ "active": index == 0 }, "nav-link"])}"${ssrRenderAttr("id", "pills-tab-" + index)} data-bs-toggle="pill"${ssrRenderAttr("data-bs-target", "#pills-content-" + index)} type="button" role="tab"${ssrRenderAttr("aria-controls", "pills-content-" + index)} aria-selected="true"><span><svg width="100%" height="24" class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.9199 22C17.4199 22 21.9199 17.5 21.9199 12C21.9199 6.5 17.4199 2 11.9199 2C6.41992 2 1.91992 6.5 1.91992 12C1.91992 17.5 6.41992 22 11.9199 22Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M7.91992 12H15.9199" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg> ${ssrInterpolate(cat.name)}</span><svg width="100%" height="14" class="arrow-icon" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.19727 11.62L9.0006 7.81667C9.44977 7.36751 9.44977 6.63251 9.0006 6.18334L5.19727 2.38" stroke="black" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path></svg></button></li>`);
      });
      _push(`<!--]--></ul></div><div class="col-8"><div class="tab-content onmalika-category-block-subcats" id="pills-tabContent"><!--[-->`);
      ssrRenderList(unref(hierarchicalCategories), (cat, index) => {
        _push(`<div class="${ssrRenderClass([{ "show active": index == 0 }, "tab-pane fade"])}"${ssrRenderAttr("id", "pills-content-" + index)}>`);
        if (cat && cat.subcategoriesLoaded && cat.subcategories && cat.subcategories.length > 0) {
          _push(`<ul class="list-menu"><!--[-->`);
          ssrRenderList(cat.subcategories, (subcat, index2) => {
            _push(`<li c>`);
            _push(ssrRenderComponent(_component_NuxtLink, {
              onClick: close,
              to: `/shop/${subcat.parent.slug}/${subcat.slug}`
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`${ssrInterpolate(subcat.name)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(subcat.name), 1)
                  ];
                }
              }),
              _: 2
            }, _parent));
            _push(`</li>`);
          });
          _push(`<!--]--></ul>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--></div></div></div></div></div></div></header>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/MainLayout/Header.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_0$2 = _sfc_main$5;
const baseurl$2 = "https://admin.itpapa.uz";
const _sfc_main$4 = {
  __name: "MiniCard",
  __ssrInlineRender: true,
  props: {
    product_info: {
      type: Object,
      required: true
    },
    userFav: {
      type: Boolean,
      required: false
    }
  },
  setup(__props) {
    const props = __props;
    const authStore = useAuthStore();
    useCartStore();
    const { product_info } = props;
    const token_access = useCookie("token_access");
    const checkAuth = async () => {
      if (authStore.isAuthenticated) {
        await useJsonPlaceholderData("/user/favorites/", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token_access.value}`
          },
          body: {
            user: authStore.user.id,
            product_id: product_info.id
          }
        });
        alert("Добавлено в избранные");
      } else {
        alert("Вы не авторизованы");
      }
    };
    const currencyStore = useCurrencyStore();
    const getPriceText = () => {
      const currency = currencyStore.selectedCurrency;
      const priceInfo = product_info.prices_in_currencies[currency];
      if (!priceInfo) {
        return "Цена не указана";
      }
      return `${priceInfo.price} ${priceInfo.symbol}`;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$4;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "card onmalika-card h-100 mini-card" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/shop/" + unref(product_info).category.parent.slug + "/" + unref(product_info).category.slug + "/" + unref(product_info).slug
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="onmalika-card-badges"${_scopeId}><span class="badge onmalika-card-badges-new" style="${ssrRenderStyle({ "background-color": "#80EE98" })}"${_scopeId}>new</span><span class="badge onmalika-card-badges-new" style="${ssrRenderStyle({ "background-color": "#FF4A4A" })}"${_scopeId}>-20%</span></div>`);
            if (!__props.userFav) {
              _push2(`<button class="onmalika-card-favorite"${_scopeId}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path d="M12.62 20.81C12.28 20.93 11.72 20.93 11.38 20.81C8.48 19.82 2 15.69 2 8.68998C2 5.59998 4.49 3.09998 7.56 3.09998C9.38 3.09998 10.99 3.97998 12 5.33998C13.01 3.97998 14.63 3.09998 16.44 3.09998C19.51 3.09998 22 5.59998 22 8.68998C22 15.69 15.52 19.82 12.62 20.81Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"${_scopeId}></path></svg></button>`);
            } else {
              _push2(`<!---->`);
            }
            if (unref(product_info) && unref(product_info).image && unref(product_info).image.url) {
              _push2(`<img${ssrRenderAttr("src", baseurl$2 + unref(product_info).image.url)} class="card-img-top" alt="..." loading="lazy"${_scopeId}>`);
            } else {
              _push2(`<img src="https://placehold.co/250x250" class="w-100" alt=""${_scopeId}>`);
            }
          } else {
            return [
              createVNode("div", { class: "onmalika-card-badges" }, [
                createVNode("span", {
                  class: "badge onmalika-card-badges-new",
                  style: { "background-color": "#80EE98" }
                }, "new"),
                createVNode("span", {
                  class: "badge onmalika-card-badges-new",
                  style: { "background-color": "#FF4A4A" }
                }, "-20%")
              ]),
              !__props.userFav ? (openBlock(), createBlock("button", {
                key: 0,
                class: "onmalika-card-favorite",
                onClick: checkAuth
              }, [
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
                ]))
              ])) : createCommentVNode("", true),
              unref(product_info) && unref(product_info).image && unref(product_info).image.url ? (openBlock(), createBlock("img", {
                key: 1,
                src: baseurl$2 + unref(product_info).image.url,
                class: "card-img-top",
                alt: "...",
                loading: "lazy"
              }, null, 8, ["src"])) : (openBlock(), createBlock("img", {
                key: 2,
                src: "https://placehold.co/250x250",
                class: "w-100",
                alt: ""
              }))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="card-body onmalika-card-body"><h5 class="onmalika-card-title">${ssrInterpolate(unref(product_info).name)}</h5><div class="onmalika-card-stock"><div class="stock in-stock"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="#46AC36" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M7.75 11.9999L10.58 14.8299L16.25 9.16992" stroke="#46AC36" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg><p> Есть в наличии</p></div></div><div class="onmalika-card-price"><span class="${ssrRenderClass({ "active": unref(product_info).sales_price })}">${ssrInterpolate(getPriceText())}</span><p class="${ssrRenderClass({ "d-none": !unref(product_info).sales_price })}">${ssrInterpolate(unref(product_info).sales_price)}</p></div><div class="onmalika-card-body-orderbtn"><button type="button" class="btn dark-cover justify-content-center"> В корзину</button><div class="onmalika-card-body-orderbtn-rating"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.5639 4.3011L15.1502 7.49508C15.364 7.93681 15.9378 8.35588 16.4216 8.44649L19.2905 8.92219C21.1244 9.22799 21.5519 10.5645 20.2356 11.901L17.9967 14.1549C17.6254 14.5286 17.4116 15.2649 17.5354 15.7972L18.1767 18.5834C18.683 20.7807 17.5129 21.6415 15.589 20.4862L12.9001 18.8779C12.4163 18.5834 11.6062 18.5834 11.1224 18.8779L8.43351 20.4862C6.50963 21.6302 5.33955 20.7807 5.84583 18.5834L6.48712 15.7972C6.58838 15.2535 6.37462 14.5173 6.00334 14.1436L3.76444 11.8896C2.4481 10.5645 2.87563 9.22799 4.7095 8.91086L7.57845 8.43516C8.06223 8.35588 8.63602 7.92548 8.84979 7.48376L10.4361 4.28977C11.3025 2.56819 12.6975 2.56819 13.5639 4.3011Z" fill="#FFB800"></path></svg><p> 5.0</p></div></div></div></div>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/MiniCard.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_0$1 = _sfc_main$4;
const baseurl$1 = "https://admin.itpapa.uz";
const _sfc_main$3 = {
  __name: "InputSearch",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { debounce } = pkg;
    const { data: products } = ([__temp, __restore] = withAsyncContext(() => useJsonPlaceholderData("/products/?limit=3")), __temp = await __temp, __restore(), __temp);
    const searchQuery = ref("");
    const searchResults = ref([]);
    useRouter();
    ref(null);
    const debouncedFetchSearchResults = debounce(async (query) => {
      if (!query)
        return;
      try {
        const response = await useJsonPlaceholderData(`/products/?search=${query}&limit=6`);
        searchResults.value = response.data.value;
      } catch (error) {
        console.error("Ошибка запроса: ", error);
        searchResults.value = [];
      }
    }, 700);
    const highlightSearchQuery = (text) => {
      if (!searchQuery.value)
        return text;
      const words = searchQuery.value.trim().split(/\s+/).map(escapeRegExp);
      const regex = new RegExp(`(${words.join("|")})`, "gi");
      return text.replace(regex, (matched) => `<span style="color: red;">${matched}</span>`);
    };
    function escapeRegExp(string) {
      return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    }
    watch(searchQuery, (newValue) => {
      if (newValue && newValue.length >= 2) {
        debouncedFetchSearchResults(newValue);
      } else {
        searchResults.value = [];
        if (newValue === "") {
          debouncedFetchSearchResults.cancel();
        }
      }
    });
    const currencyStore = useCurrencyStore();
    const getPriceText = (product) => {
      const selectedCurrency = currencyStore.selectedCurrency;
      const priceInfo = product.prices_in_currencies[selectedCurrency];
      if (!priceInfo) {
        return "Цена не указана";
      }
      return `${priceInfo.price} ${priceInfo.symbol}`;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$4;
      const _component_MiniCard = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))}><div class="modal-search-input"><form><div class="input-group"><span class="input-group-text" id="basic-addon1"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M22 22L20 20" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></span><input autocomplete="off" type="text" class="form-control" placeholder="Найдите свой товар!"${ssrRenderAttr("value", unref(searchQuery))} id="search" aria-describedby="search"></div><button type="button" class="btn dark-cover">Поиск</button></form><button type="button" class="dark-cover close" data-bs-dismiss="modal"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.33301 12.6667L12.6663 3.33333" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12.6663 12.6667L3.33301 3.33333" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></button></div>`);
      if (unref(searchResults) && unref(searchResults).results && unref(searchResults).results.length > 0) {
        _push(`<div class="row"><!--[-->`);
        ssrRenderList(unref(searchResults).results, (item) => {
          _push(`<div class="col-2 mb-4"><div class="card onmalika-card h-100 mini-card"><div class="onmalika-card-badges"><span class="badge onmalika-card-badges-new">new</span><span class="badge onmalika-card-badges-sales">-20%</span></div>`);
          if (!_ctx.userFav) {
            _push(`<button class="onmalika-card-favorite"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.62 20.81C12.28 20.93 11.72 20.93 11.38 20.81C8.48 19.82 2 15.69 2 8.68998C2 5.59998 4.49 3.09998 7.56 3.09998C9.38 3.09998 10.99 3.97998 12 5.33998C13.01 3.97998 14.63 3.09998 16.44 3.09998C19.51 3.09998 22 5.59998 22 8.68998C22 15.69 15.52 19.82 12.62 20.81Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></button>`);
          } else {
            _push(`<!---->`);
          }
          _push(ssrRenderComponent(_component_NuxtLink, {
            "data-bs-dismiss": "modal",
            to: "/shop/" + item.category.parent.slug + "/" + item.category.slug + "/" + item.slug
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                if (item && item.image && item.image.url) {
                  _push2(`<img${ssrRenderAttr("src", baseurl$1 + item.image.url)} class="card-img-top" alt="..."${_scopeId}>`);
                } else {
                  _push2(`<img src="https://placehold.co/250x250" class="w-100" alt=""${_scopeId}>`);
                }
              } else {
                return [
                  item && item.image && item.image.url ? (openBlock(), createBlock("img", {
                    key: 0,
                    src: baseurl$1 + item.image.url,
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
            _: 2
          }, _parent));
          _push(`<div class="card-body onmalika-card-body"><h5 class="onmalika-card-title">${highlightSearchQuery(item.name)}</h5><div class="onmalika-card-stock"><div class="stock in-stock"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="#46AC36" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M7.75 11.9999L10.58 14.8299L16.25 9.16992" stroke="#46AC36" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg><p> Есть в наличии</p></div></div><div class="onmalika-card-price"><span class="${ssrRenderClass({ "active": item.sales_price })}">${ssrInterpolate(getPriceText(item))}</span><p class="${ssrRenderClass({ "d-none": !item.sales_price })}">${ssrInterpolate(item.sales_price)}</p></div><div class="onmalika-card-body-orderbtn"><button type="button" class="btn dark-cover justify-content-center"> В корзину</button><p><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.5639 4.3011L15.1502 7.49508C15.364 7.93681 15.9378 8.35588 16.4216 8.44649L19.2905 8.92219C21.1244 9.22799 21.5519 10.5645 20.2356 11.901L17.9967 14.1549C17.6254 14.5286 17.4116 15.2649 17.5354 15.7972L18.1767 18.5834C18.683 20.7807 17.5129 21.6415 15.589 20.4862L12.9001 18.8779C12.4163 18.5834 11.6062 18.5834 11.1224 18.8779L8.43351 20.4862C6.50963 21.6302 5.33955 20.7807 5.84583 18.5834L6.48712 15.7972C6.58838 15.2535 6.37462 14.5173 6.00334 14.1436L3.76444 11.8896C2.4481 10.5645 2.87563 9.22799 4.7095 8.91086L7.57845 8.43516C8.06223 8.35588 8.63602 7.92548 8.84979 7.48376L10.4361 4.28977C11.3025 2.56819 12.6975 2.56819 13.5639 4.3011Z" fill="#FFB800"></path></svg> 5.0 </p></div></div></div></div>`);
        });
        _push(`<!--]--><div class="col-4">`);
        if (unref(searchResults) && unref(searchResults).results && unref(searchResults).results.length == 6) {
          _push(`<button type="button" data-bs-dismiss="modal" class="btn light-cover w-100">Посмотреть все результаты</button>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
      } else if (unref(searchQuery) && unref(searchResults) && unref(searchResults).results && !unref(searchResults).results.length) {
        _push(`<div><div class="modal-search-input-noresult d-flex column-gap-3 align-items-center"><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 15V23.3333" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M19.9997 35.6833H9.89973C4.11639 35.6833 1.69973 31.55 4.49973 26.5L9.69973 17.1333L14.5997 8.33333C17.5664 2.98333 22.4331 2.98333 25.3997 8.33333L30.2997 17.15L35.4997 26.5167C38.2997 31.5667 35.8664 35.7 30.0997 35.7H19.9997V35.6833Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M19.9902 28.3333H20.0052" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg><p>по вашему запросу ничего не найденно <span>Попробуйте заново</span></p></div></div>`);
      } else {
        _push(`<div class="row modal-search-results"><div class="col-2"><h6 class="modal-search-results-title">Часто ищут</h6><ul><li><a href=""> Кондиционеры</a></li><li><a href=""> Кондиционеры</a></li></ul></div><div class="col-8"><h6 class="modal-search-results-title">популярные товары</h6><div class="row row-cols-4"><!--[-->`);
        ssrRenderList(unref(products).results, (product) => {
          _push(`<div class="col">`);
          _push(ssrRenderComponent(_component_MiniCard, {
            "data-bs-dismiss": "modal",
            product_info: product
          }, null, _parent));
          _push(`</div>`);
        });
        _push(`<!--]--></div></div></div>`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Search/InputSearch.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0 = _sfc_main$3;
const baseurl = "https://admin.itpapa.uz";
const _sfc_main$2 = {
  __name: "Footer",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    const cartStore = useCartStore();
    const currencyStore = useCurrencyStore();
    const getPriceInSelectedCurrency = (product) => {
      const selectedCurrency = currencyStore.selectedCurrency;
      const priceInfo = product.prices_in_currencies[selectedCurrency];
      if (!priceInfo) {
        return "Цена не указана";
      }
      return `${priceInfo.price} ${priceInfo.symbol}`;
    };
    const totalUniqueItemsInCart = computed(() => cartStore.items.length);
    const totalPrice = computed(() => {
      return cartStore.items.reduce((total, item) => {
        return total + item.quantity * item.product.price;
      }, 0);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SearchInputSearch = __nuxt_component_0;
      _push(`<!--[--><footer class="onmalika-footer"><div class="container"><div class="onmalika-footer-top"><div class="row"><div class="col-4"><div class="onmalika-footer-top-logo"><a href="/"><img${ssrRenderAttr("src", _imports_0)} alt=""></a><a href="tel:+998997897898"><span>+998 99 789 78 98</span></a><div class="onmalika-footer-top-logo-social"><a href="https://instagram.com/onmalika.uz" target="_blank"><img${ssrRenderAttr("src", _imports_1)} alt=""></a><a href="https://www.facebook.com/onmalika.uz" target="_blank"><img${ssrRenderAttr("src", _imports_2)} alt=""></a><a href="https://t.me/onmalika" target="_blank"><img${ssrRenderAttr("src", _imports_3)} alt=""></a></div></div></div><div class="col-8"><div class="onmalika-footer-top-links"><div class="onmalika-footer-top-links-category"><p class="onmalika-footer-top-links-title">категории</p><ul><li><a href="">Блендер (погружной и стационарный)</a></li><li><a href="">Мясорубка</a></li></ul></div><div class="onmalika-footer-top-links-pages"><p class="onmalika-footer-top-links-title">Покупателям</p><ul><li><a href="">О нас</a></li><li><a href="">Новости</a></li></ul></div></div></div></div></div><div class="onmalika-footer-bottom"><p>© On Malika, 2024</p><a href="">Сделано в...</a></div></div></footer><div class="modal fade onmalika-search-modal" id="searchModal" tabindex="-1" aria-labelledby="searchModalLabel" aria-hidden="true"><div class="modal-dialog"><div class="modal-content"><div class="modal-body">`);
      _push(ssrRenderComponent(_component_SearchInputSearch, null, null, _parent));
      _push(`</div></div></div></div><div class="modal fade onmalika-cart-modal" id="cardModal" tabindex="-1" aria-labelledby="cardModalLabel" aria-hidden="true"><div class="modal-dialog modal-dialog-scrollable"><div class="modal-content"><div class="modal-header"><h5 class="modal-title" id="exampleModalLabel">Корзина <span>${ssrInterpolate(unref(totalUniqueItemsInCart))}</span></h5><button type="button" class="dark-cover" data-bs-dismiss="modal" aria-label="Close"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.33301 12.6667L12.6663 3.33333" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12.6663 12.6667L3.33301 3.33333" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></button></div>`);
      if (unref(cartStore).items.length > 0) {
        _push(`<div class="modal-body"><button type="button"${ssrIncludeBooleanAttr(unref(cartStore).items.length == 0) ? " disabled" : ""} class="clean-cart">Очистить корзину </button><ul><!--[-->`);
        ssrRenderList(unref(cartStore).items, (item) => {
          _push(`<li class="card onmalika-card-cart mb-3"><button class="remove-product" type="button"><svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.3335 11.6667L11.6668 2.33333" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M11.6668 11.6667L2.3335 2.33333" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></button><div class="row g-0"><div class="col-md-4">`);
          if (item && item.product && item.product.image && item.product.image.url) {
            _push(`<img${ssrRenderAttr("src", baseurl + item.product.image.url)} class="card-img-top" alt="...">`);
          } else {
            _push(`<img src="http://placehold.co/250x250" class="card-img-top" alt="...">`);
          }
          _push(`</div><div class="col-md-8"><div class="card-body"><h5 class="onmalika-card-cart-title">${ssrInterpolate(item.product.name)}</h5><p class="onmalika-card-cart-price">${ssrInterpolate(getPriceInSelectedCurrency(item.product))}</p><div class="product-counter"><button type="button">-</button><input${ssrRenderAttr("value", item.quantity)} disabled class="text-center" placeholder=""><button type="button">+</button></div></div></div></div></li>`);
        });
        _push(`<!--]--></ul></div>`);
      } else {
        _push(`<div class="modal-body"><div class="modal-empty"><h4>корзина пуста</h4><p>Воспользуйтесь поиском или каталогом, чтобы найти товары</p></div></div>`);
      }
      _push(`<div class="modal-footer"><div class="total-price"><p>Итого:</p><h4>${ssrInterpolate(unref(totalPrice))}</h4></div><button class="${ssrRenderClass([{ "disabled": unref(cartStore).items.length == 0 }, "btn dark-cover btn-elemetn-in"])}"${ssrIncludeBooleanAttr(unref(cartStore).items.length == 0) ? " disabled" : ""} data-bs-dismiss="modal" type="button"> Оформить заказ </button></div></div></div></div><div class="modal fade onmalika-reviews-modal" id="reviewsModal" tabindex="-1" aria-labelledby="reviewsModalLabel" aria-hidden="true"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h1 class="modal-title fs-5" id="exampleModalLabel">Оставить отзыв</h1><button type="button" class="dark-cover" data-bs-dismiss="modal" aria-label="Close"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.33301 12.6667L12.6663 3.33333" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12.6663 12.6667L3.33301 3.33333" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></button></div><div class="modal-body"><button type="button" class="clean-cart">Вернуться к отзывам</button><form class="modal-form"><div class="modal-leave-rating"><p>Оцените товар</p><div class="modal-leave-rating-stars"><svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M28.4752 7.89133L32.0005 14.9891C32.4755 15.9707 33.7506 16.9019 34.8257 17.1033L41.2011 18.1604C45.2764 18.84 46.2264 21.81 43.3012 24.7799L38.3259 29.7886C37.5009 30.6192 37.0258 32.2552 37.3008 33.4382L38.7259 39.6298C39.851 44.5127 37.2508 46.4255 32.9755 43.8583L27.0001 40.2842C25.9251 39.6298 24.1249 39.6298 23.0499 40.2842L17.0745 43.8583C12.7992 46.4004 10.199 44.5127 11.3241 39.6298L12.7492 33.4382C12.9742 32.2301 12.4991 30.594 11.6741 29.7635L6.69875 24.7548C3.77355 21.81 4.72362 18.84 8.79889 18.1352L15.1743 17.0781C16.2494 16.9019 17.5245 15.9455 17.9995 14.9639L21.5248 7.86616C23.4499 4.04043 26.5501 4.04043 28.4752 7.89133Z" fill="#7B7B7B"></path></svg><svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M28.4752 7.89133L32.0005 14.9891C32.4755 15.9707 33.7506 16.9019 34.8257 17.1033L41.2011 18.1604C45.2764 18.84 46.2264 21.81 43.3012 24.7799L38.3259 29.7886C37.5009 30.6192 37.0258 32.2552 37.3008 33.4382L38.7259 39.6298C39.851 44.5127 37.2508 46.4255 32.9755 43.8583L27.0001 40.2842C25.9251 39.6298 24.1249 39.6298 23.0499 40.2842L17.0745 43.8583C12.7992 46.4004 10.199 44.5127 11.3241 39.6298L12.7492 33.4382C12.9742 32.2301 12.4991 30.594 11.6741 29.7635L6.69875 24.7548C3.77355 21.81 4.72362 18.84 8.79889 18.1352L15.1743 17.0781C16.2494 16.9019 17.5245 15.9455 17.9995 14.9639L21.5248 7.86616C23.4499 4.04043 26.5501 4.04043 28.4752 7.89133Z" fill="#7B7B7B"></path></svg><svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M28.4752 7.89133L32.0005 14.9891C32.4755 15.9707 33.7506 16.9019 34.8257 17.1033L41.2011 18.1604C45.2764 18.84 46.2264 21.81 43.3012 24.7799L38.3259 29.7886C37.5009 30.6192 37.0258 32.2552 37.3008 33.4382L38.7259 39.6298C39.851 44.5127 37.2508 46.4255 32.9755 43.8583L27.0001 40.2842C25.9251 39.6298 24.1249 39.6298 23.0499 40.2842L17.0745 43.8583C12.7992 46.4004 10.199 44.5127 11.3241 39.6298L12.7492 33.4382C12.9742 32.2301 12.4991 30.594 11.6741 29.7635L6.69875 24.7548C3.77355 21.81 4.72362 18.84 8.79889 18.1352L15.1743 17.0781C16.2494 16.9019 17.5245 15.9455 17.9995 14.9639L21.5248 7.86616C23.4499 4.04043 26.5501 4.04043 28.4752 7.89133Z" fill="#7B7B7B"></path></svg><svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M28.4752 7.89133L32.0005 14.9891C32.4755 15.9707 33.7506 16.9019 34.8257 17.1033L41.2011 18.1604C45.2764 18.84 46.2264 21.81 43.3012 24.7799L38.3259 29.7886C37.5009 30.6192 37.0258 32.2552 37.3008 33.4382L38.7259 39.6298C39.851 44.5127 37.2508 46.4255 32.9755 43.8583L27.0001 40.2842C25.9251 39.6298 24.1249 39.6298 23.0499 40.2842L17.0745 43.8583C12.7992 46.4004 10.199 44.5127 11.3241 39.6298L12.7492 33.4382C12.9742 32.2301 12.4991 30.594 11.6741 29.7635L6.69875 24.7548C3.77355 21.81 4.72362 18.84 8.79889 18.1352L15.1743 17.0781C16.2494 16.9019 17.5245 15.9455 17.9995 14.9639L21.5248 7.86616C23.4499 4.04043 26.5501 4.04043 28.4752 7.89133Z" fill="#7B7B7B"></path></svg><svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M28.4752 7.89133L32.0005 14.9891C32.4755 15.9707 33.7506 16.9019 34.8257 17.1033L41.2011 18.1604C45.2764 18.84 46.2264 21.81 43.3012 24.7799L38.3259 29.7886C37.5009 30.6192 37.0258 32.2552 37.3008 33.4382L38.7259 39.6298C39.851 44.5127 37.2508 46.4255 32.9755 43.8583L27.0001 40.2842C25.9251 39.6298 24.1249 39.6298 23.0499 40.2842L17.0745 43.8583C12.7992 46.4004 10.199 44.5127 11.3241 39.6298L12.7492 33.4382C12.9742 32.2301 12.4991 30.594 11.6741 29.7635L6.69875 24.7548C3.77355 21.81 4.72362 18.84 8.79889 18.1352L15.1743 17.0781C16.2494 16.9019 17.5245 15.9455 17.9995 14.9639L21.5248 7.86616C23.4499 4.04043 26.5501 4.04043 28.4752 7.89133Z" fill="#7B7B7B"></path></svg></div></div><textarea placeholder="Введите комментарий"></textarea></form></div><div class="modal-footer"><button type="button" class="dark-cover w-100 justify-content-center">Отправить</button></div></div></div></div><!--]-->`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/MainLayout/Footer.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_3 = _sfc_main$2;
const _sfc_main$1 = {
  __name: "error",
  __ssrInlineRender: true,
  props: ["error"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_MainLayoutHeader = __nuxt_component_0$2;
      const _component_NuxtLink = __nuxt_component_0$4;
      const _component_MainLayoutFooter = __nuxt_component_3;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_MainLayoutHeader, null, null, _parent));
      _push(`<section class="padding-y"><div class="container"><div class="row justify-content-center"><div class="col-5"></div></div><div class="row justify-content-center"><div class="col-5 text-center"><h1 class="text-center mb-4">${ssrInterpolate(__props.error.statusCode)}, ${ssrInterpolate(__props.error.message)}</h1>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "btn btn-primary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` На главную `);
          } else {
            return [
              createTextVNode(" На главную ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></section>`);
      _push(ssrRenderComponent(_component_MainLayoutFooter, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("error.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const ErrorComponent = _sfc_main$1;
const _sfc_main = {
  __name: "nuxt-root",
  __ssrInlineRender: true,
  setup(__props) {
    const IslandRenderer = /* @__PURE__ */ defineAsyncComponent(() => import("./_nuxt/island-renderer-38c1f445.js").then((r) => r.default || r));
    const nuxtApp = useNuxtApp();
    nuxtApp.deferHydration();
    nuxtApp.ssrContext.url;
    const SingleRenderer = false;
    provide(PageRouteSymbol, useRoute());
    nuxtApp.hooks.callHookWith((hooks) => hooks.map((hook) => hook()), "vue:setup");
    const error = useError();
    onErrorCaptured((err, target, info) => {
      nuxtApp.hooks.callHook("vue:error", err, target, info).catch((hookError) => console.error("[nuxt] Error in `vue:error` hook", hookError));
      {
        const p = nuxtApp.runWithContext(() => showError(err));
        onServerPrefetch(() => p);
        return false;
      }
    });
    const islandContext = nuxtApp.ssrContext.islandContext;
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderSuspense(_push, {
        default: () => {
          if (unref(error)) {
            _push(ssrRenderComponent(unref(ErrorComponent), { error: unref(error) }, null, _parent));
          } else if (unref(islandContext)) {
            _push(ssrRenderComponent(unref(IslandRenderer), { context: unref(islandContext) }, null, _parent));
          } else if (unref(SingleRenderer)) {
            ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(SingleRenderer)), null, null), _parent);
          } else {
            _push(ssrRenderComponent(unref(AppComponent), null, null, _parent));
          }
        },
        _: 1
      });
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/nuxt/dist/app/components/nuxt-root.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const RootComponent = _sfc_main;
if (!globalThis.$fetch) {
  globalThis.$fetch = $fetch.create({
    baseURL: baseURL()
  });
}
let entry;
{
  entry = async function createNuxtAppServer(ssrContext) {
    const vueApp = createApp(RootComponent);
    const nuxt = createNuxtApp({ vueApp, ssrContext });
    try {
      await applyPlugins(nuxt, plugins);
      await nuxt.hooks.callHook("app:created", vueApp);
    } catch (err) {
      await nuxt.hooks.callHook("app:error", err);
      nuxt.payload.error = nuxt.payload.error || err;
    }
    if (ssrContext == null ? void 0 : ssrContext._renderResponse) {
      throw new Error("skipping render");
    }
    return vueApp;
  };
}
const entry$1 = (ctx) => entry(ctx);
export {
  __nuxt_component_0$2 as _,
  __nuxt_component_2 as a,
  __nuxt_component_3 as b,
  __nuxt_component_0$1 as c,
  entry$1 as default,
  executeAsync as e,
  globalMiddleware as g
};
//# sourceMappingURL=server.mjs.map
