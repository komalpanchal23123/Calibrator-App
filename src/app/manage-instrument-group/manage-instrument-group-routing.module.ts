import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManageInstrumentGroupComponent } from './manage-instrument-group.component';

const routes: Routes = [
  {
    path: 'manage-instrument-group',
    component: ManageInstrumentGroupComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class ManageInstrumentGroupRoutingModule {}
