import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { DashboardComponent as PatientDashboardComponent }
  from './patient/dashboard/dashboard.component';

import { DashboardComponent as MedecinDashboardComponent }
  from './medecin/dashboard/dashboard.component';

import { DashboardComponent as AdminDashboardComponent }
  from './admin/dashboard/dashboard.component';
const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  { path: 'patient', component: PatientDashboardComponent },
  { path: 'medecin', component: MedecinDashboardComponent },
  { path: 'admin', component: AdminDashboardComponent },
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }