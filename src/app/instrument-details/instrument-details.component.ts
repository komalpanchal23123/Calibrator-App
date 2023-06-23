import { Component, OnInit } from '@angular/core';
import { AllInstrumentsService } from '../all-instruments/all-instruments.service';
import { instrumentData, instrumentResponse } from '../interface';
import { InstrumentDetailsService } from './instrument-details.service';
import { takeUntil } from 'rxjs';

@Component({
  selector: 'app-instrument-details',
  templateUrl: './instrument-details.component.html',
  styleUrls: ['./instrument-details.component.css'],
})
export class InstrumentDetailsComponent implements OnInit {
  constructor(
    private allInstrumentsService: AllInstrumentsService,
    private instrumentDetailsService: InstrumentDetailsService
  ) {}
  instrumentDetails: any;
  instrumentId: string;

  ngOnInit(): void {
    this.getInstrumentId();
    this.getInstrumentDetails();
  }

  private getInstrumentId() {
    this.allInstrumentsService.instrumentId$.pipe().subscribe((id) => {
      this.instrumentId = id;
      // console.log('this.instrumentId', this.instrumentId);
    });
  }

  getInstrumentDetails() {
    this.instrumentDetailsService
      .getInstrumentDetail(this.instrumentId)
      .subscribe((res: any) => {
        // console.log('res.data.instrument', res.data.data);
        this.instrumentDetails = res.data.data;
      });
  }
}
