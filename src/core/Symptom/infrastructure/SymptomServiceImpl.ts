import { HttpClient } from '@angular/common/http';
import { SymptomService } from '../domain/services/SymptomService';
import { Symptom } from '../domain/models/Symptom';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environment/environment';
@Injectable()
export class SymptomServiceImpl implements SymptomService {
  //url
  private readonly apiUrl = `/${environment.apiUrl}/symptom`;
  constructor(private httpClient: HttpClient) {}
  getAllSymtoms(): Observable<Symptom[]> {
    return this.httpClient.get<Symptom[]>(this.apiUrl);
  }
}
