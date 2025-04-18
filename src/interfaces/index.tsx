export interface IProduct {
  productId: string;
  productName: string;
  description: string;
  price: number;
  imageUrl: string;
}

export interface ICart {
  quantity: number;
  product: IProduct;
}

export interface IAlert {
  message: string;
  type: "success" | "error";
}

export interface ICheckout {
  paySuccess: boolean;
  productsInOrder: {
    productId: string;
    quantity: number;
  }[];
}
