import { CartItem } from "@/lib/redux";
import { FunctionComponent } from "react";
import { Button } from '@mui/material';

interface CartItemProps {
  cartItem: CartItem,
  onIncrement: (id: number) => void;
  onDecrement: (productToUpdate: CartItem) => void;
}

const CartItem: FunctionComponent<CartItemProps> = ({
  cartItem,
  onIncrement,
  onDecrement
}) => {
  const { title, thumbnail, quantity, price, discountPercentage, id } = cartItem

  let discountedPrice = price ?? 1;
  if (discountPercentage) {
    discountedPrice = discountedPrice - (discountedPrice * discountPercentage / 100);
  }

  if(!id) {
    return <></>
  }

  return (
    <>
      <section role="cart-item" className="flex items-center font-bold my-6">
        <div className="w-48">
          <img src={thumbnail} className="aspect-square w-full h-24" alt="" />
        </div>
        <div className="w-full pl-6">
          <h2>{title}</h2>
          <p><span className="text-gray">${price}</span> <span className="text-secondary">${discountedPrice.toFixed(2)}</span></p>
        </div>
        <div className="w-48 flex space-x-4 items-center">
          <Button onClick={() => onIncrement(id)} variant="contained">+</Button>
          <h4>{quantity}</h4>
          <Button onClick={() => onDecrement(cartItem)} variant="contained">-</Button>
        </div>
      </section>
      <hr className="mt-6" />
    </>

  );
}

export default CartItem;