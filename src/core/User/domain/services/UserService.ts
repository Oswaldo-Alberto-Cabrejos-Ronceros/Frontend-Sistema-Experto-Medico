import { Observable } from "rxjs";
import { User } from "../models/User";


export abstract class UserService{
  abstract getUserMyInfoById(userId:number):Observable<User>
}
