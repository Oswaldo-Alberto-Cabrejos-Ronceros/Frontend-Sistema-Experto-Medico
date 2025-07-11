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
import { DiagnosisService } from '../../core/Diagnosis/domain/services/DiagnosisService';
import { DiagnosisServiceImpl } from '../../core/Diagnosis/infrastructure/DiagnosisServiceImpl';
import { Router } from '@angular/router';
import { DiagnosticarSession } from '../../core/Diagnosis/application/DiagnosticarSession';
import { SessionService } from '../../core/shared/Session/infrastructure/SessionService';

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
    {
      provide: DiagnosisService,
      useClass: DiagnosisServiceImpl,
    },
    DiagnosticarSession,
  ],
})
export class SymptomsPageComponent implements OnInit {
  constructor(
    private getAllSymtoms: GetAllSymtoms,
    private diagnosticarSession: DiagnosticarSession,
    private sessionService: SessionService,
    private router: Router
  ) {}
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
  selectedSymptoms: Symptom[] = [];

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
  //for send symptoms
  sendSymptoms = () => {
    const userId = this.sessionService.getUserId();
    console.log(this.selectedSymptoms);
    const symptomsIds: string[] = this.selectedSymptoms.map((symptom) =>
      symptom.id.toString()
    );
    console.log(symptomsIds);
    this.diagnosticarSession.execute(symptomsIds, userId).subscribe({
      next: (data) => {
        console.log('Diagnostico', data);
        this.router.navigate([
          '/principal/sintomas/diagnostico',
          data.diagnostico_id,
        ]);
      },
      error: (err) => {
        console.error(err);
      },
    });
  };
}
