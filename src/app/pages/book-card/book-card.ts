import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-book-card',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './book-card.html',
  styleUrl: './book-card.scss',
})
export class BookCardComponent {
  @Input() book: any;
  @Output() onSelect = new EventEmitter<any>();

  selectBook() {
    this.onSelect.emit(this.book); // Emit the selected book
  }
}
