import {Component, OnInit, Input, Output} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Book} from '../../core/model/book.model';
import {CatalogService} from '../../core/services/catalog.service';
import {RouteUrlService} from '../../core/services/route-url.service';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-catalog-list',
  templateUrl: './catalog-list.component.html',
  styleUrls: ['./catalog-list.component.sass']
})
export class CatalogListComponent implements OnInit {
  books$: Observable<Book[]>;

  constructor(private catalogService: CatalogService,
              private title: Title,
              public routeUrlService: RouteUrlService) {
  }

  /**
   *
   */
  ngOnInit() {
    this.books$ = this.catalogService.getList();
    this.title.setTitle('Catalogue');
  }

  /**
   *
   * @param {number} index
   * @param {Book} book
   * @returns {number}
   */
  bookid(index: number, book: Book): string {
    return book._id.$oid;
  }
}
