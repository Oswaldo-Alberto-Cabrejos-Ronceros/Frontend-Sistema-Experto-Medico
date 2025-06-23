import { Inject, Injectable } from '@angular/core';
import { DiagnosisService } from '../domain/services/DiagnosisService';
import { Observable } from 'rxjs';
import { Diagnosis } from '../domain/models/Diagnosis';

@Injectable({
  providedIn: 'root',
})
export class GetDiagnosisById {
  constructor(
    @Inject(DiagnosisService)
    private diagnosisService: DiagnosisService
  ) {}

  execute(diagnosisId: number): Observable<Diagnosis> {
    return this.diagnosisService.getDiagnosisById(diagnosisId);
  }
}
