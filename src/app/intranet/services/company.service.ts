import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Compagnie, vols } from '../modeles/compagnie';
import { Personnel } from '../modeles/personnel';
import { Firestore, getDocs, collection } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  company: Compagnie[];
  personnels!:Array<{id:string, data:Personnel}>;

  constructor(private http: HttpClient,private bdd:Firestore) {
    this.company = vols;
  }

  async getPersonnels() {
    this.personnels = [];
    await getDocs(collection(this.bdd, 'personels'))
      .then(pers =>
        pers.forEach(p => {
          this.personnels.push({id:p.id, data:p.data() as Personnel})
        }));
  }

  async getFireVols() {

  }

  getCompany() {
    return this.company;
  }
}
