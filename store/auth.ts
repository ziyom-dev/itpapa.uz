import { defineStore } from 'pinia';

interface User {
  favorite_products: Array<{ id: string }>; 

}

export const useAuthStore = defineStore('auth', {
  state: () => ({
    isAuthenticated: false,
    user: null as User | null,
  }),
  actions: {
    login(user: User) {
      this.isAuthenticated = true;
      this.user = user;
    },
    logout() {
      this.isAuthenticated = false;
      this.user = null;
    },
    removeFavoriteProduct(productId: string) {
      if (this.user) {
        this.user.favorite_products = this.user.favorite_products.filter(product => product.id !== productId);
      }
    }
  }
});