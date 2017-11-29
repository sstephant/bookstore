import {Component, OnInit, ViewChild} from '@angular/core';
import {CartService} from '../../core/services/cart.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-cart-order',
  templateUrl: './cart-order.component.html',
  styleUrls: ['./cart-order.component.sass']
})
export class CartOrderComponent implements OnInit {
  @ViewChild('formInfo') formInfo: NgForm;
  data = {
    identity: {
      lastname: '',
      firstname: '',
      email: '',
      phone: '',
    },
    adress: {
      street: '',
      zipcode: '',
      city: '',
      country: '',
    }
  };
  constructor(public cartService: CartService) {
  }
  ngOnInit() {
  }
  log() {
    console.log(this.formInfo);
  }
  save() {
    if (this.formInfo.valid) {
      // Save
      alert('save');
    } else {
      alert('error');
      // Nothing
    }
  }
}
