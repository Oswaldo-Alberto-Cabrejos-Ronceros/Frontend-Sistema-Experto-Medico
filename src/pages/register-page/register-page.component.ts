import { Component } from '@angular/core';
import { RegisterCardComponent } from './components/register-card/register-card.component';
import { AuthenticationService } from '../../core/Authentication/domain/services/AuthenticationService';
import { AuthenticationServiceImpl } from '../../core/Authentication/infrastructure/AuthenticationServiceImpl';
import { Register } from '../../core/Authentication/application/Register';
import { Router } from '@angular/router';
import { UserRequest } from '../../core/Authentication/domain/models/Authentication';

@Component({
  selector: 'app-register-page',
  imports: [RegisterCardComponent],
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.scss',
  providers:[
    {
      provide:AuthenticationService,
      useClass:AuthenticationServiceImpl
    },
    Register
  ]
})
export class RegisterPageComponent {
  constructor(private register:Register, private router:Router){}
  //for register
  registerUser(registerRequet:UserRequest){
    console.log(registerRequet)
    this.register.execute(registerRequet).subscribe({
      next:(data)=>{
        this.router.navigate(['/principal'])
        console.log(data)
      },
      error:(error)=>{
        console.log('Error al registrar',error)
      }
    })
  }
}
