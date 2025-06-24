import { Observable } from 'rxjs';
import { RecomendationDiagnosis } from '../domain/models/RecommendationDiagnosis';
import { RecomendationDiagnosisService } from '../domain/services/RecommendationDiagnosisService';
import { Injectable } from '@angular/core';
import { environment } from '../../../environment/environment';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class RecomendationDiagnosisServiceImpl
  implements RecomendationDiagnosisService
{
  private readonly apiUrl = `${environment.apiUrl}/recomendacion_diagnosticos`;

  constructor(private httpClient: HttpClient) {}

  getRecommendationsByDiagnosis(
    diagnosisId: number
  ): Observable<RecomendationDiagnosis[]> {
    return this.httpClient.get<RecomendationDiagnosis[]>(
      `${this.apiUrl}/${diagnosisId}`
    );
  }
}
