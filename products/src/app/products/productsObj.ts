import { IProducts } from './productsInter';

export interface IProductsObj {
  limit: number;
  products: IProducts[];
  skip: number;
  total: number;
}
