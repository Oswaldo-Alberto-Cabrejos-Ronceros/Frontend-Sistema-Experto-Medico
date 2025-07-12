import { Observable } from 'rxjs';
import { RecomendationDiagnosis } from '../models/RecommendationDiagnosis';

export abstract class RecomendationDiagnosisService {
  abstract getRecommendationsByDiagnosis(
    diagnosisId: number
  ): Observable<RecomendationDiagnosis[]>;
}
