import { Observable } from "rxjs";
import { AuthResponse, LoginRequest, UserRequest } from "../models/Authentication";

export abstract class AuthenticationService{
    abstract login(LoginRequest:LoginRequest):Observable<AuthResponse>
    abstract register(userRequest:UserRequest):Observable<AuthResponse>
}
