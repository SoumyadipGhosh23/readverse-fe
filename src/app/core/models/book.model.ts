// core/models/book.model.ts
export interface Book {
  id: string;
  title: string;
  author: string;
  coverUrl: string;
  rating: number; // 0-5, can be decimal
  ratingCount?: number;
  genre?: string;
}
