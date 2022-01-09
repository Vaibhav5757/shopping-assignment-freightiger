export interface InventoryInfo {
  skuId: number;
  label: string;
  inventory: number;
  available: boolean;
}

export interface Image {
  view: string;
  src: string;
}

export interface SystemAttribute {
  attribute: string;
  value: string;
}

export interface Product {
  landingPageUrl: string;
  loyaltyPointsEnabled: boolean;
  adId: string;
  isPLA: boolean;
  productId: number;
  product: string;
  productName: string;
  rating: number;
  ratingCount: number;
  isFastFashion: boolean;
  futureDiscountedPrice: number;
  futureDiscountStartDate: string;
  discount: number;
  brand: string;
  searchImage: string;
  effectiveDiscountPercentageAfterTax: number;
  effectiveDiscountAmountAfterTax: number;
  buyButtonWinnerSkuId: number;
  buyButtonWinnerSellerPartnerId: number;
  relatedStylesCount: number;
  relatedStylesType: string;
  productVideos: any[];
  inventoryInfo: InventoryInfo[];
  sizes: string;
  images: Image[];
  gender: string;
  primaryColour: string;
  discountLabel: string;
  discountDisplayLabel: string;
  additionalInfo: string;
  category: string;
  mrp: number;
  price: number;
  advanceOrderTag: string;
  colorVariantAvailable: boolean;
  productimagetag: string;
  listViews: number;
  discountType: string;
  tdBxGyText: string;
  catalogDate: string;
  season: string;
  year: string;
  isPersonalised: boolean;
  eorsPicksTag: string;
  personalizedCoupon: string;
  personalizedCouponValue: number;
  productMeta: string;
  systemAttributes: SystemAttribute[];
}

export interface Products {
  products: Product[];
}
