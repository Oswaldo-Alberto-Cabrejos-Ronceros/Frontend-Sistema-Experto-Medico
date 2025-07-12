import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BarNavLayoutPrincipalComponent } from './components/bar-nav-layout-principal/bar-nav-layout-principal.component';
import { UserService } from '../../core/User/domain/services/UserService';
import { UserServiceImpl } from '../../core/User/infrastructure/UserServiceImpl';
import { GetUserMyInfoById } from '../../core/User/application/GetUserMyInfoById';
import { User } from '../../core/User/domain/models/User';
import { SessionService } from '../../core/shared/Session/infrastructure/SessionService';

@Component({
  selector: 'app-layout-principal',
  imports: [RouterOutlet, BarNavLayoutPrincipalComponent],
  templateUrl: './layout-principal.component.html',
  styleUrl: './layout-principal.component.scss',
  providers: [
    {
      provide: UserService,
      useClass: UserServiceImpl,
    },
    GetUserMyInfoById,
  ],
})
export class LayoutPrincipalComponent implements OnInit {
  user!: User;
  constructor(
    private readonly getUserMyInfoById: GetUserMyInfoById,
    private readonly sessionService: SessionService
  ) {}
  ngOnInit(): void {
    const id: number = this.sessionService.getUserId();
    this.getUserMyInfoById.execute(id).subscribe({
      next: (data) => {
        this.user = data;
      },
      error: (error) => {
        console.error('Error al obtener la informacion de perfil', error);
      },
    });
  }
}
