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
export class ManageCalibrationTeamService {
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getAllTeams();
  }

  getAllTeams() {
    return this.http.get('http://127.0.0.1:3000/api/v1/team');
  }
}
