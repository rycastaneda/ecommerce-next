/* Instruments */
import { createAppAsyncThunk } from '@/lib/redux/createAppAsyncThunk'
import { fetchProductDetail } from './fetchProductDetail'

export const fetchProductDetailThunk = createAppAsyncThunk(
  'product-detail/fetch',
  async (id: number) => {
    const response = await fetchProductDetail(id)
    return response
  }
)