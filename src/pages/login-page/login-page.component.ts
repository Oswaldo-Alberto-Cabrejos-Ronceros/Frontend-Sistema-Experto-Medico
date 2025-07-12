import { Component } from '@angular/core';
import { LoginCardComponent } from './components/login-card/login-card.component';
import { AuthenticationService } from '../../core/Authentication/domain/services/AuthenticationService';
import { AuthenticationServiceImpl } from '../../core/Authentication/infrastructure/AuthenticationServiceImpl';
import { Login } from '../../core/Authentication/application/Login';
import { LoginRequest } from '../../core/Authentication/domain/models/Authentication';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Toast } from 'primeng/toast';
@Component({
  selector: 'app-login-page',
  imports: [LoginCardComponent,Toast],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss',
  providers:[
    {
      provide:AuthenticationService,
      useClass:AuthenticationServiceImpl
    },
    Login,
    MessageService
  ]
})
export class LoginPageComponent {
  constructor(private login:Login,private router:Router,private messageService: MessageService){}

//funcion para logear
  userLogin=(loginRequest:LoginRequest)=>{
    console.log(loginRequest)
    this.login.execute(loginRequest).subscribe({
      next:(data)=>{
        console.log(data)
        this.router.navigate(['/principal'])
        this.show('success','Bienvido','Hola de nuevo')
      },
      error:(error)=>{
        console.error(error)
        this.show('warn','Error','Credenciales invalidas o no tiene usuario')
      }
    })


  }

  //for show toast

      show(severity:string,message:string,summary:string) {
        this.messageService.add({ severity:severity, summary: summary, detail: message, life: 3000 });
    }
}
