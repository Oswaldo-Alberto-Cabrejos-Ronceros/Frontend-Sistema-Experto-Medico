import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RecomendationDiagnosis } from '../domain/models/RecommendationDiagnosis';
import { RecomendationDiagnosisService } from '../domain/services/RecommendationDiagnosisService';

@Injectable()
export class GetRecommendationsByDiagnosis {
  constructor(
    @Inject(RecomendationDiagnosisService)
    private recomendationDiagnosisService: RecomendationDiagnosisService
  ) {}

  execute(diagnosisId: number): Observable<RecomendationDiagnosis[]> {
    return this.recomendationDiagnosisService.getRecommendationsByDiagnosis(
      diagnosisId
    );
  }
}
