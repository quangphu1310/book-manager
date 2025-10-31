import { Component, inject } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  imports: [MatIconModule, MatCardModule, CommonModule, MatButtonModule, MatDialogModule],
  templateUrl: './cart.html',
  styleUrl: './cart.scss',
})
export class CartComponent {
  private cartService = inject(CartService);
  private router = inject(Router);
  
  items = this.cartService.items;
  totalCount = this.cartService.totalCount;
  totalPrice = this.cartService.totalPrice;

  increaseQuantity(bookId: number) {
    const item = this.items().find(i => i.book.id === bookId);
    if (item) {
      this.cartService.updateQuantity(bookId, item.quantity + 1);
    }
  }

  decreaseQuantity(bookId: number) {
    const item = this.items().find(i => i.book.id === bookId);
    if (item && item.quantity > 1) {
      this.cartService.updateQuantity(bookId, item.quantity - 1);
    } else if (item && item.quantity === 1) {
      this.removeItem(bookId);
    }
  }

  removeItem(bookId: number) {
    this.cartService.removeFromCart(bookId);
  }

  clearCart() {
    if (confirm('Are you sure you want to clear the entire cart?')) {
      this.cartService.clearCart();
    }
  }

  goBack() {
    this.router.navigate(['/']);
  }
}
