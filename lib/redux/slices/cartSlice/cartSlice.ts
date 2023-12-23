/* Core */
import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Product } from '../productSlice/type';



const initialState: CartSlice = {
  items: [],
  status: 'initialized'
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<CartItem>) => {
      const isAdded = Boolean(state.items.find(item => item.id === action.payload.id))
      if(isAdded) {
        return;
      }

      state.items = state.items.concat(action.payload)
      window.localStorage.setItem('cart', JSON.stringify(state.items))
    },
    delete: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(item => {
        return item.id !== action.payload
      })
      window.localStorage.setItem('cart', JSON.stringify(state.items))
    },
    incrementQuantity: (state, action: PayloadAction<number>) => {
      const index = state.items.findIndex(item => item.id == action.payload)
      const itemToUpdate = state.items.find(item => item.id == action.payload)

      if(!itemToUpdate) {
        return
      }

      state.items = [
        ...state.items.slice(0, index),
        {
          ...itemToUpdate,
          quantity: itemToUpdate?.quantity + 1
        },
        ...state.items.slice(index + 1),
      ]
    },
    descrementQuantity: (state, action: PayloadAction<number>) => {
      const index = state.items.findIndex(item => item.id == action.payload)
      const itemToUpdate = state.items.find(item => item.id == action.payload)

      if(!itemToUpdate) {
        return
      }

      state.items = [
        ...state.items.slice(0, index),
        {
          ...itemToUpdate,
          quantity: itemToUpdate?.quantity - 1
        },
        ...state.items.slice(index + 1),
      ]
    },
    loadItems: (state, action: PayloadAction<CartItem[]>) => {
      state.items = action.payload;
      state.status = 'loaded'
    }
  },
  // extraReducers: (builder) => {
   
  // },
})

export interface CartItem extends Partial<Product>{
  quantity: number,
} 
/* Types */
export interface CartSlice {
  items: CartItem[],
  status: 'initialized' | 'loaded' 
}
