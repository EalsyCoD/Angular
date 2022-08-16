import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { IProduct } from 'src/app/models/product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: IProduct[] = [];

  getShippingPrices() {
    return this.http.get<{ type: string; price: number }[]>(
      '/assets/shipping.json'
    );
  }

  addToCart(product: IProduct) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  constructor(private http: HttpClient) {}
}
