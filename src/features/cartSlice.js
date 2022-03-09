import {createSlice} from "@reduxjs/toolkit";
const initialState = {
    cart: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [],
    cartTotalAmount: 0,
    cartTotalQuantity: 0,
}
const cartSlice = createSlice({
    name: "cartSlice",
    initialState,
    reducer: {
        
    },
    extraReducers: {}
});
export default cartSlice.reducer;