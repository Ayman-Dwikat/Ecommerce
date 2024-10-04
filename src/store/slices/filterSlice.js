// src/store/slices/filterSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [],
  isFilterVisible: false,
  filteredProducts: [],
  sortOrder: "relevant",
};

const categoryMap = {
  men: ["mens-shirts", "mens-shoes", "mens-watches"],
  women: [
    "womens-bags",
    "womens-dresses",
    "womens-jewellery",
    "womens-shoes",
    "womens-watches",
  ],
  electronics: ["laptops", "mobile-accessories", "smartphones", "tablets"],
  beauty: ["beauty", "skin-care", "fragrances"],
  home: ["furniture", "home-decoration", "kitchen-accessories", "groceries"],
  sports: ["sports-accessories", "sunglasses", "motorcycle"],
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    updateCategories: (state, action) => {
      const category = action.payload;
      const relatedCategories = categoryMap[category] || [];

      if (state.categories.includes(category)) {
        state.categories = state.categories.filter(
          (item) => item !== category && !relatedCategories.includes(item)
        );
      } else {
        state.categories = [
          ...new Set([...state.categories, category, ...relatedCategories]),
        ];
      }
    },

    updateSortOrder: (state, action) => {
      state.sortOrder = action.payload;
    },

    toggleFilterVisibility: (state) => {
      state.isFilterVisible = !state.isFilterVisible;
    },

    filterProducts: (state, action) => {
      const { products, search } = action.payload;
      let filteredProducts = [...products];

      // Filter by categories
      if (state.categories.length > 0) {
        filteredProducts = filteredProducts.filter((product) =>
          state.categories.includes(product.category)
        );
      }

      // Search logic
      if (search) {
        filteredProducts = filteredProducts.filter((product) =>
          product.title.toLowerCase().includes(search.toLowerCase())
        );
      }

      // Sort logic
      if (state.sortOrder === "low-high") {
        filteredProducts.sort((a, b) => a.price - b.price);
      } else if (state.sortOrder === "high-low") {
        filteredProducts.sort((a, b) => b.price - a.price);
      }

      state.filteredProducts = filteredProducts;
    },
  },
});

export const {
  updateCategories,
  updateSortOrder,
  toggleFilterVisibility,
  filterProducts,
} = filterSlice.actions;

export default filterSlice.reducer;
