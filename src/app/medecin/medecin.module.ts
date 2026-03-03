import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PatientsComponent } from './patients/patients.component';
import { DmeComponent } from './dme/dme.component';
import { OrdonnanceComponent } from './ordonnance/ordonnance.component';
import { CreatePatientComponent } from './create-patient/create-patient.component';
import { EditPatientComponent } from './edit-patient/edit-patient.component';
import { AddConsultationComponent } from './add-consultation/add-consultation.component';
import { AddDiagnosticComponent } from './add-diagnostic/add-diagnostic.component';
import { CreateOrdonnanceComponent } from './create-ordonnance/create-ordonnance.component';
import { CreateAnalyseRequestComponent } from './create-analyse-request/create-analyse-request.component';
import { SearchDmeComponent } from './search-dme/search-dme.component';



@NgModule({
  declarations: [
    DashboardComponent,
    PatientsComponent,
    DmeComponent,
    OrdonnanceComponent,
    CreatePatientComponent,
    EditPatientComponent,
    AddConsultationComponent,
    AddDiagnosticComponent,
    CreateOrdonnanceComponent,
    CreateAnalyseRequestComponent,
    SearchDmeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MedecinModule { }
