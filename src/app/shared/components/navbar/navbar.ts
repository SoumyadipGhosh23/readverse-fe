import { Component, inject } from '@angular/core';
import { ThemeService } from '../../../core/services/theme';
import { LucideMoon, LucideSun } from '@lucide/angular';

@Component({
  selector: 'app-navbar',
  imports: [LucideMoon, LucideSun],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  protected readonly themeService = inject(ThemeService);
}

