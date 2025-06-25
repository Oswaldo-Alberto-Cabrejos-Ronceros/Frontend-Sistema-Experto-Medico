import { Component, OnInit } from '@angular/core';
import { ImageModule } from 'primeng/image';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { DiagnosisService } from '../../core/Diagnosis/domain/services/DiagnosisService';
import { DiagnosisServiceImpl } from '../../core/Diagnosis/infrastructure/DiagnosisServiceImpl';
import { GetDiagnosisById } from '../../core/Diagnosis/application/GetDiagnosisById';
import { Diagnosis } from '../../core/Diagnosis/domain/models/Diagnosis';
import { RecomendationDiagnosis } from '../../core/RecommendationDiagnosis/domain/models/RecommendationDiagnosis';
import { RecomendationDiagnosisService } from '../../core/RecommendationDiagnosis/domain/services/RecommendationDiagnosisService';
import { RecomendationDiagnosisServiceImpl } from '../../core/RecommendationDiagnosis/infrastructure/RecommendationDiagnosisServiceImpl';
import { GetRecommendationsByDiagnosis } from '../../core/RecommendationDiagnosis/application/GetRecommendationsByDiagnosis';

@Component({
  selector: 'app-dignosis-unitary-page',
  imports: [ImageModule, CommonModule],
  templateUrl: './dignosis-unitary-page.component.html',
  styleUrl: './dignosis-unitary-page.component.scss',
  providers: [
    {
      provide: DiagnosisService,
      useClass: DiagnosisServiceImpl,
    },
    GetDiagnosisById,
    {
      provide:RecomendationDiagnosisService,
      useClass:RecomendationDiagnosisServiceImpl
    },
    GetRecommendationsByDiagnosis
  ],
})
export class DignosisUnitaryPageComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private getDiagnosisById: GetDiagnosisById,
    private getRecommendationByDiagnosis:GetRecommendationsByDiagnosis
  ) {}
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    if (id) {
      //obtenemos informacion del diagnostico
      const numberId: number = Number(id);
      this.getDiagnosisById.execute(numberId).subscribe({
        next: (data) => {
          this.diagnosisGet = data;
          console.log(this.diagnosisGet)
        },
        error: (error) => {
          console.error('Error al obtener el diagnostico', error);
        },
      });
      this.getRecommendationByDiagnosis.execute(numberId).subscribe({
        next:(data)=>{
          this.diagnosisRecomendation=data
          console.log(this.diagnosisRecomendation)
        },
        error:(error)=>{
          console.error('Error al obtener las recomendaciones del diagnostico',error)
        }
      })
    }
  }

  diagnosisGet: Diagnosis = {
    id: -1,
    name: '',
    image_url: '',
  };

  diagnosisRecomendation:RecomendationDiagnosis[]=[]

  diagnosis: {
    content: string;
    imageUrl: string;
    tratamientos: string[];
    pasosSeguir: string[];
  } = {
    content: `Lorem ipsum dolor sit amet consectetur adipiscing elit purus
   malesuada sociosqu luctus torquent nec a, etiam euismod metus morbi vulputate
   phasellus suspendisse aliquet nisi ante vestibulum cum habitant. Penatibus nulla
    rutrum convallis tempus at fringilla pulvinar condimentum malesuada suspendisse`,
    imageUrl:
      'https://www.hospitalaleman.org.ar/plan-medico-con-vos/wp-content/uploads/2023/06/nota-prevenir-gripe.jpg',
    tratamientos: [
      'Lorem ipsum dolor sit amet consectetur adipiscing elit purus malesuada sociosque.',
      'Lorem ipsum dolor sit amet consectetur adipiscing elit purus malesuada sociosque.',
      'Lorem ipsum dolor sit amet consectetur adipiscing elit purus malesuada sociosque.',
      'Lorem ipsum dolor sit amet consectetur adipiscing elit purus malesuada sociosque.',
    ],
    pasosSeguir: [
      'Lorem ipsum dolor sit amet consectetur adipiscing elit purus malesuada sociosque.',
      'Lorem ipsum dolor sit amet consectetur adipiscing elit purus malesuada sociosque.',
      'Lorem ipsum dolor sit amet consectetur adipiscing elit purus malesuada sociosque.',
      'Lorem ipsum dolor sit amet consectetur adipiscing elit purus malesuada sociosque.',
    ],
  };
}
