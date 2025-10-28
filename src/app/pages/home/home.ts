import { Component, computed, inject, signal } from '@angular/core';
import { BookCardComponent } from '../book-card/book-card';
import { MatChipsModule } from '@angular/material/chips';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BookCardComponent, MatChipsModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class HomeComponent {

  private bookService = inject(BookService);
  
  readonly books = computed(() => this.bookService.getBooks());
}
