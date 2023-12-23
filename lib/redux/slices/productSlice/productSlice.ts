/* Core */
import { createSlice } from '@reduxjs/toolkit'

/* Instruments */
import { fetchProductsThunk } from './thunks'
import { Product } from './type'

const initialState: ProductSliceState = {
  products: [],
  page: 1,
  totalPage: 1,
  status: 'idle',
}

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    reset: (state) => {
      state.products = []
      state.page = 1
      state.totalPage = 1
      state.status = 'idle'
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductsThunk.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchProductsThunk.fulfilled, (state, action) => {
        state.status = 'idle'
        state.products = state.products.concat(action.payload.products)
        state.page = state.page + 1;
        if (state.totalPage === 1) {
          state.totalPage = action.payload.totalPage;
        }
      })
  },
})

/* Types */
export interface ProductSliceState {
  products: Product[],
  page: number,
  totalPage: number,
  status: 'idle' | 'loading' | 'failed'
}
