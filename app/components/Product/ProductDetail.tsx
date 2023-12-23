import { Product } from "@/lib/redux/slices/productSlice/type";
import { Breadcrumbs, Button, Link, Rating, Typography } from "@mui/material";
import { FunctionComponent } from "react";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import VisibilityIcon from '@mui/icons-material/Visibility';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';

interface ProductDescriptionProps {
  productDetail: Product,
  isAddedOnCart: boolean,
  isWishlisted: boolean,
  onClickCart: () => void,
  onClickWishlist: () => void,
}

const ProductDescription: FunctionComponent<ProductDescriptionProps> = ({
  productDetail,
  isAddedOnCart,
  isWishlisted,
  onClickCart,
  onClickWishlist,
}) => {
  const { title, rating, price, discountPercentage, stock, description } = productDetail

  let discountedPrice = 0;
  if (productDetail) {
    discountedPrice = price - (price * discountPercentage / 100)
  }

  return (
    <section role="details" className="font-bold">
      <h3 className="text-text mb-2">{title}</h3>
      <div className="inline-flex items-center mb-4">
        <Rating name="read-only" value={rating} readOnly />
        <span className="text-text text-sm pl-1">10 Reviews</span>
      </div>
      <h2 className="font-bold text-xl mb-2">${price}</h2>

      <p className="text-gray">
        Availability:
        <span className={stock ? `text-primary` : `text-red`}> {stock ? 'In Stock' : 'Out of stock'} </span>
      </p>


      <p className="text-gray mt-12">{description}</p>

      <hr className="mt-8" />

      <div className="flex space-x-4 items-center mt-16">
        <Button variant="contained" className="bg-primary">Select Options</Button>
        <Button variant="text" disabled={isWishlisted} onClick={onClickWishlist}>
          {isWishlisted ? <FavoriteIcon /> : <FavoriteBorderIcon />}
        </Button>
        <Button variant="text" disabled={isAddedOnCart} onClick={onClickCart}>
          {isAddedOnCart ? <RemoveShoppingCartIcon /> : <ShoppingCartIcon />}
        </Button>
        <Button variant="text">
          <VisibilityIcon />
        </Button>
      </div>
    </section>
  );
}

export default ProductDescription;