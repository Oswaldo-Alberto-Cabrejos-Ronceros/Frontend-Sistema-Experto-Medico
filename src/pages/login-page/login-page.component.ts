import { Component } from '@angular/core';
import { LoginCardComponent } from './components/login-card/login-card.component';
import { AuthenticationService } from '../../core/Authentication/domain/services/AuthenticationService';
import { AuthenticationServiceImpl } from '../../core/Authentication/infrastructure/AuthenticationServiceImpl';
import { Login } from '../../core/Authentication/application/Login';
import { AuthResponse, LoginRequest } from '../../core/Authentication/domain/models/Authentication';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  imports: [LoginCardComponent],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss',
  providers:[
    {
      provide:AuthenticationService,
      useClass:AuthenticationServiceImpl
    },
    Login
  ]
})
export class LoginPageComponent {
  constructor(private login:Login,private router:Router){}

//funcion para logear
  userLogin=(loginRequest:LoginRequest)=>{
    console.log(loginRequest)
    this.login.execute(loginRequest).subscribe({
      next:(data)=>{
        console.log(data)
        this.router.navigate(['/principal'])
      }
    })


  }
}
