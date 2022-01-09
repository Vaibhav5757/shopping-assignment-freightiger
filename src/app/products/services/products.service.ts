import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, Observable } from 'rxjs';
import { Products } from 'src/app/models/products';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private productsURL = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Products> {
    return this.http.get<Products>(this.productsURL).pipe(delay(2500));
  }
}
