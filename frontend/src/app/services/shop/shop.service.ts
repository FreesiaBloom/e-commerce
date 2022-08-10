import { Injectable } from '@angular/core';

import { sampleCartItem } from 'src/data';
import { CartItem } from '../../shared/models/CartItem';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  constructor() { }

  getAllItems(): CartItem[] {
    return sampleCartItem;
  }

  getCartItem(id: string): CartItem {
    return this.getAllItems().find(item => item.id === id) ?? new CartItem;
  }
}
