import { Component, OnInit } from '@angular/core';
import {
  calibrationAssignedData,
  calibrationAssignedResponse,
  instrumentResponse,
  pendingApprovalData,
  pendingApprovalResponse,
} from '../interface';
import { AllInstrumentsService } from '../all-instruments/all-instruments.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor(private allInstrumentsService: AllInstrumentsService) {}
  userRole: string;
  pendingApprovals: pendingApprovalData[];
  calibrationAssigns: calibrationAssignedData[];

  ngOnInit(): void {
    this.userRole = localStorage.getItem('role');
    this.getPendingApproval();
    this.getCalibrationAssigned();
  }

  getPendingApproval() {
    this.allInstrumentsService
      .getAllInstruments()
      .subscribe((res: pendingApprovalResponse) => {
        this.pendingApprovals = res.data.instrument;
        //console.log(res);
      });
  }

  getCalibrationAssigned() {
    this.allInstrumentsService
      .getAllInstruments()
      .subscribe((res: calibrationAssignedResponse) => {
        this.calibrationAssigns = res.data.instrument;
        // console.log(res);
      });
  }
}
