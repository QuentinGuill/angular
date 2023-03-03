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
  isEditing: boolean;
  
  constructor(public personnel_service:PersonnelService) {
    this.personnels = [];
    this.personnelf = <Personnel>{};
    this.isEditing = false;
  }
  
  selectPersonnel(code:string) {
    this.personnelf = this.personnels.find(p => p.code == code)!;
    this.isEditing = true;
  }
  
  updatePersonnel() {
    this.personnel_service.updateFirePersonnel(this.personnelf.code, this.personnelf)
    console.log("Le personnel va etre mis a jour");
  }
  
  resetPersonnel(){
    this.personnelf = <Personnel>{};
    this.isEditing = false;
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
