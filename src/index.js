import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {configureStore} from "@reduxjs/toolkit";
import {Provider} from "react-redux";
import productReducer, { productFetch } from './features/productsSlice';
import cartReducer from "./features/cartSlice";
import { productsApi } from './features/productsApi';
const store = configureStore({
  reducer:{
    products: productReducer,
    cartItems:cartReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleWare: (getDefaultMiddleWare) => {
    getDefaultMiddleWare().concat(productsApi.middleware)
  }
});
store.dispatch(productFetch()); // enables asyncthunk to fetch the data
ReactDOM.render(
  <React.StrictMode>
   <Provider store={store}>
   <App />
   </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

