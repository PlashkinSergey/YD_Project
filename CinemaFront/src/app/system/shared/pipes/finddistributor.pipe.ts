import { Pipe, PipeTransform } from '@angular/core';
import { Distributor } from '../models/distributor.model';
import { Film } from '../models/film.model';

@Pipe({
  name: 'finddistributor'
})
export class FinddistributorPipe implements PipeTransform {

  transform(distributors: Distributor[], film: Film): Distributor | undefined {
    return distributors.find((d) => d.id === film.distributorId);
  }

}
