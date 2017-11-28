import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Book} from '../model/book.model';
import {map, shareReplay, switchMap, startWith} from 'rxjs/operators';
import {interval} from 'rxjs/observable/interval';
import {BookNav} from '../model/book-nav.model';

const url = 'https://api.mongolab.com/api/1/databases/sfbooks/collections/sfbooks/';
const apiKey = '?apiKey=d3qvB8ldYFW2KSynHRediqLuBLP8JA8i';

@Injectable()
export class CatalogService {
  books$: Observable<Book[]>;

  constructor(private httpClient: HttpClient) {
    this.realtime();

  }

  realtime() {
    this.books$ = interval(10 * 1000)
      .pipe(
        startWith(0),
        switchMap(() => (this.httpClient.get<Book[]>(`${url}${apiKey}`))),
        shareReplay(1)
      );
  }

  /**
   *
   * @returns {Observable<Book[]>}
   */
  getList(): Observable<Book[]> {
    return this.books$;
  }

  /**
   *
   * @param {string} id
   * @returns {Observable<Book>}
   */
  getBook(id: string): Observable<BookNav> {
    return this.getList().pipe(
      map(books => {
        const book = books.find(book => (book._id.$oid === id));
        const index = books.indexOf(book);
        const count = books.length;
        const next = books[index + 1];
        const previous = books[index - 1];
        return {
          book,
          index,
          count,
          previous,
          next,
        };
      })
    );
  }
}
