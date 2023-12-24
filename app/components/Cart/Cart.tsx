import { CartItem } from "@/lib/redux";
import Link from "next/link";
import { FunctionComponent } from "react";
import { default as CartItemComponent}  from "./CartItem";

interface CartProps {
  cartItems: CartItem[],
  total: number;
  onIncrement: (id: number) => void;
  onDecrement: (productToUpdate: CartItem) => void;
}

const Cart: FunctionComponent<CartProps> = ({
  cartItems, onIncrement, onDecrement, total
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

      <div className="flex my-6">
        <h2 className="ml-auto font-bold lg:text-2xl">Total: <span className="text-secondary">${total.toFixed(2)}</span></h2>
      </div>
    </div>

  );
}

export default Cart;