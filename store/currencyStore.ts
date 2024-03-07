// stores/currencyStore.ts
import { defineStore } from 'pinia';

export const useCurrencyStore = defineStore('currency', {
  state: () => ({
    selectedCurrency: 'UZS' // начальное значение
  }),
  actions: {
    setSelectedCurrency(currency: string) {
      this.selectedCurrency = currency;
    }
  }
});
