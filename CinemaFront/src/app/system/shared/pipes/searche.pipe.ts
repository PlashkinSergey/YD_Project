import { Pipe, PipeTransform } from '@angular/core';
import { Seance } from '../models/seance.model';
import { Film } from '../models/film.model';

@Pipe({
  name: 'searche'
})
export class SearchePipe implements PipeTransform {

  transform(film: Film | undefined, searcheString: string): Film | null {
    return film?.name.toLowerCase().includes(searcheString.toLowerCase())? film : null;
  }

}
