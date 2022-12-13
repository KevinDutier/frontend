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
            state.value = state.value.filter(article => article.model !== action.payload.model);
        }
    }
});
 
export const { addArticle, removeArticle } = cartSlice.actions;
export default cartSlice.reducer;