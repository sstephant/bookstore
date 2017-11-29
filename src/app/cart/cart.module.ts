import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {CartRoutingModule} from './cart-routing.module';
import {CartRootComponent} from './cart-root/cart-root.component';
import {CartContentComponent} from './cart-content/cart-content.component';
import {CartOrderComponent} from './cart-order/cart-order.component';
import {WidgetsModule} from '../core/widgets/widgets.module';
import {ButtonModule} from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    CartRoutingModule,
    FormsModule,
    ButtonModule,
    WidgetsModule
  ],
  declarations: [CartRootComponent, CartContentComponent, CartOrderComponent]
})
export class CartModule {
}
