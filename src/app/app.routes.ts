import { Routes } from '@angular/router';
import { LoginPageComponent } from '../pages/login-page/login-page.component';

export const routes: Routes = [
  { path: '', redirectTo: '/auth/login', pathMatch: 'full' },
  {
    path: 'auth',
    children: [
      {
        path: 'login',
        component: LoginPageComponent,
      },
    ],
  },
];
