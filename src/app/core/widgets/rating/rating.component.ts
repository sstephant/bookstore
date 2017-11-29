import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import * as R from 'ramda';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./rating.component.sass']
})
export class RatingComponent implements OnInit, OnChanges {
  private _value: number;
  @Input() set value(rating: number) {
    this._value = rating;
    this.buildStars(this.value);
  };
  get value(): number {
    return this._value;
  };
  @Output() valueChange = new EventEmitter<number>();
  stars: boolean[];
  /**
   *
   */
  constructor() {
  }
  private buildStars(value) {
    this.stars = R.range(1, 6).map((index) => (value >= index));
  }
  ngOnInit() {
    // this.stars = R.range(1, 6).map((index) => (this.value >= index));
  }
  ngOnChanges() {
    //
  }
  onClick(index: number) {
    this.valueChange.emit(index + 1);
  }
  onMouseEnter(index: number) {
    this.buildStars(index + 1);
  }
  onMouseLeave() {
    this.buildStars(this.value);
  }
}
