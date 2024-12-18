import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState={
    products:[],
    isLoading:false,
    error: null
};

const BASE_URL= 'http://localhost:3003/products';

export const fetchProducts= createAsyncThunk('products/fetchProducts',
    async()=>{
        const res= await axios.get(BASE_URL);
        console.log(res.data);
      }
)
const productSlice= createSlice({
name:'products',
initialState,
reducers:{

}

});

export default productSlice.reducer;