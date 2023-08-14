import { Component, Injectable, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { JwtConnectionService } from '../services/jwt-connection.service';
// import { UserService } from '../user.service';
// import { ReCaptcha2Component } from 'ngx-captcha';
import Swal from 'sweetalert2';
import { BehaviorSubject } from 'rxjs';
import { IfStmt } from '@angular/compiler';

@Injectable()
export class TransferDataService {
  private idSubject = new BehaviorSubject<boolean>(false);
  setId(id: boolean) {
    this.idSubject.next(id);
  }
  getId() {
    return this.idSubject.asObservable();
  }
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  // image = 'assets/img/landingpage/fireclay3.jpg';
  @Input() data: string;
  loginForm: FormGroup;
  aFormGroup: FormGroup;
  submitted = false;
  reCAPTCHAToken: string = '';
  tokenVisible: boolean = false;
  error: string | null = null; // Declare error property and initialize as null
  loading = false;
  errorMessage = '';
  user: any;
  // siteKey: string = '6Ldu3nwnAAAAAFd7wcqYVSMLK2VvcThfU0LJIQC3';
  siteKey: string = '6Lfm3nwnAAAAAJTdYkxMcnEj_gXORpDif7E4DqIr';
  // Add a property to store generic error message
  genericErrorMessage: string = 'An error occurred. Please try again later.';

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private jwtConnectionService: JwtConnectionService,
    private router: Router,
    // private userService: UserService,
    private service: TransferDataService
  ) // private sharedService: SharedService
  {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
      // recaptcha: [null, Validators.required],
    });
  }
  // siteKey: string = '6LdvR0gnAAAAAIpUP-QweHBQahkFmccMS6X5y5Q3';

  get f() {
    return this.loginForm.controls;
  }

  login() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    this.loading = true;

    this.authService.login(this.loginForm.value).subscribe((response: any) => {
      if (response.overallStatus === 'error') {
        this.loading = false;
        Swal.fire({
          icon: 'error',
          title: 'error',
          text: `${response.message} Login Failed`,
          confirmButtonText: 'OK',
        });
      }

      // this.userService.setUserData(response.data.loginDtoResponse);
      const role = response.data.loginDtoResponse.role;
      localStorage.setItem('role',role)
      localStorage.setItem('jwtToken', response.data.accessToken);
      localStorage.setItem('id', response.data.loginDtoResponse.id);
      this.loading = false;

      if (role === 'user') {
        this.router.navigateByUrl('/user');
      } else if (role === 'ADMIN') {
        this.router.navigateByUrl('/admin');
      } else if (role === 'Employee') {
        this.router.navigateByUrl('/employee');
      }
    });
  }
  transfer() {
    this.service.setId(false);
    // this.sharedService.isFromLoginComponent = true;
  }
}
