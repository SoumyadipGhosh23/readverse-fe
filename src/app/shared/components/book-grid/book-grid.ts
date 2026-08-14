import { Component, computed, input } from '@angular/core';
import { Book } from '../../../core/models/book.model';
import { BookCard } from '../book-card/book-card';
import { SkeletonLoader } from '../skeleton-loader/skeleton-loader';

@Component({
  selector: 'app-book-grid',
  imports: [BookCard, SkeletonLoader],
  templateUrl: './book-grid.html',
  styleUrl: './book-grid.css',
})
export class BookGrid {
  books = input<Book[]>([]);
  loading = input<boolean>(false);
  skeletonCount = input<number>(10);
  skeletonItems = computed(() =>
    Array.from({ length: this.skeletonCount() }, (_, index) => index),
  );
}
