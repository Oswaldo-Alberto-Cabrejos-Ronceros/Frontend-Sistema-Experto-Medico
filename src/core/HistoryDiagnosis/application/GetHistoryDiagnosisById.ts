import { Inject, Injectable } from '@angular/core';
import { HistoryDiagnosisService } from '../domain/services/HistoryDiagnosisService';
import { Observable } from 'rxjs';
import { HistoryDiagnosis } from '../domain/models/HistoryDiagnosis';

@Injectable()
export class GetHistoryDiagnosisById {
  constructor(
    @Inject(HistoryDiagnosisService)
    private historyDiagnosisService: HistoryDiagnosisService
  ) {}

  execute(historiaDiagnosisId: number): Observable<HistoryDiagnosis> {
    return this.historyDiagnosisService.getHistoryDiagnosisById(
      historiaDiagnosisId
    );
  }
}
