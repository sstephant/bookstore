import { Book } from './book.model';

export interface BookNav {
  book: Book,
  previous: Book,
  next: Book,
  index: number,
  count: number,
}
