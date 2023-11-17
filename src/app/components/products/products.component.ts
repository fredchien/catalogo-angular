import { Component, OnInit } from '@angular/core';
import { Product } from '../product/product';
import { ProductService } from './product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];

  constructor(private service: ProductService) { }

  ngOnInit(): void {
    this.service.list().subscribe((products) => {
      this.products = products;
    })
  }

}
