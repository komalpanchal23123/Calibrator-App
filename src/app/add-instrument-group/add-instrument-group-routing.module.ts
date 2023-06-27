import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddInstrumentGroupComponent } from './add-instrument-group.component';

const routes: Routes = [
  {
    path: 'add-instrument-group',
    component: AddInstrumentGroupComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AddInstrumentGroupRoutingModule {}
