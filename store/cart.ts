import { defineStore } from 'pinia';

interface Product {
  id: string;
}

interface CartItem {
  product: Product;
  quantity: number;
}

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [] as CartItem[],
  }),
  actions: {
    loadCart() {
      const savedCart = sessionStorage.getItem('cart');

      if (savedCart) {
        try {
          this.items = JSON.parse(savedCart) as CartItem[];
        } catch (e) {
          console.error('Ошибка при разборе данных корзины:', e);
          this.items = [];
        }
      } else {
        this.items = [];
      }
    },
    addToCart(newProduct: Product, quantityToAdd: number) {
      const existingProductIndex = this.items.findIndex(item => item.product.id === newProduct.id);

      if (existingProductIndex !== -1) {
        this.items[existingProductIndex].quantity += quantityToAdd;
      } else {
        this.items.push({
          product: newProduct,
          quantity: quantityToAdd
        });
      }
      sessionStorage.setItem('cart', JSON.stringify(this.items));
    },
    increaseQuantity(productId: string) {
      const index = this.items.findIndex(item => item.product.id === productId);
      if (index !== -1) {
        this.items[index].quantity++;
        sessionStorage.setItem('cart', JSON.stringify(this.items));
      }
    },
    decreaseQuantity(productId: string) {
      const index = this.items.findIndex(item => item.product.id === productId);
      if (index !== -1 && this.items[index].quantity > 1) {
        this.items[index].quantity--;
        sessionStorage.setItem('cart', JSON.stringify(this.items));
      }
    },
    removeFromCart(productId: string) {
      this.items = this.items.filter(item => item.product.id !== productId);
      sessionStorage.setItem('cart', JSON.stringify(this.items));
    },
    clearCart() {
      this.items = [];
      sessionStorage.setItem('cart', JSON.stringify(this.items));
    },
  },
});
