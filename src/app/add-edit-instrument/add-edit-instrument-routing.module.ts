import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEditInstrumentComponent } from './add-edit-instrument.component';

const routes: Routes = [
  {
    path: 'add-edit-instrument',
    component: AddEditInstrumentComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AddEditInstrumentRoutingModule {}
