import { Component, OnInit } from '@angular/core';
import { Aeroport } from '../../modeles/aeroport';
import { AeroportService } from '../../services/aeroport.service';

@Component({
  selector: 'app-aeroport',
  templateUrl: './aeroport.component.html',
  styleUrls: ['./aeroport.component.css']
})
export class AeroportComponent implements OnInit {
  filtreModele:string = '';
  aeroports: Aeroport[];
  aeroportf: Aeroport;
  isEditing: boolean;
  
  constructor(public aeroport_service:AeroportService) {
    this.aeroports = [];
    this.aeroportf = <Aeroport>{};
    this.isEditing = false;
  }
  
  selectAeroport(nom:string) {
    this.aeroportf = this.aeroports.find(p => p.nom == nom)!;
    this.isEditing = true;
  }
  
  updateAeroport() {
    this.aeroport_service.updateFireAeroport(this.aeroportf.nom, this.aeroportf);
    console.log("Le personnel va etre mis a jour");
  }
  
  resetAeroport(){
    this.aeroportf = <Aeroport>{};
    this.isEditing = false;
  }
  
  ngOnInit(): void {
    this.aeroports = [];
    this.getAllAeroports();
  }
  
  async getAllAeroports() {
    await this.aeroport_service.getFireAer();
    this.aeroports = this.aeroport_service.getCompany();
    console.log(this.aeroports);
  }
}
