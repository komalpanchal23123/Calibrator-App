import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './sign-up.component';
import { HttpClient } from '@angular/common/http';

const routes: Routes = [{ path: 'signUp', component: SignUpComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class SignUpRoutingModule {}
