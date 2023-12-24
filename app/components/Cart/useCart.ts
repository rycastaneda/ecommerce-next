import { CartItem, cartSlice, selectCartItems, selectCartStatus, selectTotal } from '@/lib/redux';
import { useAppDispatch } from '@/lib/redux/createAppAsyncThunk';
import { Product } from '@/lib/redux/slices/productSlice/type';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';

const useCart = (product: Product | null): {
  cartItems: CartItem[];
  cartStatus: string;
  isAddedOnCart: boolean;
  showCartMessage: boolean;
  setShowCartMessage: Function;
  onClickCart: () => void;
  onIncrement: (id: number) => void;
  onDecrement: (productToUpdate: CartItem) => void;
  onRemove: (id: number) => void;
  cartTotal: number;
} => {

  const dispatch = useAppDispatch()
  const cartItems = useSelector(selectCartItems);
  const cartStatus = useSelector(selectCartStatus);
  const cartTotal = useSelector(selectTotal);
  const [showCartMessage, setShowCartMessage] = useState(false)

  useEffect(() => {
    let itemsFromStorage = [];
    if (typeof window !== 'undefined' && window.localStorage) {
      itemsFromStorage = JSON.parse(window.localStorage.getItem('cart') || '[]')
    }

    dispatch(cartSlice.actions.loadItems(itemsFromStorage))
  }, [])

  const isAddedOnCart = useMemo(() => {
    if (product) {

      return Boolean(cartItems.find(item => item.id === product.id))
    }
    return false;
  }, [product, cartItems])

  const onClickCart = useCallback(() => {
    if (!product) {
      return
    }

    if (isAddedOnCart) {
      dispatch(cartSlice.actions.delete(product.id))
      return;
    }

    dispatch(
      cartSlice.actions.add({
        ...product,
        quantity: 1,
      })
    )

    setShowCartMessage(true)
  }, [isAddedOnCart, product, dispatch, cartSlice])

  const onIncrement = useCallback((id: number) => {
    dispatch(cartSlice.actions.incrementQuantity(id))
  }, [dispatch, cartSlice])

  const onDecrement = useCallback((productToUpdate: CartItem) => {
    if(!productToUpdate?.id) {
      return
    }
    if(productToUpdate.quantity === 1) {
      dispatch(cartSlice.actions.delete(productToUpdate.id))
      return;
    } 

    cartSlice.actions.descrementQuantity(productToUpdate?.id)

  }, [dispatch, cartSlice])

  const onRemove = useCallback((id: number) => {
      dispatch(cartSlice.actions.delete(id))
  }, [dispatch, cartSlice])

  return {
    cartItems,
    isAddedOnCart,
    cartStatus,
    onClickCart,
    onIncrement,
    onDecrement,
    onRemove,
    showCartMessage,
    setShowCartMessage,
    cartTotal: cartTotal.toFixed(2)
  };
}

export default useCart;