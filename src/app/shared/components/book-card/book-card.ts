// book-card.ts
import { Component, input } from '@angular/core';
import { Book } from '../../../core/models/book.model';
import { Rating } from '../rating/rating';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-book-card',
  standalone: true,
  imports: [Rating, RouterLink],
  templateUrl: './book-card.html',
})
export class BookCard {
  book = input.required<Book>();
}
