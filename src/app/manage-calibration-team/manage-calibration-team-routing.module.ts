import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManageCalibrationTeamComponent } from './manage-calibration-team.component';

const routes: Routes = [
  {
    path: 'manage-calibration-team',
    component: ManageCalibrationTeamComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class ManageCalibrationTeamRoutingModule {}
