import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';
import { RouterModule } from '@angular/router';
import { RippleModule } from 'primeng/ripple';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { ConfirmDialog } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bar-nav-layout-principal',
  imports: [
    ButtonModule,
    MenubarModule,
    RouterModule,
    RippleModule,
    ConfirmDialog,
    TieredMenuModule,
    CommonModule,
  ],
  templateUrl: './bar-nav-layout-principal.component.html',
  styleUrl: './bar-nav-layout-principal.component.scss',
  providers: [ConfirmationService],
})
export class BarNavLayoutPrincipalComponent {
  //inyectamos confirmationService
  constructor(private confirmationService: ConfirmationService) {}
  items: MenuItem[] = [
    {
      label: 'Sintomas',
      route: '/principal/sintomas',
    },
    {
      label: 'Historial',
      route: '/principal/historial',
    },
    {
      label: 'Hospitales',
      route: '/principal/hospitales',
    },
    {
      label: 'Ayuda',
      route: '/principal/ayuda',
    },
  ];

  perfilMenuItems: MenuItem[] = [
    {
      label: 'Ver perfil',
      icon: 'pi pi-user',
      route: '/auth',
    },
    {
      label: 'Cerrar sesión',
      icon: 'pi pi-sign-out',
    },
  ];

  //for confirm log out
  confirmLogOut(event: Event) {
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: 'Estás seguro que quieres cerrar sesión?',
      header: 'Cerrar sesión',
      closable: true,
      closeOnEscape: true,
      icon: 'pi pi-exclamation-triangle',
      rejectButtonProps: {
        label: 'No',
        severity: 'secondary',
        outlined: true,
      },
      acceptButtonProps: {
        label: 'Si',
        severity: 'danger',
      },
      accept: () => {
        console.log('Si');
      },
      reject: () => {
        console.log('No');
      },
    });
  }
}
