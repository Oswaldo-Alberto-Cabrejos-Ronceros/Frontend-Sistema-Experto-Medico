import { Observable } from 'rxjs';
import { Diagnosis, DiagnosisRequest, DiagnosisResponse, DiagnosisSessionRequest } from '../domain/models/Diagnosis';
import { DiagnosisService } from '../domain/services/DiagnosisService';
import { Injectable } from '@angular/core';
import { environment } from '../../../environment/environment';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DiagnosisServiceImpl implements DiagnosisService {
  //url
  private readonly apiUrl = environment.apiUrl;

  constructor(private httpClient: HttpClient) {}

  diagnosticar(symptomsId: string[]): Observable<DiagnosisResponse> {
    const symtomsIdRequest: DiagnosisRequest = {
      sintomas: symptomsId,
    };
    return this.httpClient.post<DiagnosisResponse>(
      `${this.apiUrl}/diagnostico`,
      symtomsIdRequest
    );
  }

  diagnosticarSession(
    symptomsId: string[],
    userId: number
  ): Observable<DiagnosisResponse> {
    const diagnosisRequest: DiagnosisSessionRequest = {
      diagnosticoRequest: {
        sintomas: symptomsId,
      },
      user_id: userId,
    };
    return this.httpClient.post<DiagnosisResponse>(
      `${this.apiUrl}/diagnostico/session`,
      diagnosisRequest
    );
  }

  getDiagnosisById(diagnosisId: number): Observable<Diagnosis> {
    return this.httpClient.get<Diagnosis>(
      `${this.apiUrl}/diagnosticos/${diagnosisId}`
    );
  }
}
