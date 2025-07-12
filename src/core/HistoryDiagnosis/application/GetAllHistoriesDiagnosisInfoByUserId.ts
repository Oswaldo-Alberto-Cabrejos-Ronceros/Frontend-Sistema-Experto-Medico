import { Inject, Injectable } from '@angular/core';
import { HistoryDiagnosisService } from '../domain/services/HistoryDiagnosisService';
import { Observable } from 'rxjs';
import { HistoryInfoDiagnosis } from '../domain/models/HistoryDiagnosis';

@Injectable()
export class GetAllHistoriesDiagnosisInfoByUserId {
  constructor(
    @Inject(HistoryDiagnosisService)
    private historyDiagnosisService: HistoryDiagnosisService
  ) {}
  execute(userId: number): Observable<HistoryInfoDiagnosis[]> {
    return this.historyDiagnosisService.getAllHistoriesDiagnosisInfoByUserId(
      userId
    );
  }
}
