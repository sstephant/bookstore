import { Component, OnInit } from '@angular/core';
import {CartService} from '../../services/cart.service';

@Component({
  selector: 'app-small-cart',
  templateUrl: './small-cart.component.html',
  styleUrls: ['./small-cart.component.sass']
})
export class SmallCartComponent implements OnInit {

  constructor(private cart: CartService) { }

  ngOnInit() {
  }

}
