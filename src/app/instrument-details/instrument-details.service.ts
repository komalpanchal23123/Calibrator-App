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
export class InstrumentDetailsService {
  constructor(private http: HttpClient) {}
  instrumentId: string;

  ngOnInit(): void {
    // this.getInstrumentDetails();
    this.getInstrumentDetail(this.instrumentId);
  }

  getInstrumentDetail(instrumentId: string) {
    return this.http.get(
      `http://127.0.0.1:3000/api/v1/instruments/${instrumentId}`
    );
  }
}
