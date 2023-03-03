import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { filter } from 'rxjs';
import { Aeroport } from '../../modeles/aeroport';
import { Avion } from '../../modeles/avion';
import { Compagnie } from '../../modeles/compagnie';
import { Habilitation, Personnel } from '../../modeles/personnel';
import { AeroportService } from '../../services/aeroport.service';
import { AvionService } from '../../services/avion.service';
import { CompanyService } from '../../services/company.service';
import { PersonnelService } from '../../services/personnel.service';

@Component({
  selector: 'app-attribution',
  templateUrl: './attribution.component.html',
  styleUrls: ['./attribution.component.css']
})
export class AttributionComponent implements OnInit{
  filtreModele:string = '';
  companyf: Compagnie;
  companys: Compagnie[];
  avions: Avion[];
  aeroports: Aeroport[];
  personnels: Personnel[];
  companyFiltered: Compagnie[];
  newPers: Personnel;

  isEditing: boolean;

  constructor(public company_service:CompanyService, public avion_service:AvionService, public aeroport_service:AeroportService, public personnel_service:PersonnelService) { 
    this.companys = company_service.getCompany(); 
    this.avions = avion_service.getCompany();
    this.aeroports = aeroport_service.getCompany();
    this.personnels = personnel_service.getCompany();
    this.companyFiltered = this.companys; 
    this.companyf = <Compagnie>{};
    this.newPers = <Personnel>{};
    this.isEditing = false;
  }

  selectCompany(code:string) {
    this.companyf = this.companys.find(p => p.code == code)!;
    this.isEditing = true;
  }
  
  updateCompany() {
    this.company_service.updateFireCompagnie(this.companyf.code, this.companyf);
    console.log("Le personnel va etre mis a jour");
  }
  
  resetCompany(){
    this.companyf = <Compagnie>{};
    this.isEditing = false;
  }

  addPersonnel() {
    if(this.companyf.personnel.length <= 8) {
      this.companyf.personnel.push("");
    }
  }

  deletePersonnel(i:number) {
    delete this.companyf.personnel[i];
  }
  
  ngOnInit(): void {
    this.getAllCompany();
    this.getAllAvions();
    this.getAllAeroports();
    this.getAllPersonnel();
  }
  
  async getAllCompany() {
    await this.company_service.getFireCmp();
    this.companys = this.company_service.getCompany();
    console.log(this.companys);
  }

  filter() {
    console.log(this.filtreModele);
    if (this.filtreModele == "") {
      this.companyFiltered = this.companys;
    }
    else {
      this.companyFiltered = this.companys.filter((x) => x.avion.indexOf(this.filtreModele) >= 0 || x.aeroportArrivee.indexOf(this.filtreModele) >= 0 || x.aeroportDepart.indexOf(this.filtreModele) >= 0)
    }
  }

  async getAllAvions() {
    await this.avion_service.getFireAvs();
    this.avions = this.avion_service.getCompany();
  }

  async getAllAeroports() {
    await this.aeroport_service.getFireAer();
    this.aeroports = this.aeroport_service.getCompany();
    console.log(this.aeroports);
  }

  async getAllPersonnel() {
    await this.personnel_service.getFirePrs();
    this.personnels = this.personnel_service.getCompany();
    console.log(this.personnels);
  }
}
