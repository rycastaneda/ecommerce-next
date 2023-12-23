'use client'
import { fetchProductsThunk, reduxStore, selectProductState, selectProducts, selectShowNext, useDispatch, useSelector } from '@/lib/redux'

import { Category, CategoryCards } from '../../app/components/Category'
import { ProductCatalog } from '../../app/components/ProductCatalog'

const categories: Category[] = [{
  itemCount: 5,
  name: "Furniture",
  link: '/furniture',
  background: 'https://i.dummyjson.com/data/products/26/thumbnail.jpg'
}, {
  itemCount: 5,
  name: "Appliances",
  link: '/Appliances',
  background: 'https://i.dummyjson.com/data/products/25/thumbnail.jpg'
}, {
  itemCount: 5,
  name: "Paint",
  link: '/Paint',
  background: 'https://i.dummyjson.com/data/products/24/thumbnail.jpg'
}, {
  itemCount: 5,
  name: "Chairs",
  link: '/Chairs',
  background: 'https://i.dummyjson.com/data/products/7/thumbnail.jpg'
}]

reduxStore.dispatch(fetchProductsThunk())

export const Home = () => {
  const dispatch = useDispatch()
  const products = useSelector(selectProducts)
  const productState = useSelector(selectProductState)
  const showNext = useSelector(selectShowNext)

  return (
    <div className='container mx-auto'>
      <div className="my-16">
        <CategoryCards categories={categories}/>
      </div>
      <div className="my-16">
        <div className='text-center mb-16 font-bold'>
          <p className="text-gray text-lg pb-2">Featured Products</p>
          <h2 className='text-xl font-bold pb-2'>BESTSELLER PRODUCTS</h2>
          <span className="text-gray">Problems trying to resolve the conflict between </span>
        </div>
        <ProductCatalog showNext={showNext} loading={productState === 'loading'} products={products} loadNext={() => dispatch(fetchProductsThunk())}/>
      </div>
    </div>
  )
}
