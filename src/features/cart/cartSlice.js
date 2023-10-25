const { createSlice } = require("@reduxjs/toolkit");

const pizza12 = {
  pizzaId: 12,
  name: "Mediterranean",
  quantity: 2,
  unitPrice: 16,
  totalPrice: 32,
};
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
      const selected = state.cart.find(
        (item) => item.pizzaId === action.payload,
      );
      selected.quantity++;
      selected.totalPrice = selected.unitPrice * selected.quantity;
    },
    decreaseItemQuantity(state, action) {
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
