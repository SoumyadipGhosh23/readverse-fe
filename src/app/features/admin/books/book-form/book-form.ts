import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-books-book-form',
  imports: [],
  templateUrl: './book-form.html',
})
export class BookForm {
  private readonly route = inject(ActivatedRoute);

  protected readonly isEditMode = this.route.snapshot.paramMap.get('id') !== null;
}
