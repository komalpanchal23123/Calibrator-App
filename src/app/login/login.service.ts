import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  getLogin(payload: any) {
    return this.http.post('http://127.0.0.1:3000/api/v1/user/login', {
      headers: httpOptions.headers,
    });
  }
}
