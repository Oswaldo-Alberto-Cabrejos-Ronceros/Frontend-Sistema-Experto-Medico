import { Observable } from "rxjs";
import { HistoryDiagnosis, HistoryInfoDiagnosis } from "../models/HistoryDiagnosis";

export abstract class HistoryDiagnosisService{
  abstract getHistoryDiagnosisById(historialDiagnosisId:number):Observable<HistoryDiagnosis>
  abstract getAllHistoriesDiagnosisByUserId(userId:number):Observable<HistoryDiagnosis[]>
  abstract getAllHistoriesDiagnosisInfoByUserId(userId:number):Observable<HistoryInfoDiagnosis[]>
}
