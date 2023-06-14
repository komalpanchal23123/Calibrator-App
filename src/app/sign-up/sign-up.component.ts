import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
//import { SignUp, SignUpService } from './sign-up.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent {
  constructor(
    private router: Router,
    private http: HttpClient
  ) //private signUpService: SignUpService
  {}

  // signUp: SignUp;
  // signupData: any;

  onSignUp() {
    // this.signUpService.getSignUp().subscribe((data: SignUp) => {
    //   this.signupData = {
    //     email: (data as any).email,
    //     password: (data as any).password,
    //     confirmPassword: (data as any).confirmPassword,
    //   };
    //   console.log(this.signupData);
    // });
  }
}
