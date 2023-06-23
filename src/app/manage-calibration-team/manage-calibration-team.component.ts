import { Component } from '@angular/core';
import { ManageCalibrationTeamService } from './manage-calibration-team.service';
import { teamData, teamResponse } from '../interface';

@Component({
  selector: 'app-manage-calibration-team',
  templateUrl: './manage-calibration-team.component.html',
  styleUrls: ['./manage-calibration-team.component.css'],
})
export class ManageCalibrationTeamComponent {
  constructor(
    private manageCalibrationTeamService: ManageCalibrationTeamService
  ) {}
  userRole: string;
  allTeams: teamData[];

  ngOnInit(): void {
    this.userRole = localStorage.getItem('role');
    this.getTeams();
  }

  getTeams() {
    this.manageCalibrationTeamService
      .getAllTeams()
      .subscribe((res: teamResponse) => {
        this.allTeams = res.data.team;
        //console.log(res);
      });
  }
}
