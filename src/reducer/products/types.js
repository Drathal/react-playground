// @flow
export type ProductId = number

export type Product = {
  id: number,
  description: string,
  name?: string,
  productImage?: string
}

export type Products = Array<Product>

export type AddProductAction = {
  type: string,
  product: Product
}

export type DeleteProductAction = {
  type: string,
  id: ProductId
}

export type SetProductsAction = {
  type: string,
  products: Products
}
