export type Product = {
  id: number,
  name?: string,
  description: string,
  productImage?: string
}

export type Products = Array<Product>

export type ProductId = number
