/* Instruments */
import type { ReduxState } from '@/lib/redux'

// export const selectProducts = (state: ReduxState) => state.product.products
export const selectProductDetail = (state: ReduxState) => state.productDetail.productDetail
export const selectProductDetailState = (state: ReduxState) => state.productDetail.status
// export const selectPage = (state: ReduxState) => state.product.page
// export const selectShowNext = (state: ReduxState) => state.product.page < state.product.totalPage 
