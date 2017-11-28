import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CatalogService} from '../../core/services/catalog.service';
import {Book} from '../../core/model/book.model';
import {switchMap, tap} from 'rxjs/operators';
import {Observable} from 'rxjs/Observable';
import {Title} from '@angular/platform-browser';
import {BookNav} from '../../core/model/book-nav.model';

@Component({
  selector: 'app-catalog-book',
  templateUrl: './catalog-book.component.html',
  styleUrls: ['./catalog-book.component.sass']
})
export class CatalogBookComponent implements OnInit {
  bookNav$: Observable<BookNav>;

  constructor(private route: ActivatedRoute,
              private catalogService: CatalogService,
              private title: Title,
              private router: Router) {
  }
  ngOnInit() {
    this.bookNav$ = this.route.params.pipe(
      switchMap(params => this.catalogService.getBook(params.id)),
      tap(bookNav => this.title.setTitle(`Livre: ${bookNav.book.title}`))
    );
  }
  back() {
    this.router.navigate(['/catalog/list']);
  }
}
