/* Instruments */
import type { ReduxState } from '@/lib/redux'

export const selectCartItems = (state: ReduxState) => state.cart.items
export const selectCartStatus = (state: ReduxState) => state.cart.status
