import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
      const {name, image, cost} = action.payload;
      const existingItem = state.items.find(item => item.name === name);
      if(existingItem){
        existingItem.quantity++;
      } else {
        state.items.push({name, image, cost})
      }
    },

    removeItem: (state, action) => {
      state.items.filter(item => item.name !== action.payload.name)
    },

    updateQuantity: (state, action) => {
      const {name, cost} = action.payload;
      const existingItem = state.items.find(item => item.name === name);
      if (existingItem){
        existingItem.quantity++;
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
