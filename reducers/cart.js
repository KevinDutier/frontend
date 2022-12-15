import { createSlice } from "@reduxjs/toolkit";

// create the initial state, similar to useState()
const initialState = {
  value: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // add an article to the cart
    addArticle: (state, action) => {
      state.value.push(action.payload);
    },
    // remove an article from the cart
    removeArticle: (state, action) => {
        // only removes the first matching article
        const found = state.value.findIndex(cartArticle => cartArticle.model === action.payload.model)
        state.value.splice(found, 1)
    },
    emptyCart: (state, action) => {
      state.value = [];
    },
  },
});

export const { addArticle, removeArticle, emptyCart } = cartSlice.actions;
export default cartSlice.reducer;
