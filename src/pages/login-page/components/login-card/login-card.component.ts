import { Component, EventEmitter, Output } from '@angular/core';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabel } from 'primeng/floatlabel';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-login-card',
  imports: [CardModule,InputTextModule,FloatLabel,PasswordModule,ButtonModule],
  templateUrl: './login-card.component.html',
  styleUrl: './login-card.component.scss'
})
export class LoginCardComponent {
@Output() login=new EventEmitter();
}
