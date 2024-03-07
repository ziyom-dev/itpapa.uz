import { e as executeAsync } from "../server.mjs";
import "vue";
import "hookable";
import { l as defineNuxtRouteMiddleware, c as useAuthStore, g as useCookie, n as navigateTo, h as useJsonPlaceholderData } from "./chunk-pg-brands-4e133212.js";
import "devalue";
import "klona";
import "ofetch";
import "#internal/nitro";
import "vue-router";
import "h3";
import "./chunk-pg-user-4bc47dbe.js";
import "vue/server-renderer";
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
const auth = /* @__PURE__ */ defineNuxtRouteMiddleware(async (to, from) => {
  let __temp, __restore;
  const authStore = useAuthStore();
  const token_access = useCookie("token_access");
  const token_refresh = useCookie("token_refresh");
  function parseJwt(token2) {
    const base64Url = token2.split(".")[1];
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    const jsonPayload = decodeURIComponent(atob(base64).split("").map(function(c) {
      return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(""));
    return JSON.parse(jsonPayload);
  }
  token_access.value;
  function isTokenExpired(token2) {
    if (!token2)
      return true;
    const decoded = parseJwt(token2);
    const currentTime = Date.now().valueOf() / 1e3;
    return decoded.exp <= currentTime;
  }
  function isValidToken(token2) {
    if (!token2)
      return false;
    const decoded = parseJwt(token2);
    const currentTime = Date.now().valueOf() / 1e3;
    return decoded.exp > currentTime;
  }
  async function refreshToken() {
    if (isTokenExpired(token_refresh.value)) {
      return false;
    }
    try {
      const response = await useJsonPlaceholderData("/token/refresh/", {
        method: "POST",
        body: {
          refresh: token_refresh.value
        }
      });
      if (response.data && response.data.value && response.data.value.access) {
        token_access.value = response.data.value.access;
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.log(error);
      return false;
    }
  }
  async function verifyToken(token2) {
    try {
      const response = await useJsonPlaceholderData("/token/verify/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ token: token2 })
      });
      if (response.data.value === null) {
        return false;
      }
      return true;
    } catch (error) {
      console.log("Error verifying token:", error);
      return false;
    }
  }
  if (to.path === "/user/login") {
    if (authStore.isAuthenticated || token_access.value && isValidToken(token_access.value)) {
      return navigateTo("/user");
    }
    return;
  }
  if (!authStore.isAuthenticated) {
    const tokenIsValid = ([__temp, __restore] = executeAsync(() => verifyToken(token_access.value)), __temp = await __temp, __restore(), __temp);
    if (!tokenIsValid) {
      const isRefreshed = ([__temp, __restore] = executeAsync(() => refreshToken()), __temp = await __temp, __restore(), __temp);
      if (!isRefreshed) {
        try {
          ;
          [__temp, __restore] = executeAsync(() => $fetch("/api/logout")), await __temp, __restore();
          ;
        } catch (error) {
          console.error("Ошибка при выходе из системы", error);
        }
        authStore.logout();
        return navigateTo("/user/login");
      }
    }
  }
});
export {
  auth as default
};
//# sourceMappingURL=auth-7f7bf086.js.map
