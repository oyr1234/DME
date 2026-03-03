import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemandesComponent } from './demandes/demandes.component';
import { RendezvousComponent } from './rendezvous/rendezvous.component';
import { UploadResultComponent } from './upload-result/upload-result.component';



@NgModule({
  declarations: [
    DemandesComponent,
    RendezvousComponent,
    UploadResultComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LaboratoireModule { }
