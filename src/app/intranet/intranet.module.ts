import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IntranetRoutingModule } from './intranet-routing.module';
import { AccueilComponent } from './page/accueil/accueil.component';
import { AttributionComponent } from './page/attribution/attribution.component';
import { PersonnelComponent } from './page/personnel/personnel.component';
import { AvionsComponent } from './page/avions/avions.component';
import { ProfileComponent } from './page/profile/profile.component';
import { AvionsPipe } from './utils/avions.pipe';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AeroportComponent } from './page/aeroport/aeroport.component';


@NgModule({
  declarations: [
    AccueilComponent,
    AttributionComponent,
    PersonnelComponent,
    AvionsComponent,
    ProfileComponent,
    AvionsPipe,
    AeroportComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    IntranetRoutingModule
  ]
})
export class IntranetModule { }
