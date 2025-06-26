import { Inject, Injectable } from '@angular/core';
import { AuthenticationService } from '../domain/services/AuthenticationService';
import { Observable, tap } from 'rxjs';
import { AuthResponse, LoginRequest } from '../domain/models/Authentication';
import { SessionService } from '../../shared/Session/infrastructure/SessionService';

@Injectable()
export class Login {
  constructor(
    @Inject(AuthenticationService)
    private authenticationService: AuthenticationService,
    private sessionService: SessionService
  ) {}

  execute(loginRequest: LoginRequest): Observable<AuthResponse> {
    return this.authenticationService.login(loginRequest).pipe(
      tap((authResponse: AuthResponse) => {
        this.sessionService.setUserId(authResponse.user_id);
      })
    );
  }
}
