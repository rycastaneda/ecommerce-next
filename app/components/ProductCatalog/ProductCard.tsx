import React, { FunctionComponent } from 'react';
import { Product } from '@/lib/redux/slices/productSlice/type';
import Link from 'next/link';

interface ProductCardProps extends Product {
  classNameExt?: string
}

const ProductCard: FunctionComponent<ProductCardProps> = ({ id, title, brand, description, discountPercentage, price, thumbnail, images, classNameExt }) => {
  const discountedPrice = price - (price * discountPercentage / 100)
  return (
    <div className={`relative font-bold bg-center lg:text-left text-center p-4 ${classNameExt ?? ''}`}>
      <div className='h-59 flex items-center'>
        <img src={thumbnail} className='h-full mx-auto aspect-square' alt={description} />
      </div>
      <section role='product-description' className='my-4'>
        <p className="text-black line-clamp-2 h-12 overflow-hidden">{title}</p>
        <p className="text-gray pb-2">{brand}</p>
        <p><span className="text-gray">${price}</span> <span className="text-secondary">${discountedPrice.toFixed(2)}</span></p>
      </section>
      <Link href={`/product/${id}`} className='after:absolute after:inset-0' />
    </div>
  );
}

export default ProductCard;