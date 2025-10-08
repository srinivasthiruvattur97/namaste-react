import { createSlice, current } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, actions) => {
      state.items.push(actions.payload);
      console.log(current(state));
    },
    removeItem: (state, actions) => {
      state.items.pop();
      console.log(current(state));
    },
    clearCart: (state) => {
      state.items.length = 0;
      // immer wraps your state inside proxy object
      // so  we cannot do state=[]; this will not work as state is local variable here and it doesnt tell immer to change redux state
      // but doing property change for state like state.items.length = 0
      // immer detects this mutation of the property and return the immutable copy
      // or else we can return {items: []}
    },
  },
});
console.log(CartSlice);

export const { addItem, removeItem, clearCart } = CartSlice.actions;

export default CartSlice.reducer;
