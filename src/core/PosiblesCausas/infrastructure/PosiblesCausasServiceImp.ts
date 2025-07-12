import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environment/environment';
import { PosiblesCausasServices } from '../domain/services/PosiblesCausasServices';
import { PosiblesCausas } from '../domain/models/PosiblesCausas';

@Injectable()
export class PosiblesCausasServiceImpl implements PosiblesCausasServices {
  private readonly apiUrl = `${environment.apiUrl}/posibles_causas`;

  constructor(private httpClient: HttpClient) {}

  getPosiblesCausasByDiagnosisId(diagnosisId: number): Observable<PosiblesCausas> {
    return this.httpClient.get<PosiblesCausas>(`${this.apiUrl}/${diagnosisId}`);
  }
}
