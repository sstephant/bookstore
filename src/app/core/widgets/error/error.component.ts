import {Component, Input, OnInit} from '@angular/core';
import {NgModel} from '@angular/forms';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.sass']
})
export class ErrorComponent implements OnInit {
  @Input() control: NgModel;
  @Input() form: NgForm;

  constructor() {
  }

  ngOnInit() {
  }
}
