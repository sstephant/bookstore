import {NgModule} from '@angular/core';
import {CatalogService} from './catalog.service';
import {RouteUrlService} from './route-url.service';
import {CartService} from './cart.service';
import {ActionService} from './action.service';
import {MessageModule} from 'primeng/primeng';
import {MessageService} from 'primeng/components/common/messageservice';

@NgModule({
  providers: [CatalogService, RouteUrlService, CartService, ActionService, MessageService],
  imports: [MessageModule]
})
export class ServicesModule {
}
