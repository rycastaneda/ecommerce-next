import React, { FunctionComponent } from 'react';
import { Product } from '../../../lib/redux/slices/productSlice/type';
import ProductCard from './ProductCard';
import { Button, Skeleton } from '@mui/material';

interface ProductCatalogProps {
  products: Product[],
  loading: boolean,
  showNext: boolean,
  loadNext?: () => {}
}

const ProductCatalog: FunctionComponent<ProductCatalogProps> = ({
  products, loading, showNext, loadNext
}) => {

  const productRender = products.map((product) => {
    return (<ProductCard key={`product-${product.id}`} {...product} />)
  })

  return (
    <div className='container'>
      <div className="lg:grid lg:grid-cols-5 gap-4">
        {productRender}
        {loading && 
          Array.from(Array(10).keys()).map(count => {
              return (
                <div key={`count-${count}`}>
                  <Skeleton variant="rectangular" width={210} height={120} />
                  <Skeleton variant="rectangular" width={210} height={15} className='mb-1' />
                  <Skeleton variant="rectangular" width={210} height={15} className='mb-1' />
                  <Skeleton variant="rectangular" width={210} height={15} className='mb-1' />
                </div>
              )
          })
        }
      </div>
      {showNext && 
        <div className='text-center py-8 font-bold'>
          <Button variant="outlined" onClick={loadNext}> Load Next Products</Button>}
        </div>
      }
    </div>
  );
}

export default ProductCatalog