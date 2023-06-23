import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class ManageInstrumentGroupService implements OnInit {
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getAllGroups();
  }

  getAllGroups() {
    return this.http.get('http://127.0.0.1:3000/api/v1/group');
  }
}
