import { Component, computed, input, Input} from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { BookListItem } from '../../core/models/book.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-card',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './book-card.html',
  styleUrl: './book-card.scss',
})
export class BookCardComponent {
  book = input.required<BookListItem>();
  id = computed(() => this.book().id);
  
  constructor(private router: Router) {}

  selectBook() {
    this.router.navigate(['/book', this.id()]);
  }
}
