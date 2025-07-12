import { Injectable } from '@angular/core';
import { User } from '../domain/models/User';
import { UserService } from '../domain/services/UserService';
import { Observable } from 'rxjs';
import { environment } from '../../../environment/environment';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserServiceImpl implements UserService {
  private readonly apiUrl = `${environment.apiUrl}/users`;

  constructor(private readonly httpClient: HttpClient) {}

  getUserMyInfoById(userId: number): Observable<User> {
    return this.httpClient.get<User>(`${this.apiUrl}/my-info/${userId}`)
  }
}
