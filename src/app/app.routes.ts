import { Routes } from '@angular/router';
import { LoginPageComponent } from '../pages/login-page/login-page.component';
import { RegisterPageComponent } from '../pages/register-page/register-page.component';
import { LayoutPrincipalComponent } from '../layouts/layout-principal/layout-principal.component';
import { SymptomsPageComponent } from '../pages/symptoms-page/symptoms-page.component';
import { HistoryPageComponent } from '../pages/history-page/history-page.component';
import { HospitalsPageComponent } from '../pages/hospitals-page/hospitals-page.component';
import { HelpPageComponent } from '../pages/help-page/help-page.component';
import { DignosisUnitaryPageComponent } from '../pages/dignosis-unitary-page/dignosis-unitary-page.component';

export const routes: Routes = [
  { path: '', redirectTo: '/auth/login', pathMatch: 'full' },
  {
    path: 'auth',
    children: [
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
      },
      {
        path: 'login',
        component: LoginPageComponent,
      },
      {
        path: 'register',
        component: RegisterPageComponent,
      },
    ],
  },
  {
    path: 'principal',
    component: LayoutPrincipalComponent,
    children: [
      {
        path: '',
        redirectTo: 'sintomas',
        pathMatch: 'full',
      },
      {
        path: 'sintomas',
        component: SymptomsPageComponent,
      },
      {
        path: 'sintomas/diagnostico/:id',
        component: DignosisUnitaryPageComponent,
      },
      {
        path: 'historial',
        component: HistoryPageComponent,
      },
      {
        path: 'historial/diagnostico',
        component: DignosisUnitaryPageComponent,
      },
      {
        path: 'hospitales',
        component: HospitalsPageComponent,
      },
      {
        path: 'ayuda',
        component: HelpPageComponent,
      },
    ],
  },
];
