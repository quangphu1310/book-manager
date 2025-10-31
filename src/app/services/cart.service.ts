import { Injectable, signal, computed } from '@angular/core';
import { BookListItem } from '../core/models/book.model';
import { CartItem } from '../core/models/cart.model';

@Injectable({ providedIn: 'root' })
export class CartService {
  private _items = signal<CartItem[]>([]);

  items = computed(() => this._items());

  // Tổng số lượng sách
  totalCount = computed(() => 
    this._items().reduce((sum, item) => sum + item.quantity, 0)
  );

  // Tổng giá trị
  totalPrice = computed(() =>
    this._items().reduce((sum, item) => sum + (item.book.price * item.quantity), 0)
  );

  // Thêm vào giỏ
  addToCart(book: BookListItem, quantity: number = 1) {
    const current = this._items();
    const existingItem = current.find(item => item.book.id === book.id);
    
    if (existingItem) {
      // Tăng số lượng nếu đã tồn tại
      this._items.update(items =>
        items.map(item =>
          item.book.id === book.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      );
    } else {
      // Thêm mới
      this._items.set([...current, { book, quantity }]);
    }
  }

  // Cập nhật số lượng
  updateQuantity(bookId: number, quantity: number) {
    if (quantity <= 0) {
      this.removeFromCart(bookId);
      return;
    }
    
    this._items.update(items =>
      items.map(item =>
        item.book.id === bookId
          ? { ...item, quantity }
          : item
      )
    );
  }

  // Xóa khỏi giỏ
  removeFromCart(id: number) {
    this._items.update(items => items.filter(item => item.book.id !== id));
  }

  // Xóa toàn bộ
  clearCart() {
    this._items.set([]);
  }
}
