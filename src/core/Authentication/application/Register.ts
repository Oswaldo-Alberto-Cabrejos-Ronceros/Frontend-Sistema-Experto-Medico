import { Inject, Injectable } from '@angular/core';
import { AuthenticationService } from '../domain/services/AuthenticationService';
import { AuthResponse, UserRequest } from '../domain/models/Authentication';
import { Observable, tap } from 'rxjs';
import { SessionService } from '../../shared/Session/infrastructure/SessionService';

@Injectable()
export class Register {
  constructor(
    @Inject(AuthenticationService)
    private authenticationService: AuthenticationService,
    private sessionService:SessionService
  ) {}

  execute(userRequest: UserRequest): Observable<AuthResponse> {
    return this.authenticationService.register(userRequest).pipe(
      tap((authResponse:AuthResponse)=>{
        this.sessionService.setUserId(authResponse.user_id)
      })
    );
  }
}
