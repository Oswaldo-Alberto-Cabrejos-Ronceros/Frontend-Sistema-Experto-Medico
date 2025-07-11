import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const userId = sessionStorage.getItem('userId');

  if (userId) {
    return true;
  }

  const router = inject(Router);
  router.navigate(['/auth/login']);
  return false;
};
