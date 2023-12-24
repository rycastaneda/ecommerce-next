/* Instruments */
import type { ReduxState } from '@/lib/redux'

export const selectCartItems = (state: ReduxState) => state.cart.items
export const selectCartStatus = (state: ReduxState) => state.cart.status
export const selectTotal = (state: ReduxState) => {
    return state.cart.items.reduce((a, b) => {
        let discountedPrice2 = b.price - (b.price * b.discountPercentage / 100);
        let totalB = discountedPrice2 * b.quantity;
        return a + totalB
    }, 0)
}
