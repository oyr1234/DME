import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DmeComponent } from './dme/dme.component';
import { OrdonnancesComponent } from './ordonnances/ordonnances.component';
import { ProfileComponent } from './profile/profile.component';
import { ConsultationsComponent } from './consultations/consultations.component';
import { AnalysesComponent } from './analyses/analyses.component';
import { MessagesComponent } from './messages/messages.component';
import { AccessManagementComponent } from './access-management/access-management.component';



@NgModule({
  declarations: [
    DashboardComponent,
    DmeComponent,
    OrdonnancesComponent,
    ProfileComponent,
    ConsultationsComponent,
    AnalysesComponent,
    MessagesComponent,
    AccessManagementComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PatientModule { }
