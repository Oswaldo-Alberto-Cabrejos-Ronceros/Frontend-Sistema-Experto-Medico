import { Inject, Injectable } from '@angular/core';
import { AuthenticationService } from '../domain/services/AuthenticationService';
import { AuthResponse, UserRequest } from '../domain/models/Authentication';
import { Observable } from 'rxjs';

@Injectable()
export class Register {
  constructor(
    @Inject(AuthenticationService)
    private authenticationService: AuthenticationService
  ) {}

  execute(userRequest: UserRequest): Observable<AuthResponse> {
    return this.authenticationService.register(userRequest);
  }
}
