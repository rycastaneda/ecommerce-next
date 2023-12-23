'use client'
import { useParams } from "next/navigation";
import { ThemeProvider, createTheme, Skeleton, Alert } from '@mui/material'
import { ProductDetail, ProductImages } from "@/app/components/Product";
import Description from "@/app/components/Product/Description";
import Link from "next/link";
import { ProductCatalog } from "@/app/components/ProductCatalog";
import useProductDetails from "./useProductDetails";
import { useCart } from "@/app/components/Cart";
import { Snackbar } from '@mui/material';
import { useWishlist } from '@/app/components/Wishlist';
import { useEffect } from "react";

const theme = createTheme({
  palette: {
    primary: {
      main: '#23A6F0',
      contrastText: '#fff'
    },
  },
});

export default function ProductDetailPage() {
  const params = useParams<{ id: string }>();
  const {
    productDetail,
    products,
    productsState,
  } = useProductDetails(params)

  const {
    isAddedOnCart,
    onClickCart,
    showCartMessage,
    setShowCartMessage
  } = useCart(productDetail)

  const {
    isAddedOnWishlist,
    onClickWishlist,
    showWishlistMessage,
    setShowWishlistMessage
  } = useWishlist(productDetail)


  const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
    setShowCartMessage(false);
  };

  const handleWishlistClose = (event: React.SyntheticEvent | Event, reason?: string) => {
    setShowWishlistMessage(false);
  };

  useEffect(() => {
    if(productDetail) {
      document.title = `Ecommerce - ${productDetail?.title}`
    }
  }, [productDetail])

  return (
    <ThemeProvider theme={theme}>

      {productDetail &&
        <div className='container px-4 lg:mx-auto lg:my-10 my-6'>
          <div className="lg:gap-8 lg:grid lg:grid-cols-2">
            {
              productsState === 'loading' ? <Skeleton variant="rectangular" width={`100%`} height={`100%`} />
                : <ProductImages thumbnail={productDetail.thumbnail} images={productDetail.images} />
            }
            {
              productsState === 'loading' ?
                <>
                  <Skeleton variant="rectangular" width={`100%`} height={120} />
                  <Skeleton variant="rectangular" width={`100%`} height={150} />
                  <Skeleton variant="rectangular" width={`100%`} height={100} />
                </>
                : <ProductDetail isAddedOnCart={isAddedOnCart}
                  isWishlisted={isAddedOnWishlist}
                  onClickCart={onClickCart}
                  onClickWishlist={onClickWishlist}
                  productDetail={productDetail} />
            }

          </div>
          <div className='mx-auto w-max items-center text-gray py-8 font-bold flex lg:space-x-8 space-x-4'>
            <Link href="#">Description</Link>
            <Link href="#">Additional Info</Link>
            <Link href="#">Reviews <span>(0)</span></Link>
          </div>
          <div className="py-4">
            <Description productDetail={productDetail} />
          </div>

          <div className="py-4 font-bold mx-6">
            <h1>BESTSELLER PRODUCTS</h1>
            <hr className="mt-6" />
          </div>
          <div className="py-4 mx-6">
            <ProductCatalog showNext={false} loading={productsState === 'loading'} products={products} />
          </div>
          <Snackbar
            open={showCartMessage}
            autoHideDuration={6000}
            onClose={handleClose}
          >
            <Alert severity="success" sx={{ width: '100%' }}>Item added to cart</Alert>
          </Snackbar>
          <Snackbar
            open={showWishlistMessage}
            autoHideDuration={6000}
            onClose={handleWishlistClose}
          >
            <Alert severity="success" sx={{ width: '100%' }}>Item added to wishlist</Alert>
          </Snackbar>
        </div>
      }
    </ThemeProvider>

  )
}

