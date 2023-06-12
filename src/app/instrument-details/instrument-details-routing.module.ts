import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InstrumentDetailsComponent } from './instrument-details.component';

const routes: Routes = [
  {
    path: 'instrument-details',
    component: InstrumentDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class InstrumentDetailsRoutingModule {}
