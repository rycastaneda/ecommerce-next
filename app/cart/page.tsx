'use client'

import { useCart } from "../components/Cart"
import Cart from "../components/Cart/Cart"
import { ThemeProvider, createTheme } from '@mui/material'

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

  return (
    <ThemeProvider theme={theme}>
      <div className="my-10 mx-auto container">
        {cartStatus === 'loaded' && <Cart cartItems={cartItems} onIncrement={onIncrement} onDecrement={onDecrement}/>}
      </div>
    </ThemeProvider>
  )
}
