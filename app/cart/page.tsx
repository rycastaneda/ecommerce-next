'use client'

import { useCart } from "../components/Cart"
import Cart from "../components/Cart/Cart"
import { ThemeProvider, createTheme } from '@mui/material'
import { useEffect } from "react";

const theme = createTheme({
  palette: {
    primary: {
      main: '#23A6F0',
      contrastText: '#fff'
    },
  },
});

export default function CartPage() {
  const { cartItems, cartStatus, onIncrement, onDecrement } = useCart(null);
  useEffect(() => {
    document.title = `Ecommerce - Cart`
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <div className="my-10 px-4 lg:px-0 lg:mx-auto container">
        {cartStatus === 'loaded' && <Cart cartItems={cartItems} onIncrement={onIncrement} onDecrement={onDecrement}/>}
      </div>
    </ThemeProvider>
  )
}

