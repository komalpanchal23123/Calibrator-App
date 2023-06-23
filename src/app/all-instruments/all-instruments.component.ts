import { Component, OnInit } from '@angular/core';
import { AllInstrumentsService } from './all-instruments.service';
import { instrumentData, instrumentResponse } from '../interface';

@Component({
  selector: 'app-all-instruments',
  templateUrl: './all-instruments.component.html',
  styleUrls: ['./all-instruments.component.css'],
})
export class AllInstrumentsComponent implements OnInit {
  constructor(private allInstrumentsService: AllInstrumentsService) {}
  userRole: string;
  allInstruments: instrumentData[];

  ngOnInit(): void {
    this.userRole = localStorage.getItem('role');
    this.getInstruments();
  }

  edit(id) {
    this.allInstrumentsService.instrumentId$.next(id);
  }

  getInstruments() {
    this.allInstrumentsService
      .getAllInstruments()
      .subscribe((res: instrumentResponse) => {
        this.allInstruments = res.data.instrument;
        //console.log(res);
      });
  }
}
