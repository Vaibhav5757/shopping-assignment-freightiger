import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from '../products/components/products/products.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ProductsComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    HttpClientModule,
    SharedModule,
  ],
})
export class ProductsModule {}
