import { Component, OnInit } from '@angular/core';
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
import { SymptomService } from '../../core/Symptom/domain/services/SymptomService';
import { SymptomServiceImpl } from '../../core/Symptom/infrastructure/SymptomServiceImpl';
import { GetAllSymtoms } from '../../core/Symptom/application/GetAllSymptoms';
import { Symptom } from '../../core/Symptom/domain/models/Symptom';

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
    RatingModule,
  ],
  templateUrl: './symptoms-page.component.html',
  styleUrl: './symptoms-page.component.scss',
  providers: [
    {
      provide: SymptomService,
      useClass: SymptomServiceImpl,
    },
    GetAllSymtoms,
  ],
})
export class SymptomsPageComponent implements OnInit {
  constructor(private getAllSymtoms: GetAllSymtoms) {}
  ngOnInit(): void {
    this.getAllSymtoms.execute().subscribe({
      next: (data) => {
        this.symptoms = data;
      },
      error: (err) => {
        console.error('Error al obtener sintomas', err);
      },
    });
  }

  symptoms: Symptom[] = [];

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
