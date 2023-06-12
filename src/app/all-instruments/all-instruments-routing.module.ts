import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllInstrumentsComponent } from './all-instruments.component';

const routes: Routes = [
  {
    path: 'all-instrument',
    component: AllInstrumentsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AllInstrumentRoutingModule {}
