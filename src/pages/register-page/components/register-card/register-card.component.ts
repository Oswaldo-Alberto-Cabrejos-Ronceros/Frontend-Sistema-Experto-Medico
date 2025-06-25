import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabel } from 'primeng/floatlabel';
import { DatePickerModule } from 'primeng/datepicker';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { SelectModule } from 'primeng/select';
import {
  ReactiveFormsModule,
  FormGroup,
  FormControl
} from '@angular/forms';
import { UserRequest } from '../../../../core/Authentication/domain/models/Authentication';

@Component({
  selector: 'app-register-card',
  imports: [
    CardModule,
    InputTextModule,
    FloatLabel,
    PasswordModule,
    ButtonModule,
    DatePickerModule,
    SelectModule,
    ReactiveFormsModule,
  ],
  templateUrl: './register-card.component.html',
  styleUrl: './register-card.component.scss',
})
export class RegisterCardComponent implements OnInit {
  //formulario para registro
  formRegister!: FormGroup;
  ngOnInit(): void {
    this.formRegister = new FormGroup({
      names: new FormControl(''),
      lastnames: new FormControl(''),
      gender: new FormControl(''),
      birthdate: new FormControl(''),
      address: new FormControl(''),
      district: new FormControl(''),
      province: new FormControl(''),
      department: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl(''),
    });
  }
  @Output() register = new EventEmitter<UserRequest>();

  emitRegister = () => {
    console.log("emitiendo", this.formRegister.value)
    const userRequest:UserRequest=this.formRegister.value as UserRequest
    const birthdate:Date=this.formRegister.value.birthdate
    const birthdateString:string=birthdate.toISOString().split('T')[0];
    userRequest.birthdate=birthdateString
    this.register.emit(this.formRegister.value as UserRequest);
  };
  //options for gender select
  genders: { label: string; value: string }[] = [
    {
      label: 'Masculino',
      value: 'M',
    },
    {
      label: 'Femenino',
      value: 'F',
    },
  ];

  departaments: { label: string; value: string }[] = [
    {
      label: 'Lima',
      value: 'LIMA',
    },
    {
      label: 'Ica',
      value: 'ICA',
    },
  ];
  provinces: { label: string; value: string }[] = [
    {
      label: 'Lima',
      value: 'LIMA',
    },
    {
      label: 'Huacho',
      value: 'HUACHO',
    },
    {
      label: 'Ica',
      value: 'ICA',
    },
    {
      label: 'Pisco',
      value: 'PISCO',
    },
  ];

  districts: { label: string; value: string }[] = [
    {
      label: 'Lima',
      value: 'LIMA',
    },
    {
      label: 'Huacho',
      value: 'HUACHO',
    },
    {
      label: 'Huachochiri',
      value: 'HUACHOCHIRI',
    },
    {
      label: 'Ica',
      value: 'ICA',
    },
    {
      label: 'Parcona',
      value: 'PARCONA',
    },
    {
      label: 'Pisco',
      value: 'PISCO',
    },
    {
      label: 'Paracas',
      value: 'PARACAS',
    },
  ];
}
