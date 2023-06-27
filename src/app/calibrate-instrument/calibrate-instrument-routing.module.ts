import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalibrateInstrumentComponent } from './calibrate-instrument.component';

const routes: Routes = [
  { path: 'calibrate-instrument', component: CalibrateInstrumentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class CalibrateInstrumentRoutingModule {}
