import { Component } from '@angular/core';
import { StepperModule } from 'primeng/stepper';
import { ButtonModule } from 'primeng/button';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { CheckboxModule } from 'primeng/checkbox';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RatingModule } from 'primeng/rating';

@Component({
  selector: 'app-symptoms-page',
  imports: [
    StepperModule,
    ButtonModule,
    InputGroupModule,
    InputGroupAddonModule,
    FloatLabelModule,
    InputTextModule,
    SelectModule,
    CheckboxModule,
    CommonModule,
    FormsModule,
    RatingModule
  ],
  templateUrl: './symptoms-page.component.html',
  styleUrl: './symptoms-page.component.scss',
})
export class SymptomsPageComponent {
  //symptoms
  //options for categories symptoms
  categoriesSymptoms: { label: string; value: number }[] = [
    {
      label: 'Respiratorios',
      value: 1,
    },
    {
      label: 'Estomacales',
      value: 2,
    },
    {
      label: 'Cardiacos',
      value: 3,
    },
  ];

  //for sumptoms selecteds
  selectedSymptoms: { name: string; key: string }[] = [];

  symptoms: { name: string; key: string }[] = [
    { name: 'Tos', key: '1' },
    { name: 'Fiebre', key: '2' },
    { name: 'Dolor de cabeza', key: '3' },
    { name: 'Congestión nasal', key: '4' },
    { name: 'Dolor de garganta', key: '5' },
    { name: 'Fatiga', key: '6' },
    { name: 'Náuseas', key: '7' },
    { name: 'Vómitos', key: '8' },
    { name: 'Diarrea', key: '9' },
    { name: 'Dolor abdominal', key: '10' },
    { name: 'Escalofríos', key: '11' },
    { name: 'Sudoración excesiva', key: '12' },
    { name: 'Dificultad para respirar', key: '13' },
    { name: 'Dolor en el pecho', key: '14' },
    { name: 'Pérdida del apetito', key: '15' },
    { name: 'Pérdida del gusto', key: '16' },
    { name: 'Pérdida del olfato', key: '17' },
    { name: 'Mareos', key: '18' },
    { name: 'Palpitaciones', key: '19' },
    { name: 'Dolor muscular', key: '20' },
  ];

  hoursOptions: { label: string; value: number }[] = [
    {
      label: '1 hora',
      value: 1,
    },
    {
      label: '2 horas',
      value: 2,
    },
    {
      label: '3 horas',
      value: 3,
    },
    {
      label: '4 horas',
      value: 4,
    },
    {
      label: '5 horas',
      value: 5,
    },
  ];

  daysOptions: { label: string; value: number }[] = [
    {
      label: '1 dia',
      value: 1,
    },
    {
      label: '2 dias',
      value: 2,
    },
    {
      label: '3 dias',
      value: 3,
    },
    {
      label: '4 dias',
      value: 4,
    },
    {
      label: '5 dias',
      value: 5,
    },
  ];
}
