import {createSlice} from "@reduxjs/toolkit";
const initialState = {
    cartItems: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [],
    cartTotalQuantity:0,
    cartTotalAmount:0,
}
const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        addToCart(state,action){
            const productInCart = state.cartItems.findIndex((item) => item.id === action.payload.id);
            if(productInCart >= 0) {
                state.cartItems[productInCart].cartQuantity += 1
            } else {
                const tempProduct = {...action.payload, cartQuantity:1}
                state.cartItems.push(tempProduct);
            };
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
        },
        removeFromCart(state,action) {
            state.cartItems.map((cartItem) => {
                if(cartItem.id === action.payload.id) {
                    const removeItem = state.cartItems.filter((item) => item.id !== cartItem.id);
                    state.cartItems = removeItem;
                };
                localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
                return state;
            });
        },
        decreaseCart(state, action) {
            const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id);
      
            if (state.cartItems[itemIndex].cartQuantity > 1) {
              state.cartItems[itemIndex].cartQuantity -= 1;
      
            } else if (state.cartItems[itemIndex].cartQuantity === 1) {
              const removeCartItem = state.cartItems.filter((item) => item.id !== action.payload.id);
      
              state.cartItems = removeCartItem;
            }
      
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
          },
        cartTotal(state, action) {
            let { total, quantity } = state.cartItems.reduce(
              (cartTotal, cartItem) => {
                const { price, cartQuantity } = cartItem;
                const itemTotal = price * cartQuantity;
      
                cartTotal.total += itemTotal;
                cartTotal.quantity += cartQuantity;
      
                return cartTotal;
              },
              {
                total: 0,
                quantity: 0,
              }
            );
            total = parseFloat(total.toFixed(2));
            state.cartTotalQuantity = quantity;
            state.cartTotalAmount = total;
          },
        clearCart(state,action) {
            state.cartItems = [];
            localStorage.setItem("cartItem", JSON.stringify(state.cartItems))
        }
    },
})
export const {addToCart,removeFromCart,cartTotal,decreaseCart,clearCart} = cartSlice.actions;
export default cartSlice.reducer;