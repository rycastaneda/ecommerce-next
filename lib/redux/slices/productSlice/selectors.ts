/* Instruments */
import type { ReduxState } from '@/lib/redux'

export const selectProducts = (state: ReduxState) => state.product.products
export const selectProductState = (state: ReduxState) => state.product.status
export const selectPage = (state: ReduxState) => state.product.page
export const selectShowNext = (state: ReduxState) => state.product.page < state.product.totalPage 
