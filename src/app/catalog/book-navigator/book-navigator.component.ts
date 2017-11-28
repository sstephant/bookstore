import {Component, Input, OnInit} from '@angular/core';
import {BookNav} from '../../core/model/book-nav.model';
import {RouteUrlService} from '../../core/services/route-url.service';

@Component({
  selector: 'app-book-navigator',
  templateUrl: './book-navigator.component.html',
  styleUrls: ['./book-navigator.component.sass']
})
export class BookNavigatorComponent implements OnInit {
  @Input() bookNav: BookNav;
  constructor(public routeUrlService: RouteUrlService) { }

  ngOnInit() {
  }

  digit(): string {
    return `${Math.ceil(Math.log10(this.bookNav.count))}.0-0`;
  }
}
