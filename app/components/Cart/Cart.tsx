import { CartItem } from "@/lib/redux";
import Link from "next/link";
import { FunctionComponent } from "react";
import { default as CartItemComponent}  from "./CartItem";

interface CartProps {
  cartItems: CartItem[],
  onIncrement: (id: number) => void;
  onDecrement: (productToUpdate: CartItem) => void;
}

const Cart: FunctionComponent<CartProps> = ({
  cartItems, onIncrement, onDecrement
}) => {
  return (
    <div className="text-text">
      {cartItems.length ?
        <h1 className="font-bold text-xl">
          There are <span className="text-primary">{cartItems.length === 1 ? '1 Item': `${cartItems.length} Items` }</span> in your Cart
        </h1> :
        <h1 className="font-bold text-xl">
          Your cart is empty, click <Link href='/'>here</Link> to browse products
        </h1> 
      }

      <hr className="mt-6"/>

      {cartItems.map(item => <CartItemComponent onIncrement={onIncrement} onDecrement={onDecrement} key={item.id} cartItem={item} />)}
    </div>

  );
}

export default Cart;