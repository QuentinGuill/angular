import { Component, OnInit } from '@angular/core';
import { PagesService } from 'src/app/service/pages.service';

@Component({
  selector: 'app-mentions',
  templateUrl: './mentions.component.html',
  styleUrls: ['./mentions.component.css']
})

export class MentionsComponent implements OnInit {

  titre:string = "Mentions légales du composant mentions:";

  constructor(public pages:PagesService) { }

  ngOnInit(): void {
    console.log(this.pages.mentions)
  }

}
