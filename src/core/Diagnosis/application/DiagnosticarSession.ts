import { Inject, Injectable } from '@angular/core';
import { DiagnosisService } from '../domain/services/DiagnosisService';
import { Observable } from 'rxjs';
import { DiagnosisResponse } from '../domain/models/Diagnosis';

@Injectable()
export class DiagnosticarSession {
  constructor(
    @Inject(DiagnosisService)
    private readonly diagnosisService: DiagnosisService
  ) {}

  execute(symptomsId: string[], userId: number): Observable<DiagnosisResponse> {
    return this.diagnosisService.diagnosticarSession(symptomsId, userId);
  }
}
