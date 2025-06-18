import { Component, EventEmitter, Output } from '@angular/core';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabel } from 'primeng/floatlabel';
import { DatePickerModule } from 'primeng/datepicker';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { SelectModule } from 'primeng/select';

@Component({
  selector: 'app-register-card',
  imports: [
    CardModule,
    InputTextModule,
    FloatLabel,
    PasswordModule,
    ButtonModule,
    DatePickerModule,
    SelectModule
  ],
  templateUrl: './register-card.component.html',
  styleUrl: './register-card.component.scss',
})
export class RegisterCardComponent {
  @Output() register = new EventEmitter();
  //options for gender select
  genders:{label:string,value:number}[]=[
    {
      label:"Masculino",
      value:1
    },
        {
      label:"Femenino",
      value:2
    },
            {
      label:"Otro",
      value:3
    }
  ]
}
