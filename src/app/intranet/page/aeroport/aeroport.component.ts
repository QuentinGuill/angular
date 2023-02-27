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
  
  constructor(public aeroport_service:AeroportService) {
    this.aeroports = [];
    this.aeroportf = {"nom":"", "nbPiste":0}
  }
  
  selectAeroport(nom:string) {
    this.aeroportf = this.aeroports.find(p => p.nom == nom)!;
  }
  
  updateAeroport() {
    //this.avion_service.updateFireAvion(this.avionf.code)
    console.log("Le personnel va etre mis a jour");
  }
  
  resetAeroport(){
    this.aeroportf = <Aeroport>{};
  }
  
  ngOnInit(): void {
    this.aeroports = [];
    this.getAllPersonnel();
  }
  
  async getAllPersonnel() {
    await this.aeroport_service.getFireAer();
    this.aeroports = this.aeroport_service.getCompany();
    console.log(this.aeroports);
  }
}
