import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NotfoundComponent} from './notfound/notfound.component';
import {MenuComponent} from './menu/menu.component';
import {RouterModule} from '@angular/router';
import {MenubarModule} from 'primeng/primeng';
import {TextRatingPipe} from './text-rating.pipe';
import {RatingComponent} from './rating/rating.component';
import {BuyButtonComponent} from './buy-button/buy-button.component';
import {SmallCartComponent} from './small-cart/small-cart.component';
import {OrderButtonComponentComponent} from './order-button-component/order-button-component.component';
import {ButtonModule} from 'primeng/primeng';
import { ErrorComponent } from './error/error.component';

@NgModule({
  imports: [
    CommonModule, RouterModule, MenubarModule, ButtonModule
  ],
  declarations: [NotfoundComponent, MenuComponent, TextRatingPipe,
    RatingComponent, BuyButtonComponent, SmallCartComponent, OrderButtonComponentComponent, ErrorComponent],
  exports: [NotfoundComponent, MenuComponent, TextRatingPipe,
    RatingComponent, BuyButtonComponent, SmallCartComponent, OrderButtonComponentComponent, ErrorComponent]
})
export class WidgetsModule {
}
