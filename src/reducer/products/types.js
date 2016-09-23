export type Product = {
  id: number,
  name?: string,
  description: string,
  productImage?: string
}

export type Products = Array<Product>

export type ProductId = number

export type AddProductAction = {
  type: 'product/ADD_PRODUCT',
  product: Product
}

export type DeleteProductAction = {
  type: 'product/DELETE_PRODUCT',
  id: ProductId
}

export type SetProductsAction = {
  type: 'product/SET_PRODUCTS',
  products: Products
}

export type ProductAction
  = AddProductAction
  | DeleteProductAction
  | SetProductsAction
