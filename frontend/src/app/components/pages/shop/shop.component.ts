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
  public detailsViewOpened: boolean = false;

  constructor(private shopService: ShopService) {
    this.cartItems = shopService.getAllItems();
   }

  ngOnInit(): void
  {
  }

  public getDetailsViewStatus() {
    this.toggleSidenav();
  }

  public toggleSidenav() {
    this.detailsViewOpened = !this.detailsViewOpened;
  }

}
