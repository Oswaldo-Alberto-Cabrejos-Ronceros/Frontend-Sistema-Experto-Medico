import { Observable } from "rxjs";
import { HistoryDiagnosis } from "../models/HistoryDiagnosis";

export abstract class HistoryDiagnosisService{
  abstract getHistoryDiagnosisById(historialDiagnosisId:number):Observable<HistoryDiagnosis>
  abstract getAllHistoriesDiagnosisByUserId(userId:number):Observable<HistoryDiagnosis[]>
}
