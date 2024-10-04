import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  itemsToBuy: [], // Array of products selected for purchase
  orderTotalAmount: 0, // Total price of items selected for purchase
  orderItems: [], // List of purchased items
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    placeOrder: (state) => {
      const currentDate = new Date().toLocaleDateString();
      const orderId = new Date().getTime();

      state.itemsToBuy.forEach((item) => {
        const existingItemIndex = state.orderItems.findIndex(
          (orderItem) =>
            orderItem.id === item.id &&
            orderItem.size === item.size &&
            orderItem.color === item.color &&
            orderItem.status === "In delivery"
        );

        if (existingItemIndex >= 0) {
          // Increase quantity if the item already exists in the order
          state.orderItems[existingItemIndex].quantity += item.quantity;
        } else {
          // Add new item to the order if it doesn't already exist
          state.orderItems.push({
            ...item,
            status: "In delivery",
            date: currentDate,
            orderId,
          });
        }
      });

      state.itemsToBuy = [];
      state.orderTotalAmount = 0;
    },

    setItemsToBuy: (state, action) => {
      state.itemsToBuy = action.payload;
      state.orderTotalAmount = action.payload.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
    },

    removeOrderItem: (state, action) => {
      state.orderItems = state.orderItems.filter(
        (orderItem) =>
          !(
            orderItem.id === action.payload.id &&
            orderItem.size === action.payload.size &&
            orderItem.color === action.payload.color &&
            orderItem.orderId === action.payload.orderId
          )
      );
    },

    updateOrderStatus: (state, action) => {
      const itemIndex = state.orderItems.findIndex(
        (orderItem) =>
          orderItem.id === action.payload.id &&
          orderItem.size === action.payload.size &&
          orderItem.color === action.payload.color &&
          orderItem.orderId === action.payload.orderId
      );

      if (
        itemIndex >= 0 &&
        state.orderItems[itemIndex].status === "In delivery"
      ) {
        state.orderItems[itemIndex].status = "Received";
      }
    },
  },
});

export const { placeOrder, setItemsToBuy, removeOrderItem, updateOrderStatus } =
  orderSlice.actions;

export default orderSlice.reducer;
