import { Pipe, PipeTransform } from '@angular/core';
import { Hall } from '../models/hall.model';
import { Seance } from '../models/seance.model';

@Pipe({
  name: 'hall'
})
export class HallPipe implements PipeTransform {

  transform(halls: Hall[] | null, seance: Seance): Hall | undefined {
    return halls?.find(hall => hall.id === seance.hallId);
  }

}
