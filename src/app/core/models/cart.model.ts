import { BookListItem } from './book.model';

export interface CartItem {
  book: BookListItem;
  quantity: number;
}