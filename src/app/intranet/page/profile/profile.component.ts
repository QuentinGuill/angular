import { Component, OnInit } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { AuthService } from 'src/app/service/auth.service';
import { Profile } from '../../modeles/profile';
import { ProfilsService } from '../../services/profils.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile: Profile = {nom:'', prenom:'', telephone:'', photo:'', statut:''};

  constructor(public prof:ProfilsService) { 
    
  }

  ngOnInit(): void {
    this.getProfile();
  }

  async getProfile() {
    this.profile = await this.prof.getTheProfile();
  }

  updateProfile() {
    console.log("on update");
    this.prof.updateTheProfile(this.profile);
  }

}
