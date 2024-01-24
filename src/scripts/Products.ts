import { Storages } from "./Strorage";
import products from "./data/products.json";
export type TProducts = {
  product_name: string;
  seller_name: string;
  quantity: number;
  price: number;
  delivery_id: number;
  id: number;
};

export class Products extends Storages {
  constructor() {
    super();
    products.forEach((item) => {
      this.setProducts(item.id, item);
    });
  }
  addProduct(newProduct: TProducts) {
    const newPoductId = this.generateUniqueId();
    this.setProducts(newPoductId, newProduct);
  }

  private generateUniqueId(): number {
    return new Date().getTime();
  }
}
