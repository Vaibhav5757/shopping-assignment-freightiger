import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from '../models/products';
import { clearCart } from '../store/cart.action';
import { cartItems } from '../store/cart.selectors';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  products$!: Observable<Product[]>;

  constructor(private store: Store) {
    this.products$ = this.store.select(cartItems);
  }

  ngOnInit(): void {}

  clearCart(): void {
    this.store.dispatch(clearCart());
  }
}
