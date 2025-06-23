import { Observable } from "rxjs";
import { SymptomService } from "../domain/services/SymptomService";
import { Symptom } from "../domain/models/Symptom";
import { Inject, Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class GetAllSymtoms{
    constructor(@Inject(SymptomService) private symptomService: SymptomService){}

    execute():Observable<Symptom[]>{
        return this.symptomService.getAllSymtoms()
    }
}