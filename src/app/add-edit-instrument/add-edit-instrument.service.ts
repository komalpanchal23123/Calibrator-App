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
export class AddEditInstrumentService {
  constructor(private http: HttpClient) {}

  // getAddEditInstrument(addEditData: any, id: string) {
  //   console.log('============data', addEditData);
  //   return this.http.patch('http://127.0.0.1:3000/api/v1/instruments/' + id, {
  //     ...addEditData,
  //   });
  // }
}
