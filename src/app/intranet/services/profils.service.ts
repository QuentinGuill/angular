import { Injectable } from '@angular/core';
import { Auth, updateProfile } from '@angular/fire/auth';
import { Profile } from '../modeles/profile';
import { Firestore, doc, setDoc, getDoc} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ProfilsService {
  
  constructor(private readonly auth:Auth, private bd:Firestore) { }

  async updateTheProfile(profile:Profile) {
    let id = "";
    const user = await this.auth.currentUser;

    updateProfile(user!, {
      displayName: profile.nom, photoURL: profile.photo
    }).then(() => {
      console.log("mis à jour!")
    }).catch((error) => {
      console.log("erreur!")
    });

    if(user != null) {
      const id = user.uid;

      await setDoc(doc(this.bd, "profile", id), {
        prenom: profile.prenom, statut: profile.statut, telephone: profile.telephone });
    }
  }

  async getTheProfile(): Promise<Profile> {
    const user = this.auth.currentUser;
    let profile: Profile = {nom:'', prenom:'', telephone:'', photo:'', statut:''};
    let prenom = '';
    let telephone = '';
    let statut = '';

    if (user !== null) {
      const docRef = doc(this.bd, "profile", user.uid);
      const docSnap = await getDoc(docRef);
      
      if(docSnap.exists()) {
        const data = docSnap.data();

        prenom = data["prenom"];
        telephone = data["telephone"];
        statut = data["statut"];
      }

      const uNom = user.displayName;
      const photoURL = user.photoURL;

      profile = {nom: uNom, photo: photoURL, prenom: prenom, telephone: telephone, statut: statut};
    }

    return profile;
  }
}
