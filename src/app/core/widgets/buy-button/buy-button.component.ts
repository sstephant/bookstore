import {Component, Input, OnInit} from '@angular/core';
import {Item} from '../../model/cart.model';
import {ActionService} from '../../services/action.service';

@Component({
  selector: 'app-buy-button',
  templateUrl: './buy-button.component.html',
  styleUrls: ['./buy-button.component.sass']
})
export class BuyButtonComponent implements OnInit {
  @Input() item: Item;
  constructor(public action: ActionService) { }

  ngOnInit() {
  }

}

