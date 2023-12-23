/* Instruments */
import { createAppAsyncThunk } from '@/lib/redux/createAppAsyncThunk'
import { fetchProducts } from './fetchProducts'
import { selectPage } from '../..'



export const fetchProductsThunk = createAppAsyncThunk(
  'product/fetch',
  async (arg, { getState }) => {
    const page = selectPage(getState())
    const response = await fetchProducts(page)

    // The value we return becomes the `fulfilled` action payload
    return response
  }
)