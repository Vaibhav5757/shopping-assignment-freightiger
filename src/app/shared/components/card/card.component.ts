import { Component, Input } from '@angular/core';
import { Product } from 'src/app/models/products';

import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { addToCart, removeFromCart } from 'src/app/store/cart.action';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input('product')
  product: Product = {
    landingPageUrl: '',
    loyaltyPointsEnabled: false,
    adId: '',
    isPLA: false,
    productId: 0,
    product: '',
    productName: '$$%%Product Name Placeholder%%$$',
    rating: 0,
    ratingCount: 0,
    isFastFashion: false,
    futureDiscountedPrice: 0,
    futureDiscountStartDate: '',
    discount: 0,
    brand: '$$%%Brand Placeholder%%$$',
    searchImage: 'assets/mens-shirts-500x500.jpg',
    effectiveDiscountPercentageAfterTax: 0,
    effectiveDiscountAmountAfterTax: 0,
    buyButtonWinnerSkuId: 0,
    buyButtonWinnerSellerPartnerId: 0,
    relatedStylesCount: 0,
    relatedStylesType: '',
    productVideos: [],
    inventoryInfo: [],
    sizes: '',
    images: [],
    gender: '',
    primaryColour: '',
    discountLabel: '',
    discountDisplayLabel: '',
    additionalInfo: '',
    category: '',
    mrp: 0,
    price: 0,
    advanceOrderTag: '',
    colorVariantAvailable: false,
    productimagetag: '',
    listViews: 0,
    discountType: '',
    tdBxGyText: '',
    catalogDate: '',
    season: '',
    year: '',
    isPersonalised: false,
    eorsPicksTag: '',
    personalizedCoupon: '',
    personalizedCouponValue: 0,
    productMeta: '',
    systemAttributes: [],
  };

  @Input('in-cart') inCart: boolean = false;

  products$!: Observable<Product[]>;

  constructor(private store: Store) {}

  addToCart(item: Product): void {
    this.store.dispatch(addToCart(item));
  }

  removeFromCart(item: Product): void {
    this.store.dispatch(removeFromCart(item));
  }
}
