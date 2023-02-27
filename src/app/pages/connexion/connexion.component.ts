import { Component, OnInit } from '@angular/core';
import { Id, User } from 'src/app/intranet/modeles/id';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  id:Id = {id:'', pass:''};
  user:User = <User>{};

  constructor(private http:HttpClient, private router:Router, private auth: AuthService) { }

  ngOnInit(): void {
  }

  logId() {
    console.log(this.id.id)
  }

  logPass() {
    console.log(this.id.pass)
  }

  checkId() {
    this.http.get<User>('assets/ids/pipo@pipo.json').subscribe(
      retour => {
        console.log("Utilisateur identifie", retour);
        alert("Bienvenue" + retour.nom);
        this.user = retour;
        this.router.navigateByUrl("/intranet");
      });
  }

  checkFromFire() {
    this.auth.identification(this.id.id as string, this.id.pass as string);
  }

}
