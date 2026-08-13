import { Routes } from '@angular/router';

export const ADMIN_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('../../layouts/admin-layout/admin-layout').then((component) => component.AdminLayout),
    children: [
      {
        path: '',
        title: 'Admin dashboard',
        loadComponent: () =>
          import('./dashboard/dashboard').then((component) => component.AdminDashboard),
      },
      {
        path: 'users',
        title: 'Admin users',
        loadComponent: () =>
          import('./users/user-list/user-list').then((component) => component.UserList),
      },
      {
        path: 'books',
        title: 'Admin books',
        loadComponent: () =>
          import('./books/book-list/book-list').then((component) => component.AdminBookList),
      },
      {
        path: 'books/new',
        title: 'Create book',
        loadComponent: () =>
          import('./books/book-form/book-form').then((component) => component.BookForm),
      },
      {
        path: 'books/:id/edit',
        title: 'Edit book',
        loadComponent: () =>
          import('./books/book-form/book-form').then((component) => component.BookForm),
      },
      {
        path: 'books/:id',
        title: 'Admin book details',
        loadComponent: () =>
          import('./books/book-detail/book-detail').then((component) => component.AdminBookDetail),
      },
      {
        path: 'authors',
        title: 'Admin authors',
        loadComponent: () =>
          import('./authors/author-list/author-list').then((component) => component.AuthorList),
      },
      {
        path: 'genres',
        title: 'Admin genres',
        loadComponent: () =>
          import('./genres/genre-list/genre-list').then((component) => component.GenreList),
      },
      {
        path: 'reviews',
        title: 'Admin reviews',
        loadComponent: () =>
          import('./reviews/review-list/review-list').then((component) => component.ReviewList),
      },
      {
        path: 'reports',
        title: 'Admin reports',
        loadComponent: () =>
          import('./reports/reports').then((component) => component.AdminReports),
      },
      {
        path: 'settings',
        title: 'Admin settings',
        loadComponent: () =>
          import('./settings/settings').then((component) => component.AdminSettings),
      },
    ],
  },
];
