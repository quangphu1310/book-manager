import { Component, computed, effect, inject, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../../services/book.service';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-book-detail',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './book-detail.html',
  styleUrl: './book-detail.scss',
})
export class BookDetailComponent {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private bookService = inject(BookService);

  id = signal(Number(this.route.snapshot.paramMap.get('id')));
  book = computed(() => this.bookService.getBookById(this.id()));
  private cartService = inject(CartService);

  addToCart() {
    const currentBook = this.book();
    if (currentBook) {
      this.cartService.addToCart(currentBook, 1);
    }
  }
  constructor() {
    effect(() => {
      if (!this.book()) {
        this.router.navigate(['/']);
      }
    });
  }

  goBack() {
    this.router.navigate(['/']);
  }
}
