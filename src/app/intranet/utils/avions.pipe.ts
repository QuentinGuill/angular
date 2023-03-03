import { Pipe, PipeTransform } from '@angular/core';
import { Compagnie } from '../modeles/compagnie';

@Pipe({
  name: 'avions'
})
export class AvionsPipe implements PipeTransform {

  transform(vols:Array<Compagnie>, filtre?:string): unknown {
    if(!filtre || filtre.length == 0) return vols;
    if(vols.length == 0) return []
    
    return vols.filter(v => v.avion.indexOf(filtre) != -1);
  }

}
