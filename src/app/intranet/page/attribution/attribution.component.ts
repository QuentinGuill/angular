import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { filter } from 'rxjs';
import { Compagnie, vols } from '../../modeles/compagnie';
import { CompanyService } from '../../services/company.service';

@Component({
  selector: 'app-attribution',
  templateUrl: './attribution.component.html',
  styleUrls: ['./attribution.component.css']
})
export class AttributionComponent implements OnInit{
  filtreModele:string = '';
  company: Compagnie[];

  constructor(public compagnie:CompanyService) { 
    this.company = compagnie.getCompany();  
  }

  ngOnInit(): void {
  }

}
