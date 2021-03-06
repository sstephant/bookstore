import {Injectable} from '@angular/core';
import {Book} from '../model/book.model';

@Injectable()
export class RouteUrlService {

  constructor() {
  }

  /**
   *
   * @param {Book} book
   * @returns {string}
   */
  getCatalogBook(book: Book) {
    return `/catalog/book/${book._id.$oid}`;
  }

  /**
   *
   * @returns {string}
   */
  getCatalogList() {
    return '/catalog/list';
  }

  /**
   *
   * @returns {string}
   */
  getCatalog() {
    return '/catalog';
  }
  /**
   *
   * @returns {string}
   */
  getCart() {
    return '/cart';
  } /**
   *
   * @returns {string}
   */
  getCartContent() {
    return '/cart/content';
  } /**
   *
   * @returns {string}
   */
  getCartOrder() {
    return '/cart/order';
  }
}
