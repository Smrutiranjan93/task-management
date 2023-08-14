import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Role } from '../models/role';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root', // This makes the AuthGuard available as a singleton service throughout the app
})
export class AuthGuard implements CanActivate {

  constructor( private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | UrlTree {
    const currentUserRole = localStorage.getItem("role"); 
   
    if (currentUserRole === Role.Admin && route.data['expectedRole'] !== Role.Admin) {
      alert('You do not have access to the request module.');
      return this.router.createUrlTree(['/admin']);
    } else if (currentUserRole === Role.Employee && route.data['expectedRole'] !== Role.Employee) {
      alert('You do not have access to the request module.');
      return this.router.createUrlTree(['/employee']);
    } else if (currentUserRole === Role.User && route.data['expectedRole'] !== Role.User) {
      alert('You do not have access to the request module.');
      return this.router.createUrlTree(['/user']);
    } else {
      return true;
    }

    
  }
 
}