import { Component, OnInit } from '@angular/core';
import { ShopService } from 'src/app/services/shop/shop.service';
import { CartItem } from 'src/app/shared/models/CartItem';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss']
})
export class ItemDetailsComponent implements OnInit {

  @Output() closeEvent = new EventEmitter<boolean>();

  public cartItem: CartItem;

  constructor(private shopService: ShopService) {
    this.cartItem = shopService.getCartItem('1');
  }

  ngOnInit(): void {
  }

  emitCloseEvent() {
    this.closeEvent.emit();
  }

}
