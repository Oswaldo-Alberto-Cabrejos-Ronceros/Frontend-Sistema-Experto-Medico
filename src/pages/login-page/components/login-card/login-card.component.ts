import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabel } from 'primeng/floatlabel';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import {
  ReactiveFormsModule,
  FormGroup,
  FormControl
} from '@angular/forms';
import { LoginRequest } from '../../../../core/Authentication/domain/models/Authentication';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-login-card',
  imports: [CardModule,InputTextModule,FloatLabel,PasswordModule,ButtonModule,ReactiveFormsModule,RouterLink],
  templateUrl: './login-card.component.html',
  styleUrl: './login-card.component.scss'
})
export class LoginCardComponent implements OnInit {
  formLogin!:FormGroup
  ngOnInit(): void {
    this.formLogin= new FormGroup({
      email:new FormControl(''),
      password:new FormControl('')
    })
  }

  @Output() login=new EventEmitter<LoginRequest>();

  emitLogin=()=>{
    console.log(this.formLogin.value)
    this.login.emit(this.formLogin.value as LoginRequest)
  }

}
