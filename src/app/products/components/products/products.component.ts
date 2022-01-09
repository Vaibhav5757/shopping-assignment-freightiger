import { Component, OnDestroy, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';
import { Product } from 'src/app/models/products';

import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit, OnDestroy {
  public products$!: Subscription;
  public products: Product[] = [];

  constructor(private productsSvc: ProductsService) {}

  ngOnInit(): void {
    this.products$ = this.productsSvc
      .getProducts()
      .subscribe((el) => (this.products = el.products));
  }

  ngOnDestroy(): void {
    this.products$.unsubscribe();
  }
}
