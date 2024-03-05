import { CanActivateFn } from '@angular/router';

export const sadminGuard: CanActivateFn = (route, state) => {
  return true;
};
