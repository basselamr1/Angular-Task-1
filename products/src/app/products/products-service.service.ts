import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProducts } from './productsInter';
import { IProductsObj } from './productsObj';
@Injectable({
  providedIn: 'root',
})
export class ProductsServiceService {
  constructor(private http: HttpClient) {}

  renderProducts(): Observable<IProducts[]> {
    return this.http.get<IProducts[]>('https://dummyjson.com/products');
  }
  fetchProductById(productID: string): Observable<IProducts> {
    return this.http.get<IProducts>(
      `https://dummyjson.com/products/${productID}`
    );
  }
}
