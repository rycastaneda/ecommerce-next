import { Product } from "@/lib/redux/slices/productSlice/type";
import { FunctionComponent } from "react";
import { Button } from "@mui/material";

interface WishlistItemProp extends Product {
  onClick: (id: number) => void
}

const WishlistItem: FunctionComponent<WishlistItemProp> = ({
  thumbnail, title, price, discountPercentage, onClick, id
}) => {
  let discountedPrice = price ?? 1;
  if (discountPercentage) {
    discountedPrice = discountedPrice - (discountedPrice * discountPercentage / 100);
  }

  return (
    <section role="cart-item" className="flex items-center font-bold mb-2">
      <div className="w-48">
        <img src={thumbnail} className="aspect-square rounded w-full h-24" alt="" />
      </div>
      <div className="w-full pl-6">
        <h2>{title}</h2>
        <p><span className="text-gray">${price}</span> <span className="text-secondary">${discountedPrice.toFixed(2)}</span></p>
      </div>
      <div className="w-48 text-center">
        <Button variant="outlined" className="text-primary text-center px-2" onClick={() => onClick(id)}>
          Remove
        </Button>
      </div>
    </section>
  );
}

export default WishlistItem;