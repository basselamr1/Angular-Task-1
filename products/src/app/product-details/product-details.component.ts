import { Component, OnInit } from '@angular/core';
import { IProducts } from '../products/productsInter';
import { ActivatedRoute } from '@angular/router';
import { ProductsServiceService } from '../products/products-service.service';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  product!: IProducts;
  constructor(
    private route: ActivatedRoute,
    private productService: ProductsServiceService
  ) {}
  ngOnInit() {
    const productID = this.route.snapshot.paramMap.get('id');
    if (productID) {
      this.productService.fetchProductById(productID).subscribe((product) => {
        this.product = product;
      });
    }
  }
}
