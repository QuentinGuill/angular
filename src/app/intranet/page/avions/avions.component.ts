import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { filter } from 'rxjs';
import { Avion } from '../../modeles/avion';
import { AvionService } from '../../services/avion.service';

@Component({
  selector: 'app-avions',
  templateUrl: './avions.component.html',
  styleUrls: ['./avions.component.css']
})
export class AvionsComponent implements OnInit {
  filtreModele:string = '';
  avions: Avion[];
  avionf: Avion;

  constructor(public avion_service:AvionService) {
    this.avions = [];
    this.avionf = {"code":"", "modele":"", "autonomie":"", "capacite":""}
  }

  selectAvion(code:string|number) {
    this.avionf = this.avions.find(v => v.code == code)!;
  }

  updateAvion() {
    //this.avion_service.updateFireAvion(this.avionf.code)
    console.log("L'avion va etre mis a jour");
  }

  resetAvion(){
    this.avionf = <Avion>{};
  }

  ngOnInit(): void {
    this.avions = [];
    this.getAllAvions();
  }

  async getAllAvions() {
    await this.avion_service.getFireAvs();
    this.avions = this.avion_service.getCompany();
  }

}
