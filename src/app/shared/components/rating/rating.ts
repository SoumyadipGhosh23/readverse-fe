// rating.ts
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-rating',
  standalone: true,
  templateUrl: './rating.html',
})
export class Rating {
  value = input.required<number>();
  showValue = input<boolean>(true);
}
