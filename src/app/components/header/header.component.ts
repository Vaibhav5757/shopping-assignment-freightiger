import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  selectCartCountProducts,
  selectTotalPrice,
} from 'src/app/store/cart.selectors';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  totalPrice$!: Observable<number>;
  countProduct$!: Observable<number>;

  constructor(private store: Store) {
    this.countProduct$ = this.store.select(selectCartCountProducts);
    this.totalPrice$ = this.store.select(selectTotalPrice);
  }

  ngOnInit(): void {}
}
