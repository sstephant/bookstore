import {Component, OnInit} from '@angular/core';
import {ActionService} from '../../services/action.service';

@Component({
  selector: 'app-order-button-component',
  templateUrl: './order-button-component.component.html',
  styleUrls: ['./order-button-component.component.sass']
})
export class OrderButtonComponentComponent implements OnInit {

  constructor(public action: ActionService) {
  }

  ngOnInit() {
  }

}
