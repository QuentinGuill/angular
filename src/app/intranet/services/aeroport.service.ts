import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Aeroport } from '../modeles/aeroport';
import { collection, deleteDoc, doc, getDoc, getDocs, setDoc } from 'firebase/firestore';
import { Firestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AeroportService {
  aeroports: Array<Aeroport> = [];
  listAeroport!:Array<{id:string, data:Aeroport}>;

  constructor(private http: HttpClient, private readonly bdd:Firestore) {
  }

  async getFireAer() {
    this.aeroports = [];
    await getDocs(collection(this.bdd, 'aeroport'))
    .then(ps => {
      console.log(ps);
      ps.forEach( p => {
        console.log(p.data());
        this.aeroports.push(p.data() as Aeroport);
      })

      console.log(this.aeroports);
    });
  }

  async getFireAeroport(nom:string) {
    const docAeroport = doc(this.bdd, 'aeroport', nom);
    await getDoc(docAeroport);
  }

  async delFireAeroport(nom:string) {
    const docAeroports = doc(this.bdd, 'aeroport', nom);
    await deleteDoc(docAeroports);
  }

  async updateFireAeroport(nom:string, data:Aeroport) {
    const docAeroport = doc(this.bdd, 'aeroport', nom);
    await setDoc(docAeroport, data, {merge:true});
  }

  getCompany() {
    return this.aeroports;
  }
}
