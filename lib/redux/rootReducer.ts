/* Instruments */
import { cartSlice, productDetailSlice, productSlice, wishlistSlice } from './slices'

export const reducer = {
  cart: cartSlice.reducer,
  wishlist: wishlistSlice.reducer,
  product: productSlice.reducer,
  productDetail: productDetailSlice.reducer
}
