import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './page/accueil/accueil.component';
import { AeroportComponent } from './page/aeroport/aeroport.component';
import { AttributionComponent } from './page/attribution/attribution.component';
import { AvionsComponent } from './page/avions/avions.component';
import { PersonnelComponent } from './page/personnel/personnel.component';
import { ProfileComponent } from './page/profile/profile.component';

const routes: Routes = [
  {path:'', component:AccueilComponent, children:[
    {path:'', component:AttributionComponent},
    {path:'avions', component:AvionsComponent},
    {path:'personnel', component:PersonnelComponent},
    {path:'profile', component:ProfileComponent},
    {path:'aeroport', component:AeroportComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IntranetRoutingModule { }
