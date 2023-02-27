import { Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { signInWithEmailAndPassword } from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private readonly auth:Auth, private readonly route:Router) { 

  }

  identification(mail: string, mdp: string) {
    signInWithEmailAndPassword(this.auth, mail, mdp)
    .then(d => {
      console.log(d),
      this.route.navigateByUrl("/intranet");
    })
    .catch(d => console.log(d));
  }
}
