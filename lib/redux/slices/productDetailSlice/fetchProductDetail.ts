import { Product } from "./type"

export const fetchProductDetail = async (id: number): Promise<Product> => {
  let url = `https://dummyjson.com/products/${id}`;

  const response = await fetch(url, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  })
  const result = await response.json()

  return result
}
