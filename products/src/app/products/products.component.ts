import { Component, Input, OnInit } from '@angular/core';
import { ProductsServiceService } from './products-service.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProducts } from './productsInter';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products!: IProducts[];
  constructor(private productsService: ProductsServiceService) {}

  ngOnInit() {
    this.productsService.renderProducts().subscribe((data: any) => {
      this.products = data.products;
      this.products.forEach((product) => {
        console.log(product.title);
      });
    });
  }
  // fetchProducts() {
  //   this.http.get('https://dummyjson.com/products').subscribe((data: any) => {
  //     this.products = data.products;
  //     this.products.forEach((product: any) => {
  //       console.log(product.id);
  //     });
  //   });

  // fetch('https://dummyjson.com/products')
  //   .then((response) => response.json())
  //   .then((data) => {
  //     this.products = data.products;
  //     this.products.forEach((product: { title: any }) => {
  //       console.log(product.title);
  //     });
  //   });
}
