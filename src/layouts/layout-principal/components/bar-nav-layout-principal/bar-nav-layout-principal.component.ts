import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';
import { Router, RouterModule } from '@angular/router';
import { RippleModule } from 'primeng/ripple';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { ConfirmDialog } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { DrawerModule } from 'primeng/drawer';
import { CommonModule } from '@angular/common';
import { User } from '../../../../models/User';

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
    DrawerModule
  ],
  templateUrl: './bar-nav-layout-principal.component.html',
  styleUrl: './bar-nav-layout-principal.component.scss',
  providers: [ConfirmationService],
})
export class BarNavLayoutPrincipalComponent {
  //inyectamos confirmationService
  constructor(private confirmationService: ConfirmationService,private router:Router) {}
  //for show drawer
  showDrawerPefil:boolean=false;
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
      route: '/',
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
        this.logOut()
      },
      reject: () => {
        console.log('No');
      },
    });
  }
//for logout
logOut=()=>{
this.router.navigate(['/'])
}

  // user
    user: User = {
    names: 'Oswaldo Alberto',
    lastnames: 'Cabrejos Ronceros',
    gender: 'Masculino',
    birthdate: '05/10/2004',
  };

  itemsPerfil:{title:string,key: keyof User}[]=[
    {
      title:'Nombres',
      key:'names'
    },
    {
      title:'Apellidos',
      key:'lastnames'
    },
    {
      title:'Género',
      key:'gender'
    },
    {
      title:'Fecha de nacimiento',
      key:'birthdate'
    }
  ]
}
