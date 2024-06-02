import { Pipe, PipeTransform } from '@angular/core';
import { Seance } from '../models/seance.model';

@Pipe({
  name: 'seance'
})
export class SeancePipe implements PipeTransform {

  transform(seances: Seance[] | null, seanceId: string): Seance {
    return seances?.find(seance => seance.id === seanceId)!;
  }

}
