import { Observable } from 'rxjs';
import { Diagnosis, DiagnosisResponse } from '../domain/models/Diagnosis';
import { DiagnosisService } from '../domain/services/DiagnosisService';
import { Injectable } from '@angular/core';
import { environment } from '../../../environment/environment';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DiagnosisServiceImpl implements DiagnosisService {
  //url
  private readonly apiUrl = environment.apiUrl;

  constructor(private httpClient: HttpClient) {}

  diagnosticar(symptomsId: number[]): Observable<DiagnosisResponse> {
    return this.httpClient.post<DiagnosisResponse>(
      `${this.apiUrl}/diagnosticar`,
      symptomsId
    );
  }
  getDiagnosisById(diagnosisId: number): Observable<Diagnosis> {
    return this.httpClient.get<Diagnosis>(
      `${this.apiUrl}/diagnosticos/${diagnosisId}`
    );
  }
}
