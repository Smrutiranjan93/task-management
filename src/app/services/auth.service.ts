import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';

import { Observable, Subject, throwError } from 'rxjs';
import { JwtConnectionService } from './jwt-connection.service';
import { catchError, tap } from 'rxjs/operators';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  PATH_OF_API = environment.API_URL;

  private user: any; // Modify 'any' with the actual type of your user object
  error = new Subject<string>();

  getRequestFormCommentByFormCode(id: any) {
    throw new Error('Method not implemented.');
  }
  // PATH_OF_API = 'http://117.211.75.160:8080/fireclay/api';
  // PATH_OF_API = 'http://103.50.161.18:8080/fireclay/api';
  // PATH_OF_API = 'http://localhost:8081/api';
  // PATH_OF_API1 = 'http://localhost:8081/product';
  // PATH_OF_API1 = 'http://117.211.75.160:8080/fireclay/product';
  // PATH_OF_API1 = 'http://103.50.161.18:8080/fireclay/product';

  // requestHeader = new HttpHeaders({ 'No-Auth': 'True' });
  requestHeader = new HttpHeaders({ 'No-Auth': 'True' });

  constructor(
    private httpClient: HttpClient,
    private jwtConnectionService: JwtConnectionService
  ) {}
  userRegister(userRegistration: any) {
    return this.httpClient.post(
      this.PATH_OF_API + '/saveUserDetails',
      userRegistration,
      {
        headers: this.requestHeader,
      }
    );
  }
  updateRegister(data: any) {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.jwtConnectionService.getToken()}`,
    });

    const requestOptions = { headers: headers };
    return this.httpClient.put(
      this.PATH_OF_API + '/updateUser',
      data,
      requestOptions
    );
  }

  login(loginData: any) {
    return this.httpClient
      .post(`${this.PATH_OF_API}/login`, loginData, {
        headers: this.requestHeader,
      })
      .pipe(
        tap((response: any) => {
          localStorage.setItem('userData', JSON.stringify(response.data));
        })
      );
  }

  forgotPassword(email: any) {
    let params = new HttpParams();
    params = params.append('emailId', email);
    return this.httpClient.post(this.PATH_OF_API + '/forgotPassword', null, {
      params: params,
    });
  }
  resetPassword(token: string, password: string) {
    return this.httpClient
      .post<any>(this.PATH_OF_API + '/resetPassword', {
        token,
        password,
      })
      .pipe(catchError((error: HttpErrorResponse) => this.handleError(error)));
  }
  private handleError(err: HttpErrorResponse) {
    const errorMessage = err.error.message;
    this.error.next(errorMessage);
    return throwError(() => new Error(errorMessage));
  }
  public getUserData(): any {
    const userData = localStorage.getItem('userData');
    return userData ? JSON.parse(userData) : null;
  }

  getAllUsers(): Observable<any[]> {
    return this.httpClient.get<any[]>(
      this.PATH_OF_API + '/admin/getAllUsers'
    );
  }

  saveForm(data: any) {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.jwtConnectionService.getToken()}`,
    });

    const requestOptions = { headers: headers };
    return this.httpClient.post(
      this.PATH_OF_API + '/requestFormSave',
      data,
      requestOptions
    );
  }

  updateStatusCancel(data: any): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.jwtConnectionService.getToken()}`,
    });

    const requestOptions = { headers: headers };
    return this.httpClient.put<any>(
      `${this.PATH_OF_API}/updateRequestFormData`,
      data,
      requestOptions
    );
  }

  employeeRegister(empRegistration: any) {
    return this.httpClient.post(
      this.PATH_OF_API + '/saveEmployeeDetails',
      empRegistration,
      {
        headers: this.requestHeader,
      }
    );
  }
  getRequestFormById(id: any) {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.jwtConnectionService.getToken()}`,
    });
    let params = new HttpParams();
    params = params.append('id', id);
    const requestOptions = {
      headers: headers,
      params: params,
    };
    return this.httpClient.get(
      this.PATH_OF_API + '/getRequestFormDataById',
      requestOptions
    );
  }
  getRequestFormData(data: any) {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.jwtConnectionService.getToken()}`,
    });
    const requestOptions = {
      headers: headers,
    };
    return this.httpClient.get(
      this.PATH_OF_API + '/fetchRequestFormRecordsByUserName',
      requestOptions
    );
  }
  getCommentByFormId(id: any) {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.jwtConnectionService.getToken()}`,
    });
    let params = new HttpParams();
    params = params.append('id', id);
    const requestOptions = {
      headers: headers,
      params: params,
    };
    return this.httpClient.get(
      this.PATH_OF_API + '/getRequestFormCommentByFormCode',
      requestOptions
    );
  }
  getAllQuotationDetails() {
    return this.httpClient.get(this.PATH_OF_API + '/getAllQuetation');
  }
  // getAllProduct() {
  //   return this.httpClient.get(this.PATH_OF_API1 + '/getAllProduct');
  // }
  saveQuotation(data: any) {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.jwtConnectionService.getToken()}`,
    });

    const requestOptions = { headers: headers };
    return this.httpClient.post(
      this.PATH_OF_API + '/saveQuotation',
      data,
      requestOptions
    );
  }

  // getAllProduct(): Observable<any> {
  //   const headers = new HttpHeaders({
  //     Authorization: `Bearer ${this.jwtConnectionService.getToken()}`,
  //   });

  //   return this.httpClient
  //     .get<any>('http://117.211.75.160:8080/fireclay/product/getAllProduct', {
  //       headers: headers,
  //     })
  //     .pipe(tap((response: any) => {}));
  // }
  getAllProduct(): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.jwtConnectionService.getToken()}`,
    });

    return this.httpClient
      .get<any>('http://103.50.161.18:8080/fireclay/product/getAllProduct', {
        headers: headers,
      })
      .pipe(tap((response: any) => {}));
  }
  updateItemRequest(data: any) {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.jwtConnectionService.getToken()}`,
    });

    const requestOptions = { headers: headers };
    return this.httpClient.put(
      this.PATH_OF_API + '/updateItem',
      data,
      requestOptions
    );
  }

  updateUserRequest(data: any) {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.jwtConnectionService.getToken()}`,
    });

    const requestOptions = { headers: headers };
    return this.httpClient.put(
      this.PATH_OF_API + '/updateRequestFormData',
      data,
      requestOptions
    );
  }
}
