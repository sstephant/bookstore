import {Injectable} from '@angular/core';
import {Item} from '../model/cart.model';
import {CartService} from './cart.service';
import {MessageService} from 'primeng/components/common/messageservice';
import {Router} from '@angular/router';
import {RouteUrlService} from './route-url.service';

@Injectable()
export class ActionService {

  constructor(private cartService: CartService,
              public messageService: MessageService,
              private router: Router,
              private routeUrl: RouteUrlService) {
  }

  buy(item: Item) {
    this.cartService.add(item);
    this.messageService.add({
      summary: 'Article ajoute au panier',
      detail: item.title,
      severity: 'success'
    });
  }

  orderCart() {
    this.router.navigate([this.routeUrl.getCartOrder()] );
  }
}
