import { createSlice } from "@reduxjs/toolkit";

// const pizza12 = {
//   pizzaId: 12,
//   name: "Mediterranean",
//   quantity: 2,
//   unitPrice: 16,
//   totalPrice: 32,
// };

const initialState = { cart: [] };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      // payload = newItem
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      //payload = pizzaId
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },
    increaseItemQuantity(state, action) {
      //payload = pizzaId
      const selected = state.cart.find(
        (item) => item.pizzaId === action.payload,
      );
      selected.quantity++;
      selected.totalPrice = selected.unitPrice * selected.quantity;
    },
    decreaseItemQuantity(state, action) {
      //payload = pizzaId
      const selected = state.cart.find(
        (item) => item.pizzaId === action.payload,
      );
      selected.quantity--;
      selected.totalPrice = selected.unitPrice * selected.quantity;
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const {
  addItem,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;

export const getCart = (state) => state.cart.cart;

export const getTotalCartQuantity = (state) =>
  state.cart.cart.reduce((acc, curr) => acc + curr.quantity, 0);

export const getTotalCartPrice = (state) =>
  state.cart.cart.reduce((acc, curr) => acc + curr.totalPrice, 0);

export const getCurrentQuantityById = (id) => (state) =>
  state.cart.cart.find((item) => item.pizzaId === id)?.quantity ?? 0;

// Look into 'reselect' library for using selector functions in large applications as it might cause performance issues in large applications. This library can help with optimization
