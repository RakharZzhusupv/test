import { Products, TProducts } from "./src/scripts/Products";
const productsStore = new Products();
const productsInstance = new Products();
const newProduct: TProducts = {
  product_name: "Ноутбук",
  seller_name: "Электроника ООО",
  quantity: 50,
  price: 500000,
  delivery_id: 101,
  id: 5,
};
productsInstance.addProduct(newProduct);
console.log("Добавлен новый товар:", newProduct);
console.log(productsStore.allStorages);
