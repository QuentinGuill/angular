import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Compagnie } from '../modeles/compagnie';
import { collection, deleteDoc, doc, getDoc, getDocs, setDoc, DocumentReference } from 'firebase/firestore';
import { Firestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  companys: Array<Compagnie> = [];
  listCompagnie!:Array<{id:string, data:Compagnie}>;

  constructor(private http: HttpClient, private readonly bdd:Firestore) {
  }

  async getFireCmp() {
    this.companys = [];
    await getDocs(collection(this.bdd, 'vols'))
    .then(ps => {
      console.log(ps);
      ps.forEach( p => {
        console.log(p.data());
        this.companys.push(p.data() as Compagnie);
      })

      console.log(this.companys);
    });
  }

  async getFireCompagnie(nom:string) {
    const docCompagnie = doc(this.bdd, 'vols', nom);
    await getDoc(docCompagnie);
  }

  async delFireCompagnie(nom:string) {
    const docCompagnies = doc(this.bdd, 'vols', nom);
    await deleteDoc(docCompagnies);
  }

  async updateFireCompagnie(nom:string, data:Compagnie) {
    const docCompagnie = doc(this.bdd, 'vols', nom);
    await setDoc(docCompagnie, data, {merge:true});
  }

  getCompany() {
    return this.companys;
  }
}
