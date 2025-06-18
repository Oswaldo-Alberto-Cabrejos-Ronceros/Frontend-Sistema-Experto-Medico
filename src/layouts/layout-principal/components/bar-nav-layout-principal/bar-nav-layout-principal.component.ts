import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';
import { RouterModule } from '@angular/router';
import { RippleModule } from 'primeng/ripple';

@Component({
  selector: 'app-bar-nav-layout-principal',
  imports: [ButtonModule, MenubarModule,RouterModule,RippleModule],
  templateUrl: './bar-nav-layout-principal.component.html',
  styleUrl: './bar-nav-layout-principal.component.scss',
})
export class BarNavLayoutPrincipalComponent {
  items: MenuItem[] = [
    {
      label: 'Sintomas',
      route:'/principal/sintomas'
    },
    {
      label: 'Historial',
      route:'/principal/historial'
    },
    {
      label: 'Hospitales',
      route:'/principal/hospitales'
    },
    {
      label: 'Ayuda',
      route:'/principal/ayuda'
    },
  ];
}
