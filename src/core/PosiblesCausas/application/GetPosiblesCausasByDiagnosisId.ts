import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PosiblesCausasServices } from '../domain/services/PosiblesCausasServices';
import { PosiblesCausas } from '../domain/models/PosiblesCausas';

@Injectable()
export class GetPosiblesCausasByDiagnosisId {
  constructor(
    @Inject(PosiblesCausasServices)
    private readonly posiblesCausasService: PosiblesCausasServices
  ) {}

  execute(diagnosisId: number): Observable<PosiblesCausas> {
    return this.posiblesCausasService.getPosiblesCausasByDiagnosisId(diagnosisId);
  }
}
