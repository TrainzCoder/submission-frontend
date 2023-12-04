import { defineStore } from "pinia";
import ProductData from "../data/products.json";

export const useProductsStore = defineStore('products', {
  state: () => ({
    products: [],
    product: null
  }),

  getters: {
    getProducts() {
      return this.products;
    },
    getProduct() {
      return this.product;
    },
  },

  actions: {
    fetchProducts() {
      this.products = ProductData;
    },

    deleteProduct(id) {
      this.products = this.products.filter(product => product.id !== id);
    },

    filterProducts(filters) {
      let filteredProducts = [...this.products];

      if (filters.categories && filters.categories.length > 0) {
        filteredProducts = filteredProducts.filter(product => filters.categories.includes(product.category));
      }

      if (filters.minPrice && filters.maxPrice) {
        filteredProducts = filteredProducts.filter(product => product.price >= filters.minPrice && product.price <= filters.maxPrice);
      }

      this.products = filteredProducts;
    },

    fetchProduct(id) {
      this.product = this.products.find(product => product.id === id);
    },


    searchProducts(query) {
      if (!query.trim()) {
        return this.products
      }

      const searchTerm = query.trim().toLowerCase();
      const searchResults = this.products.filter(product => {
        return product.name.toLowerCase().includes(searchTerm);
      });

      this.products = searchResults;
    }
  }
});
