import { Observable } from "rxjs";
import { PosiblesCausas } from "../models/PosiblesCausas";

export abstract class PosiblesCausasServices{
  abstract getPosiblesCausasByDiagnosisId(diagnosisId:number):Observable<PosiblesCausas>
}
