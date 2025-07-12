import { Observable } from "rxjs";
import { Symptom } from "../models/Symptom";

export abstract class SymptomService{
    abstract getAllSymtoms():Observable<Symptom[]>;
}
