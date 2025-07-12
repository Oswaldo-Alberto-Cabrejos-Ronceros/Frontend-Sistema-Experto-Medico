import { Inject, Injectable } from '@angular/core';
import { UserService } from '../domain/services/UserService';
import { Observable } from 'rxjs';
import { User } from '../domain/models/User';

@Injectable()
export class GetUserMyInfoById {
  constructor(@Inject(UserService) private readonly userService: UserService) {}
  execute(userId: number): Observable<User> {
    return this.userService.getUserMyInfoById(userId);
  }
}
