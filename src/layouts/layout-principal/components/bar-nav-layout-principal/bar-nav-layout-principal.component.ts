import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';
import { RouterLink } from '@angular/router';
import { RippleModule } from 'primeng/ripple';

@Component({
  selector: 'app-bar-nav-layout-principal',
  imports: [ButtonModule, MenubarModule,RouterLink,RippleModule],
  templateUrl: './bar-nav-layout-principal.component.html',
  styleUrl: './bar-nav-layout-principal.component.scss',
})
export class BarNavLayoutPrincipalComponent {
  items: MenuItem[] = [
    {
      label: 'Sintomas',
      route:'/auth'
    },
    {
      label: 'Historial',
      route:'/auth'
    },
    {
      label: 'Hospitales',
      route:'/auth'
    },
    {
      label: 'Ayuda',
      route:'/auth'
    },
  ];
}
