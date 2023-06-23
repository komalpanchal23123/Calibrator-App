import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

// export interface SignUp {
//   email: string;
//   password: string;
//   confirmPassword: string;
// }

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class SignUpService {
  constructor(private http: HttpClient) {}

  getSignUp(payload: any) {
    // signUpUrl = 'http://127.0.0.1:3000/api/v1/user/signup';
    //const headers = { Authorization: 'Bearer my-token' };
    return this.http.post('http://127.0.0.1:3000/api/v1/user/signup', {
      ...payload,
    });
  }
}
