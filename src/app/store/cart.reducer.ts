import { ActionReducer, createReducer, INIT, on, UPDATE } from '@ngrx/store';
import { Product } from '../models/products';
import { addToCart, clearCart, removeFromCart } from './cart.action';

export const initialCart: Product[] = [];

export const cartReducer = createReducer(
  initialCart,
  on(clearCart, (_) => []),
  on(addToCart, (entries, product) => {
    return [...entries, product];
  }),
  on(removeFromCart, (entries, product) => {
    const entriesClone: Product[] = JSON.parse(JSON.stringify(entries));
    const found = entriesClone.find((e) => e.productId == product.productId);
    if (found) {
      entriesClone.splice(entriesClone.indexOf(found), 1);
    }
    return entriesClone;
  })
);

export const metaReducerLocalStorage = (
  reducer: ActionReducer<any>
): ActionReducer<any> => {
  return (state, action) => {
    if (action.type === INIT || action.type === UPDATE) {
      const storageValue = localStorage.getItem('state');
      if (storageValue) {
        try {
          return JSON.parse(storageValue);
        } catch {
          localStorage.removeItem('state');
        }
      }
    }
    const nextState = reducer(state, action);
    localStorage.setItem('state', JSON.stringify(nextState));
    return nextState;
  };
};
