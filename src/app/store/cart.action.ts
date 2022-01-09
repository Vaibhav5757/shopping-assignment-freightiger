import { createAction, props } from '@ngrx/store';
import { Product } from '../models/products';

export const addToCart = createAction('[CART] Add Item', props<Product>());
export const removeFromCart = createAction(
  '[CART] Remove Item',
  props<Product>()
);
export const clearCart = createAction('[CART] Clear Cart');
