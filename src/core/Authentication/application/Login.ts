import { Inject, Injectable } from '@angular/core';
import { AuthenticationService } from '../domain/services/AuthenticationService';
import { Observable } from 'rxjs';
import { AuthResponse, LoginRequest } from '../domain/models/Authentication';

@Injectable({
  providedIn: 'root',
})
export class Login {
  constructor(
    @Inject(AuthenticationService)
    private authenticationService: AuthenticationService
  ) {}

  execute(loginRequest: LoginRequest): Observable<AuthResponse> {
    return this.authenticationService.login(loginRequest);
  }
}
