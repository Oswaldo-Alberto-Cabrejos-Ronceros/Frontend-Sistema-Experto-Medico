import { Injectable } from '@angular/core';
import { HistoryDiagnosisService } from '../domain/services/HistoryDiagnosisService';
import { Observable } from 'rxjs';
import {
  HistoryDiagnosis,
  HistoryInfoDiagnosis,
} from '../domain/models/HistoryDiagnosis';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environment/environment';

@Injectable()
export class HistoryDiagnosisServiceImpl implements HistoryDiagnosisService {
  private readonly apiUrl = `${environment.apiUrl}/historial-diagnostico`;

  constructor(private httpClient: HttpClient) {}

  getHistoryDiagnosisById(
    historialDiagnosisId: number
  ): Observable<HistoryDiagnosis> {
    return this.httpClient.get<HistoryDiagnosis>(
      `${this.apiUrl}/${historialDiagnosisId}`
    );
  }
  getAllHistoriesDiagnosisByUserId(
    userId: number
  ): Observable<HistoryDiagnosis[]> {
    return this.httpClient.get<HistoryDiagnosis[]>(`${this.apiUrl}/${userId}`);
  }

  getAllHistoriesDiagnosisInfoByUserId(
    userId: number
  ): Observable<HistoryInfoDiagnosis[]> {
    return this.httpClient.get<HistoryInfoDiagnosis[]>(
      `${this.apiUrl}/info/${userId}`
    );
  }
}
