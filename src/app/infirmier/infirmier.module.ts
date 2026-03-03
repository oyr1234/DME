import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DossierComponent } from './dossier/dossier.component';
import { ObservationsComponent } from './observations/observations.component';
import { HistoriqueComponent } from './historique/historique.component';



@NgModule({
  declarations: [
    DossierComponent,
    ObservationsComponent,
    HistoriqueComponent
  ],
  imports: [
    CommonModule
  ]
})
export class InfirmierModule { }
