import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class JwtConnectionService {
  public setRoles(roles: []) {
    localStorage.setItem('roles', JSON.stringify(roles));
  }

  public getRoles(): [] {
    const role: [] = JSON.parse(localStorage.getItem('roles') || '{}');
    return role;
  }

  public setToken(jwtToken: string) {
    localStorage.setItem('jwtToken', jwtToken);
  }
  public setId(id: any) {
    localStorage.setItem('id', id);
  }
  public getId() {
    return localStorage.getItem('id');
  }
  public getToken() {
    return localStorage.getItem('jwtToken');
  }

  public getEmpId() {
    return localStorage.getItem('id');
  }
  public clear() {
    localStorage.clear();
  }

  public isLoggedIn() {
    return this.getRoles() && this.getToken();
  }
}
