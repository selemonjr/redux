import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
    products:[],
    status:null
}

export const productFetch = createAsyncThunk( //action creator
    "productsSlice/productFetch",
    async () => { // payload creator
        const response = await axios.get("https://fakestoreapi.com/products");
        return response?.data
    } // this will generate three action types => pending,fulfilled,rejected
)

const productsSlice = createSlice({
    name:"productsSlice",
    initialState,
    reducers: {},
    extraReducers: { // handle the types created by the action creator
        [productFetch.pending]: (state) => {
            state.status = "pending"
        },
        [productFetch.fulfilled]: (state,action) => {
            state.status = "Success"
            state.products = action.payload;
        },
        [productFetch.rejected]: (state) => {
            state.status = "Error"
        }
    }
});
export default productsSlice.reducer;