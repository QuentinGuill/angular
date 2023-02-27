import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Avion } from '../modeles/avion';
import { collection, deleteDoc, doc, getDoc, getDocs, setDoc } from 'firebase/firestore';
import { Firestore } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class AvionService {
  avions: Array<Avion> = [];
  listAvion!:Array<{id:string, data:Avion}>;

  constructor(private http: HttpClient, private readonly bdd:Firestore) {
  }

  async getFireAvs() {
    this.avions = [];
    await getDocs(collection(this.bdd, 'avions'))
    .then(av => {
      console.log(av);
      av.forEach( a => {
        console.log(a.data());
        this.avions.push(a.data() as Avion);
      })
    });
  }

  async getFireAvion(code:string) {
    const docAvion = doc(this.bdd, 'avions', code);
    await getDoc(docAvion);
  }

  async delFireAvion(code:string) {
    const docAvion = doc(this.bdd, 'avions', code);
    await deleteDoc(docAvion);
  }

  async updateFireAvion(code:string, data:Avion) {
    const docAvion = doc(this.bdd, 'avions', code);
    await setDoc(docAvion, data, {merge:true});
  }

  getCompany() {
    return this.avions;
  }
}
