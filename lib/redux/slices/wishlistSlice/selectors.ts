/* Instruments */
import type { ReduxState } from '@/lib/redux'

export const selectWishlistItems = (state: ReduxState) => state.wishlist.items
