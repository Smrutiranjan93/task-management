import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { JwtConnectionService } from './jwt-connection.service';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  PATH_OF_API=environment.API_URL

  // api = 'http://117.211.75.160:8080/fireclay/api/';
  api = 'http://103.50.161.18:8080/fireclay/api/';
  // api = 'http://localhost:8081/api/';
  // api1 ='http://117.211.75.160:8080/fireclay/api/';
  api1 ='http://103.50.161.18:8080/fireclay/api/';
  // api1 ='http://localhost:8081/api/';
  // api2 ='http://117.211.75.160:8080/fireclay/product/';
  api2 ='http://103.50.161.18:8080/fireclay/product/';
  // api2 ='http://localhost:8081/product/';
  // private PATH_OF_API = 'http://117.211.75.160:8080/fireclay/api';
  // private PATH_OF_API = 'http://103.50.161.18:8080/fireclay/api';
  // private PATH_OF_API = 'http://localhost:8081/api';

  constructor(private http: HttpClient,private auth1:JwtConnectionService,
    private httpClient: HttpClient,) { }

  saveQuotation(data: any) {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.auth1.getToken()}`,
    });

    const requestOptions = { headers: headers };
    return this.http.post(
      this.PATH_OF_API + '/saveQuotation',
      data,
      requestOptions
    );
  }


getAllquotationDetails() {
  return this.http.get(this.PATH_OF_API + 'getAllQuetation');
  
} 

// getAllProduct(){
//     const headers = new HttpHeaders({
//       'Content-Type': 'application/json',
//       'Access-Control-Allow-Origin':'*',
//       Authorization: `Bearer ${this.auth1.getToken()}`,
//     });
//     const requestOptions = { headers: headers };
//   return this.http.get('http://117.211.75.160:8080/fireclay/product/' + 'getAllProduct',requestOptions);
// }
getAllProduct(){
  const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin':'*',
    Authorization: `Bearer ${this.auth1.getToken()}`,
  });
  const requestOptions = { headers: headers };
return this.http.get('http://103.50.161.18:8080/fireclay/product/' + 'getAllProduct',requestOptions);
}

  saveUserDetails(data: any) {
    return this.http.post(this.api  + 'saveUserDetails', data);
  }

  getRequestFormData(){
    return this.http.get(this.PATH_OF_API+'getRequestFormData')
  }
  requestFormSave(data:any){
    return this.http.post(this.PATH_OF_API  + 'requestFormSave', data);
  }
  getRequestFormDataById(id:any){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin':'*',
      Authorization: `Bearer ${this.auth1.getToken()}`,
    });
    let params=new HttpParams();
    params=params.append("id",id)
    const requestOptions = { headers: headers ,params:params};
    return this.http.get(this.PATH_OF_API+'/getRequestFormDataById',requestOptions)

  }
  // getProductById(id:number){
  //   const headers = new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     'Access-Control-Allow-Origin':'*',
  //     Authorization: `Bearer ${this.auth1.getToken()}`,
  //   });
  //   let params=new HttpParams();
  //   params=params.append("id",id)
  //   const requestOptions = { headers: headers ,params:params};
  //   return this.http.get('http://117.211.75.160:8080/fireclay/product/'+'getProductById',requestOptions)


  // }

  getProductById(id:number){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin':'*',
      Authorization: `Bearer ${this.auth1.getToken()}`,
    });
    let params=new HttpParams();
    params=params.append("id",id)
    const requestOptions = { headers: headers ,params:params};
    return this.http.get('http://103.50.161.18:8080/fireclay/product/'+'getProductById',requestOptions)


  }

    // Method to get comments by requestFormCd
    getRequestFormCommentByFormCode(requestFormCd: string): Observable<any> {
      const headers = new HttpHeaders({
        Authorization: `Bearer ${this.auth1.getToken()}`,
      });
  
      let params = new HttpParams();
      params = params.append('requestFormCd', requestFormCd);
  
      const requestOptions = {
        headers: headers,
        params: params
      };
  
      return this.httpClient.get(`${this.PATH_OF_API}/getRequestFormCommentByFormCode`, requestOptions);
    }
  
    // Method to get the JWT token (Assuming you have implemented it in your service)
    private getToken(): string {
      // Implement your token retrieval logic here
      // For example, you might have a method to get the token from local storage or a variable holding the token
      return 'YOUR_JWT_TOKEN';
    }
}
