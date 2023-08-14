import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

export class HideLayoutGuard implements CanActivate {
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // Check if the current route belongs to admin, employee, or user modules
    // If it does, return false to hide the header and footer
    return !state.url.startsWith('/admin') && !state.url.startsWith('/employee') && !state.url.startsWith('/user');
  }
}
