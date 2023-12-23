/* Core */
import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Product } from '../productSlice/type';

const initialState: WishlistSlice = {
  items: [],
  status: 'initialized'
}

export const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Product>) => {
      const isAdded = Boolean(state.items.find(item => item.id === action.payload.id))
      if(isAdded) {
        return;
      }
      
      state.items = [action.payload, ...state.items]
      window.localStorage.setItem('wishlist', JSON.stringify(state.items))
    },
    delete: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(item => {
        return item.id !== action.payload
      })
      window.localStorage.setItem('wishlist', JSON.stringify(state.items))
    },
    loadItems: (state, action: PayloadAction<Product[]>) => {
      state.items = action.payload;
      state.status = 'loaded'
    }
  },
})

/* Types */
export interface WishlistSlice {
  items: Product[],
  status: 'initialized' | 'loaded'
}
