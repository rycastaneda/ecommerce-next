import { Product } from "./type"

export const fetchProducts = async (
  page = 1
): Promise<{ products: Product[], totalPage: number }> => {
  let url = `https://dummyjson.com/products`;
  if (page > 1) {
    const skip = 30 * page;
    const limit = 30
    url += `?skip=${skip}&limit=${limit}`
  }

  const response = await fetch(url, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  })
  const result = await response.json()

  return {...result, totalPage: Math.ceil(result.total / result.limit) }
}
