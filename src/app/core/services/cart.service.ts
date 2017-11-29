import { Injectable } from '@angular/core';
import {Cart, CartItem, Item} from '../model/cart.model';

@Injectable()
export class CartService extends Cart {
  add(item: Item) {
    const cartItem = this.cartItems.find((ci) => (ci.item.title === item.title));
    if (cartItem) {
      cartItem.quantity += 1;
    } else {
      this.cartItems.push(new CartItem(item, 1));
    }
  }
  isEmpty() {
    return this.cartItems.length === 0;
  }
}
