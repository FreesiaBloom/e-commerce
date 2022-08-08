import { Component, OnInit } from '@angular/core';
import { ShopService } from 'src/app/services/shop/shop.service';
import { CartItem } from 'src/app/shared/models/CartItem';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  public cartItems: CartItem[] = [];

  constructor(private shopService: ShopService) {
    this.cartItems = shopService.getAllItems();
    console.log(this.cartItems);
   }

  ngOnInit(): void {
  }

}
