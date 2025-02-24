import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./main-layout/main-layout.component').then(
        (a) => a.MainLayoutComponent,
      ),
  },
];
