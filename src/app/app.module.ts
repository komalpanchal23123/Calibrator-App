import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { LoginRoutingModule } from './login/login-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignUpRoutingModule } from './sign-up/signUp.routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashBoardRoutingModule } from './dashboard/dashboard-routing.module';
import { ManageInstrumentGroupComponent } from './manage-instrument-group/manage-instrument-group.component';
import { ManageInstrumentGroupRoutingModule } from './manage-instrument-group/manage-instrument-group-routing.module';
import { AllInstrumentsComponent } from './all-instruments/all-instruments.component';
import { AllInstrumentRoutingModule } from './all-instruments/all-instruments-routing.module';
import { InstrumentDetailsComponent } from './instrument-details/instrument-details.component';
import { InstrumentDetailsRoutingModule } from './instrument-details/instrument-details-routing.module';
import { AddEditInstrumentComponent } from './add-edit-instrument/add-edit-instrument.component';
import { AddEditInstrumentRoutingModule } from './add-edit-instrument/add-edit-instrument-routing.module';
import { ManageCalibrationTeamComponent } from './manage-calibration-team/manage-calibration-team.component';
import { ManageCalibrationTeamRoutingModule } from './manage-calibration-team/manage-calibration-team-routing.module';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    DashboardComponent,
    ManageInstrumentGroupComponent,
    AllInstrumentsComponent,
    InstrumentDetailsComponent,
    AddEditInstrumentComponent,
    ManageCalibrationTeamComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    LoginRoutingModule,
    SignUpRoutingModule,
    DashBoardRoutingModule,
    ManageInstrumentGroupRoutingModule,
    AllInstrumentRoutingModule,
    InstrumentDetailsRoutingModule,
    AddEditInstrumentRoutingModule,
    ManageCalibrationTeamRoutingModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
