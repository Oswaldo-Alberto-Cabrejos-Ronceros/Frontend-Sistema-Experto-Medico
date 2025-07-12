import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  private readonly userIdKey = 'userId';

  //save user id
  setUserId(id: number): void {
    sessionStorage.setItem(this.userIdKey, id.toString());
  }

  //return user id
  getUserId(): number {
    const userId = sessionStorage.getItem(this.userIdKey);
    if (!userId) throw new Error('User id no encontrado');
    return Number(userId);
  }

  deleteUserId(): void {
    sessionStorage.removeItem(this.userIdKey);
  }
}
