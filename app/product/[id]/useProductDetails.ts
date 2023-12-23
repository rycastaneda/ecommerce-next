import {  fetchProductDetailThunk, fetchProductsThunk, productSlice, selectProductDetail, selectProductDetailState, selectProducts } from '@/lib/redux';
import { useAppDispatch } from '@/lib/redux/createAppAsyncThunk';
import { Product } from '@/lib/redux/slices/productSlice/type';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
const useProductDetails = (params: { id: string; } | null): {
  productDetail: Product | null;
  discountedPrice: number;
  status: string;
  products: Product[];
  productsState: string;
} => {

  const dispatch = useAppDispatch()

  const productDetail = useSelector(selectProductDetail)
  const status = useSelector(selectProductDetailState)

  const products = useSelector(selectProducts)
  const productsState = useSelector(selectProductDetailState)

  let discountedPrice = 0;
  if (productDetail) {
    discountedPrice = productDetail.price - (productDetail.price * productDetail.discountPercentage / 100)
  }

  useEffect(() => {
    if (params) {
      dispatch(fetchProductDetailThunk(+params.id))
    }
  }, [params])

  useEffect(() => {
    dispatch(productSlice.actions.reset())
    dispatch(fetchProductsThunk())
  }, [])

  return {
    productDetail,
    status,
    products,
    productsState,
    discountedPrice,
  };
}

export default useProductDetails;