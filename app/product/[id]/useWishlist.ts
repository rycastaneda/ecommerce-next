import { wishlistSlice, selectWishlistItems } from '@/lib/redux';
import { useAppDispatch } from '@/lib/redux/createAppAsyncThunk';
import { Product } from '@/lib/redux/slices/productSlice/type';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';

const useWishlist = (product: Product | null): {
  wishlistItems: Product[];
  isAddedOnWishlist: boolean;
  showWishlistMessage: boolean;
  setShowWishlistMessage: Function;
  onClickWishlist: () => void;
  onRemove: (id: number) => void;
} => {

  const dispatch = useAppDispatch()
  const wishlistItems = useSelector(selectWishlistItems);

  const [showWishlistMessage, setShowWishlistMessage] = useState(false)


  useEffect(() => {
    let itemsFromStorage = [];
    if (typeof window !== 'undefined' && window.localStorage) {
      itemsFromStorage = JSON.parse(window.localStorage.getItem('wishlist') || '[]')
    }

    dispatch(wishlistSlice.actions.loadItems(itemsFromStorage))
  }, [])
  
  const isAddedOnWishlist = useMemo(() => {
    if (product) {

      return Boolean(wishlistItems.find(item => item.id === product.id))
    }
    return false;
  }, [product, wishlistItems])

  const onClickWishlist = useCallback(() => {
    if (!product) {
      return
    }

    if (isAddedOnWishlist) {
      dispatch(wishlistSlice.actions.delete(product.id))
      return;
    }

    dispatch(
      wishlistSlice.actions.add(product)
    )
    setShowWishlistMessage(true)
  }, [isAddedOnWishlist, product, dispatch, wishlistSlice])

  const onRemove = useCallback((id: number) => {
      dispatch(wishlistSlice.actions.delete(id))
  }, [dispatch, wishlistSlice])

  return {
    wishlistItems,
    isAddedOnWishlist,
    onClickWishlist,
    showWishlistMessage,
    setShowWishlistMessage,
    onRemove
  };
}

export default useWishlist;