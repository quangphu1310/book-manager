import { Component } from '@angular/core';
import { BookCardComponent } from '../book-card/book-card';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BookCardComponent, MatChipsModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class HomeComponent {
  books = [
    { id: 1, title: 'Clean Code', author: 'Robert C. Martin' },
    { id: 2, title: 'The Pragmatic Programmer', author: 'Andrew Hunt' },
    { id: 3, title: 'You Don\'t Know JS', author: 'Kyle Simpson' }
  ];

  selectedBook: any = null;

  onBookSelected(book: any) {
    this.selectedBook = book;
  }
}
