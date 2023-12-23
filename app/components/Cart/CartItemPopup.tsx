import { Product } from "@/lib/redux/slices/productSlice/type";
import { FunctionComponent } from "react";
import { Button } from "@mui/material";
import { CartItem } from "@/lib/redux";
import Link from "next/link";

interface CartItemProp extends Product {
  quantity: number;
  onRemove: (id: number) => void
}

const CartItemPopup: FunctionComponent<CartItemProp> = (cartItem) => {
  const { thumbnail, title, price, discountPercentage, onRemove, id } = cartItem

  let discountedPrice = price ?? 1;
  if (discountPercentage) {
    discountedPrice = discountedPrice - (discountedPrice * discountPercentage / 100);
  }

  return (
    <section role="cart-item" className="flex items-center relative font-bold mb-2">
      <div className="w-48">
        <img src={thumbnail} className="aspect-square rounded w-full h-24" alt="" />
      </div>
      <div className="w-full pl-6">
        <h2>{title}</h2>
        <p><span className="text-gray">${price}</span> <span className="text-secondary">${discountedPrice.toFixed(2)}</span></p>
      </div>
      <div className="w-48 text-center">
        <Button variant="outlined" className="text-primary text-center px-2" onClick={() => onRemove(id)}>
          Remove
        </Button>
      </div>
    </section>
  );
}

export default CartItemPopup;