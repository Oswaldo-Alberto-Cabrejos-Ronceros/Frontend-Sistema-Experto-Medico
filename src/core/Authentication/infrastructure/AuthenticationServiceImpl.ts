import { Observable } from "rxjs";
import { LoginRequest, AuthResponse, UserRequest } from "../domain/models/Authentication";
import { AuthenticationService } from "../domain/services/AuthenticationService";
import { Injectable } from "@angular/core";
import { environment } from "../../../environment/environment";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class AuthenticationServiceImpl implements AuthenticationService{

      //url
      private readonly apiUrl = `${environment.apiUrl}/auth`;

        constructor(private httpClient: HttpClient) {}



    login(LoginRequest: LoginRequest): Observable<AuthResponse> {
        return this.httpClient.post<AuthResponse>(`${this.apiUrl}/login`,LoginRequest)
    }
    register(userRequest: UserRequest): Observable<AuthResponse> {
        return this.httpClient.post<AuthResponse>(`${this.apiUrl}/register`,userRequest)
    }

}
