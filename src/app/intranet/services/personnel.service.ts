import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Personnel } from '../modeles/personnel';
import { collection, deleteDoc, doc, getDoc, getDocs, setDoc } from 'firebase/firestore';
import { Firestore } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class PersonnelService {
  personnels: Array<Personnel> = [];
  listPersonnel!:Array<{id:string, data:Personnel}>;

  constructor(private http: HttpClient, private readonly bdd:Firestore) {
  }

  async getFirePrs() {
    this.personnels = [];
    await getDocs(collection(this.bdd, 'personnel'))
    .then(ps => {
      console.log(ps);
      ps.forEach( p => {
        console.log(p.data());
        this.personnels.push(p.data() as Personnel);
      })

      console.log(this.personnels);
    });
  }

  async getFirePersonnel(nom:string) {
    const docAvion = doc(this.bdd, 'personnel', nom);
    await getDoc(docAvion);
  }

  async delFirePersonnel(nom:string) {
    const docAvion = doc(this.bdd, 'personnels', nom);
    await deleteDoc(docAvion);
  }

  async updateFirePersonnel(nom:string, data:Personnel) {
    const docAvion = doc(this.bdd, 'personnels', nom);
    await setDoc(docAvion, data, {merge:true});
  }

  getCompany() {
    return this.personnels;
  }
}