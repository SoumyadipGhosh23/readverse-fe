import { Routes } from '@angular/router';

import { adminGuard } from './core/guards/admin-guard';
import { authGuard } from './core/guards/auth-guard';
import { AuthenticatedLayout } from './layouts/authenticated-layout/authenticated-layout';
import { PublicLayout } from './layouts/public-layout/public-layout';

export const routes: Routes = [
  {
    path: '',
    component: PublicLayout,
    children: [
      {
        path: '',
        title: 'Readverse',
        loadComponent: () =>
          import('./features/landing/landing').then((component) => component.Landing),
      },
      {
        path: 'login',
        title: 'Login',
        loadComponent: () =>
          import('./features/auth/login/login').then((component) => component.Login),
      },
      {
        path: 'register',
        title: 'Register',
        loadComponent: () =>
          import('./features/auth/register/register').then((component) => component.Register),
      },
      {
        path: 'explore',
        title: 'Explore',
        loadComponent: () =>
          import('./features/explore/explore').then((component) => component.Explore),
      },
      {
        path: 'books',
        title: 'Books',
        loadComponent: () =>
          import('./features/books/book-list/book-list').then((component) => component.BookList),
      },
      {
        path: 'books/:id',
        title: 'Book details',
        loadComponent: () =>
          import('./features/books/book-detail/book-detail').then(
            (component) => component.BookDetail,
          ),
      },
      {
        path: 'search',
        title: 'Search',
        loadComponent: () =>
          import('./features/search/search').then((component) => component.Search),
      },
      {
        path: 'about',
        title: 'About',
        loadComponent: () => import('./features/about/about').then((component) => component.About),
      },
    ],
  },
  {
    path: '',
    component: AuthenticatedLayout,
    canActivate: [authGuard],
    children: [
      {
        path: 'home',
        title: 'Home',
        loadComponent: () => import('./features/home/home').then((component) => component.Home),
      },
      {
        path: 'my-library',
        title: 'My library',
        loadComponent: () =>
          import('./features/library/my-library/my-library').then(
            (component) => component.MyLibrary,
          ),
      },
      {
        path: 'currently-reading',
        title: 'Currently reading',
        loadComponent: () =>
          import('./features/library/currently-reading/currently-reading').then(
            (component) => component.CurrentlyReading,
          ),
      },
      {
        path: 'want-to-read',
        title: 'Want to read',
        loadComponent: () =>
          import('./features/library/want-to-read/want-to-read').then(
            (component) => component.WantToRead,
          ),
      },
      {
        path: 'finished',
        title: 'Finished',
        loadComponent: () =>
          import('./features/library/finished/finished').then((component) => component.Finished),
      },
      {
        path: 'profile',
        title: 'Profile',
        loadComponent: () =>
          import('./features/profile/profile-view/profile-view').then(
            (component) => component.ProfileView,
          ),
      },
      {
        path: 'profile/edit',
        title: 'Edit profile',
        loadComponent: () =>
          import('./features/profile/profile-edit/profile-edit').then(
            (component) => component.ProfileEdit,
          ),
      },
      {
        path: 'settings',
        title: 'Settings',
        loadComponent: () =>
          import('./features/settings/settings').then((component) => component.Settings),
      },
      {
        path: 'notifications',
        title: 'Notifications',
        loadComponent: () =>
          import('./features/notifications/notifications').then(
            (component) => component.Notifications,
          ),
      },
    ],
  },
  {
    path: 'protected/admin',
    canActivate: [authGuard, adminGuard],
    loadChildren: () =>
      import('./features/admin/admin.routes').then((routeConfig) => routeConfig.ADMIN_ROUTES),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
