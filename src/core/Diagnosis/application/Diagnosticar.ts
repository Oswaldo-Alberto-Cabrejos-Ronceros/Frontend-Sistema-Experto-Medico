import { Inject, Injectable } from '@angular/core';
import { DiagnosisService } from '../domain/services/DiagnosisService';
import { Observable } from 'rxjs';
import { DiagnosisResponse } from '../domain/models/Diagnosis';

@Injectable()
export class Diagnosticar {
  constructor(
    @Inject(DiagnosisService)
    private diagnosisService: DiagnosisService
  ) {}

  execute(symptomsId: number[]): Observable<DiagnosisResponse> {
    return this.diagnosisService.diagnosticar(symptomsId);
  }
}
