import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JwtConnectionService } from './jwt-connection.service';

import { environment } from 'src/environments/environment';

const FormAPI = '/fireclay';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  PATH_OF_API = environment.API_URL;

  getRequestFormDataById(id: any) {
    throw new Error('Method not implemented.');
  }

  // private apiUrl1 = 'http://117.211.75.160:8080/fireclay/product/getAllProduct'; // Replace with your API endpoint
  // private apiUrl1 = 'http://103.50.161.18:8080/fireclay/product/getAllProduct'; // Replace with your API endpoint
  // private apiUrl1 = 'http://localhost:8081/product/getAllProduct';
  // private apiUrl3 = 'http://103.50.161.18:8080/fireclay/api/getDashboardStatistics';
  // private apiUrl3 = 'http://117.211.75.160:8080/fireclay/api/getDashboardStatistics';
  // private apiUrl3 = 'http://localhost:8081/api/getDashboardStatistics'; // Replace with your API endpoint

  // private apiUrl = 'http://103.50.161.18:8080/fireclay/product/saveProduct'; // Replace with your API endpoint
  // private apiUrl = 'http://117.211.75.160:8080/fireclay/product/saveProduct'; // Replace with your API endpoint
  // private apiUrl = 'http://localhost:8081/product/saveProduct';
  // PATH_OF_API = 'http://103.50.161.18:8080/fireclay/api';
  // PATH_OF_API = 'http://117.211.75.160:8080/fireclay/api';
  // PATH_OF_API = 'http://localhost:8081/api';

  requestHeader = new HttpHeaders({ 'No-Auth': 'True' });

  constructor(
    private httpClient: HttpClient,
    private jwtConnectionService: JwtConnectionService
  ) {}

  // getProduct(): Observable<any> {
  //   const headers = new HttpHeaders({
  //     Authorization: `Bearer ${this.jwtConnectionService.getToken()}`,
  //   });
  //   const requestOptions = { headers: headers};

  //   return this.httpClient.get<any>('http://117.211.75.160:8080/fireclay/product/getAllProduct',requestOptions);

  // }
  getProduct(): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.jwtConnectionService.getToken()}`,
    });
    const requestOptions = { headers: headers };

    return this.httpClient.get<any>(
      'http://103.50.161.18:8080/fireclay/product/getAllProduct',
      requestOptions
    );
  }
  getDashboardStatistics() {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.jwtConnectionService.getToken()}`,
    });
    const requestOptions = { headers: headers };

    return this.httpClient.get<any>(
      this.PATH_OF_API + '/getDashboardStatistics',
      requestOptions
    );
  }
  // createProduct(data: any): Observable<any> {
  //   const headers = new HttpHeaders({
  //     Authorization: `Bearer ${this.jwtConnectionService.getToken()}`,
  //   });
  //   const requestOptions = { headers: headers};
  //   return this.httpClient.post<any>('http://117.211.75.160:8080/fireclay/product/saveProduct', data,
  //     requestOptions
  //     );
  // }

  createProduct(data: any): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.jwtConnectionService.getToken()}`,
    });
    const requestOptions = { headers: headers };
    return this.httpClient.post<any>(
      'http://103.50.161.18:8080/fireclay/product/saveProduct',
      data,
      requestOptions
    );
  }

  // deleteProduct(id: string): Observable<any> {
  //   const url = `${'http://117.211.75.160:8080/fireclay/product/saveProduct'}/${id}`;
  //   return this.httpClient.delete<any>(url);
  // }
  deleteProduct(id: string): Observable<any> {
    const url = `${'http://103.50.161.18:8080/fireclay/product/saveProduct'}/${id}`;
    return this.httpClient.delete<any>(url);
  }

  // getempRequestform(): Observable<any> {
  //   const headers = new HttpHeaders({
  //     Authorization: `Bearer ${this.jwtConnectionService.getToken()}`,
  //   });
  //   const requestOptions = { headers: headers};

  //   return this.httpClient.get<any>(this.apiUrl2,requestOptions);
  //   }

  // getRequesteFormDataById(id:any) {
  //   const headers = new HttpHeaders({
  //     Authorization: `Bearer ${this.jwtConnectionService.getToken()}`,
  //   });
  // let params=new HttpParams();
  // params=params.append('id',id)
  //   const requestOptions = {
  //     headers: headers,
  //     params: params
  //   };
  //   return this.httpClient.get(
  //     this.PATH_OF_API + '/getRequestFormDataById',
  //     requestOptions
  //   );
  // }

  getAllViewForms() {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.jwtConnectionService.getToken()}`,
    });

    const requestOptions = { headers: headers };
    return this.httpClient.get(
      this.PATH_OF_API + '/getRequestFormData',
      requestOptions
    );
  }

  employeeRegister(empRegistration: any): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.jwtConnectionService.getToken()}`,
    });
    const requestOptions = { headers: headers };

    // Send the empRegistration data as the request body
    return this.httpClient.post(
      this.PATH_OF_API + '/saveEmployeeDetails',
      empRegistration,
      requestOptions
    );
  }

  // Fetch All Employees
  getAllEmployees(): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.jwtConnectionService.getToken()}`,
    });
    const requestOptions = { headers: headers };

    return this.httpClient.get(
      this.PATH_OF_API + '/getEmployeelist',
      requestOptions
    );
  }

  // Update Employee

  updateEmployee(updatedData: any): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.jwtConnectionService.getToken()}`,
    });
    const requestOptions = { headers: headers };

    return this.httpClient.put(
      this.PATH_OF_API + `/updateEmployee/`,
      updatedData,
      requestOptions
    );
  }

  updateReqFormStatus(status: any, req_id: any): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.jwtConnectionService.getToken()}`,
    });

    // Construct the request options with headers
    const requestOptions = { headers: headers };

    // Make the PUT request with the proper API endpoint and the status and request ID as query parameters
    return this.httpClient.put(
      `${this.PATH_OF_API}/updateStatus?status=${status}&id=${req_id}`,
      null, // Passing null as the request body for PUT request
      requestOptions
    );
  }

  getAllViewForm() {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.jwtConnectionService.getToken()}`,
    });

    const requestOptions = { headers: headers };
    return this.httpClient.get(
      this.PATH_OF_API + '/getRequestFormData',
      requestOptions
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

  saveRequestFormTrackingRecord(data: any): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.jwtConnectionService.getToken()}`,
    });

    const requestOptions = {
      headers: headers,
    };
    return this.httpClient.post(
      this.PATH_OF_API + '/saveRequestFormTrackingRecord',
      data,
      requestOptions
    );
  }
  getRequestFormCommentByFormCode(id: any) {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.jwtConnectionService.getToken()}`,
    });
    let params = new HttpParams();
    params = params.append('requestFormCd', id);

    const requestOptions = {
      headers: headers,
      params: params,
    };
    return this.httpClient.get(
      this.PATH_OF_API + '/getRequestFormCommentByFormCode',
      requestOptions
    );
  }
  getEmployeeList() {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.jwtConnectionService.getToken()}`,
    });
    const requestOptions = {
      headers: headers,
    };
    return this.httpClient.get(
      this.PATH_OF_API + '/getEmployeelist',
      requestOptions
    );
  }
  getByRequestFormCode(id: any) {
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
      this.PATH_OF_API + '/getByRequestFormCode',
      requestOptions
    );
  }
}
