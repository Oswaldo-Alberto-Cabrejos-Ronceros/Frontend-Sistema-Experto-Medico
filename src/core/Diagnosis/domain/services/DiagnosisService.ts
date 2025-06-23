import { Observable } from 'rxjs';
import { Diagnosis } from '../models/Diagnosis';

export abstract class DiagnosisService {
  abstract diagnosticar(symptomsId: number[]): Observable<Diagnosis>;
  abstract getDiagnosisById(diagnosisId: number): Observable<Diagnosis>;
}
