import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Product } from '../models/products';

export const selectCartCountProducts = createSelector(
  createFeatureSelector('cart'),
  (state: Product[]) => {
    return state.length;
  }
);

export const selectTotalPrice = createSelector(
  createFeatureSelector('cart'),
  (state: Product[]) => {
    var totalPrice = 0;
    state.forEach((p) => (totalPrice += p.mrp));
    return totalPrice;
  }
);

export const cartItems = createSelector(
  createFeatureSelector('cart'),
  (state: Product[]) => {
    return state;
  }
);
