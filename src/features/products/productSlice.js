/* eslint-disable no-unused-vars */
/* eslint-disable no-constant-binary-expression */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  products: [],
  isLoading: false,
  error: null,
};

const BASE_URL = "http://localhost:3003/products";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const res = await axios.get(BASE_URL);
    return res.data;
  }
);

export const deleteProducts = createAsyncThunk(
  "products/deleteProducts",
  async (id) => {
    const res = await axios.delete(`${BASE_URL}/${id}`);
    return id;
  }
);

export const createProducts = createAsyncThunk(
  "products/createProducts",
  async (product) => {
    const res = await axios.post(BASE_URL, product);
    return res.data;
  }
);

export const updateProducts = createAsyncThunk(
  "products/updateProducts",
  async ({id, product}) => {
    const res = await axios.put(`${BASE_URL}/${id}`, product);
    console.log(res.data);
    return res.data;
  }
);

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    })
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.products = action.payload;
      state.isLoading = false;
    })
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.isLoading = false;
      state.error = "Failed to fetch data" || action.error.message;
    })
    builder.addCase(deleteProducts.fulfilled, (state, action) => {
      state.products = state.products.filter((product)=>
      product.id != action.payload);
    });
    builder.addCase(createProducts.fulfilled, (state, action) => {
      state.products.push(action.payload);
    });
    builder.addCase(updateProducts.fulfilled, (state, action) => {
      const index= state.products.findIndex((product)=> 
        product.id == action.payload.id);
      state.products[index]= action.payload;
    });
  },
});

export default productSlice.reducer;
