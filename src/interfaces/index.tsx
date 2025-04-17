export interface IProduct {
  productId: string;
  productName: string;
  description: string;
  price: number;
  imageUrl: string;
}

// export interface ICart {
//   productId: string;
//   quantity: number;
// }
export interface ICart {
  quantity: number;
  product: IProduct;
}

export interface ICheckout {
  paySuccess: boolean;
  productsInOrder: ICart[];
}
