import { Observable } from 'rxjs';
import { Diagnosis, DiagnosisResponse } from '../models/Diagnosis';

export abstract class DiagnosisService {
  abstract diagnosticar(symptomsId: string[]): Observable<DiagnosisResponse>;
  abstract diagnosticarSession(symptomsId:string[],userId:number):Observable<DiagnosisResponse>
  abstract getDiagnosisById(diagnosisId: number): Observable<Diagnosis>;
}
