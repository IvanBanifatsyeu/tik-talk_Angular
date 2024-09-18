import { inject } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

export const canActivateAuth = () => {
  const isLoggenIn = inject(AuthService).isAuth;

  if (isLoggenIn) {
    return true
  }

  return inject(Router).createUrlTree(['/login'])
};
