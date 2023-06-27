import { Component, OnInit } from '@angular/core';
import { AllInstrumentsService } from '../all-instruments/all-instruments.service';
import { InstrumentDetailsService } from './instrument-details.service';
import { Router } from '@angular/router';
import {} from '../interface';

@Component({
  selector: 'app-instrument-details',
  templateUrl: './instrument-details.component.html',
  styleUrls: ['./instrument-details.component.css'],
})
export class InstrumentDetailsComponent implements OnInit {
  constructor(
    private router: Router,
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
        //console.log('res.data.instrument', res.data.data);
        this.instrumentDetails = res.data.data;
      });
  }

  onCalibrate() {
    this.router.navigate(['/calibrate-instrument']);
  }
}
