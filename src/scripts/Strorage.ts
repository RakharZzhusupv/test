import { TProducts } from "./Products";
import storages from "./data/storage.json";

export type TStorage = {
  city: string;
  name: string;
  address: string;
  id: number;
  products: TProducts[];
};

export class Storages {
  private _data: TStorage[];

  constructor() {
    this._data = storages;
  }

  get allStorages() {
    return this._data;
  }

  protected getStorage(id: number): TStorage {
    return this._data.find((item) => item.id === id);
  }

  private set updateStorage(storage: TStorage) {
    this._data = this._data.map((item) => {
      if (item.id !== storage.id) return item;
      return storage;
    });
  }

  protected setProducts(id: number, product: TProducts) {
    const storage = this.getStorage(id);
    storage.products.push(product);
    this.updateStorage = storage;
  }
}
