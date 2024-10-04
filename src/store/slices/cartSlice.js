import { createSlice } from "@reduxjs/toolkit";

const calculateCartTotalAmount = (cartItems) => {
  return cartItems.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );
};

const calculateCartTotalQuantity = (cartItems) => {
  return cartItems.reduce((acc, product) => acc + product.quantity, 0);
};

const initialState = {
  cartItems: [],
  cartTotalAmount: 0,
  cartTotalQuantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (product) =>
          product.id === action.payload.id &&
          product.size === action.payload.size &&
          product.color === action.payload.color
      );

      if (itemIndex >= 0) {
        // If the item already exists, increase its quantity
        state.cartItems[itemIndex].quantity += action.payload.quantity;
      } else {
        // If the item does not exist, add it to the cart
        state.cartItems.push(action.payload);
      }

      state.cartTotalAmount = calculateCartTotalAmount(state.cartItems);
      state.cartTotalQuantity = calculateCartTotalQuantity(state.cartItems);
    },

    removeItemFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (product) =>
          !(
            product.id === action.payload.id &&
            product.size === action.payload.size &&
            product.color === action.payload.color
          )
      );

      state.cartTotalAmount = calculateCartTotalAmount(state.cartItems);
      state.cartTotalQuantity = calculateCartTotalQuantity(state.cartItems);
    },

    clearCart: (state) => {
      state.cartItems = [];
      state.cartTotalAmount = 0;
      state.cartTotalQuantity = 0;
    },

    updateCartQuantity: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (product) =>
          product.id === action.payload.id &&
          product.size === action.payload.size &&
          product.color === action.payload.color
      );

      if (itemIndex >= 0) {
        // Update the quantity of the product
        state.cartItems[itemIndex].quantity = action.payload.quantity;
      }

      state.cartTotalAmount = calculateCartTotalAmount(state.cartItems);
      state.cartTotalQuantity = calculateCartTotalQuantity(state.cartItems);
    },
  },
});

export const {
  addItemToCart,
  removeItemFromCart,
  clearCart,
  updateCartQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
