import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getProduct,
  addProduct,
  updateProduct,
  deleteProduct,
} from "../../service/api";

// GET
export const fetchProducts = createAsyncThunk(
  "product/fetchProducts",
  async (titleQuery = "") => {
    return await getProduct(titleQuery);
  }
);

// ADD
export const createProduct = createAsyncThunk(
  "product/createProduct",
  async (data) => {
    return await addProduct(data);
  }
);

// UPDATE
export const editProduct = createAsyncThunk(
  "product/editProduct",
  async ({ id, data }) => {
    return await updateProduct(id, data);
  }
);

// DELETE
export const removeProduct = createAsyncThunk(
  "product/removeProduct",
  async (id) => {
    await deleteProduct(id);
    return id;
  }
);

const productSlice = createSlice({
  name: "product",
  initialState: {
    items: [],
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Get
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      // Add
      .addCase(createProduct.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      // Update
      .addCase(editProduct.fulfilled, (state, action) => {
        const index = state.items.findIndex(
          (item) => item.id === action.payload.id
        );
        if (index !== -1) {
          state.items[index] = action.payload;
        }
      })
      // Delete
      .addCase(removeProduct.fulfilled, (state, action) => {
        state.items = state.items.filter((item) => item.id !== action.payload);
      });
  },
});

export default productSlice.reducer;
