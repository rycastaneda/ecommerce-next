import { Product } from './../productSlice/type';
/* Core */
import { createSlice } from '@reduxjs/toolkit'

/* Instruments */
import { fetchProductDetailThunk } from './thunks'

const initialState: ProductDetailSliceState = {
  productDetail: null,
  status: 'idle',
}

export const productDetailSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductDetailThunk.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchProductDetailThunk.fulfilled, (state, action) => {
        state.status = 'idle'
        state.productDetail = action.payload
      })
  },
})

/* Types */
export interface ProductDetailSliceState {
  productDetail: Product | null,
  status: 'idle' | 'loading' | 'failed'
}
