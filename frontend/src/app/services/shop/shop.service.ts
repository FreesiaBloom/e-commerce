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
}
