// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable, throwError } from 'rxjs';
// import { catchError, retry } from 'rxjs/operators';

// export interface SignUp {
//   email: string;
//   password: string;
//   confirmPassword: string;
// }

// @Injectable({
//   providedIn: 'root',
// })
// export class SignUpService {
//   constructor(private http: HttpClient) {}

//   getSignUp() {
//     // signUpUrl = 'http://127.0.0.1:3000/api/v1/user/signup';
//     //const headers = { Authorization: 'Bearer my-token' };
//     return this.http.post<SignUp>(
//       'http://127.0.0.1:4200/api/v1/user/signup',
//       {}
//     );
//   }
// }
