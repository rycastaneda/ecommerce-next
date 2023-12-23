/* Instruments */
import { cartSlice, counterSlice, productDetailSlice, productSlice, wishlistSlice } from './slices'

export const reducer = {
  cart: cartSlice.reducer,
  wishlist: wishlistSlice.reducer,
  counter: counterSlice.reducer,
  product: productSlice.reducer,
  productDetail: productDetailSlice.reducer
}
