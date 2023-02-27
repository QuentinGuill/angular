import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { PersonnelService } from '../../services/personnel.service';
import { Personnel } from '../../modeles/personnel';
import { Habilitation } from '../../modeles/personnel';

@Component({
  selector: 'app-personnel',
  templateUrl: './personnel.component.html',
  styleUrls: ['./personnel.component.css']
})
export class PersonnelComponent implements OnInit {
  filtreModele:string = '';
  personnels: Personnel[];
  personnelf: Personnel;
  
  constructor(public personnel_service:PersonnelService) {
    this.personnels = [];
    this.personnelf = {"nom":"", "prenom":[], "habilitation":Habilitation.copilote}
  }
  
  selectPersonnel(nom:string) {
    this.personnelf = this.personnels.find(p => p.nom == nom)!;
  }
  
  updatePersonnel() {
    //this.avion_service.updateFireAvion(this.avionf.code)
    console.log("Le personnel va etre mis a jour");
  }
  
  resetPersonnel(){
    this.personnelf = <Personnel>{};
  }
  
  ngOnInit(): void {
    this.personnels = [];
    this.getAllPersonnel();
  }
  
  async getAllPersonnel() {
    await this.personnel_service.getFirePrs();
    this.personnels = this.personnel_service.getCompany();
    console.log(this.personnels);
  }
  
}
