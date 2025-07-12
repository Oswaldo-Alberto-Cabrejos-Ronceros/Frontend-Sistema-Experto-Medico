import { Inject, Injectable } from '@angular/core';
import { HistoryDiagnosisService } from '../domain/services/HistoryDiagnosisService';
import { Observable } from 'rxjs';
import { HistoryDiagnosis } from '../domain/models/HistoryDiagnosis';

@Injectable()
export class GetAllHistoriesDiagnosisByUserId {
  constructor(
    @Inject(HistoryDiagnosisService)
    private historyDiagnosisService: HistoryDiagnosisService
  ) {}

  execute(userId: number): Observable<HistoryDiagnosis[]> {
    return this.historyDiagnosisService.getAllHistoriesDiagnosisByUserId(
      userId
    );
  }
}
