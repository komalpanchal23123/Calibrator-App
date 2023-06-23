import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class AllInstrumentsService implements OnInit {
  constructor(private http: HttpClient) {}

  instrumentId$: BehaviorSubject<any> = new BehaviorSubject<any>({});

  ngOnInit(): void {
    this.getAllInstruments();
  }

  getAllInstruments() {
    return this.http.get('http://127.0.0.1:3000/api/v1/instruments');
  }
}
