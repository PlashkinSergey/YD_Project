import { Pipe, PipeTransform } from '@angular/core';
import { Film } from '../models/film.model';
import { Seance } from '../models/seance.model';

@Pipe({
  name: 'film'
})
export class FilmPipe implements PipeTransform {

  transform(films: Film[] | null, seance: Seance): Film | undefined {
    return films?.find(film => film.id === seance.filmId);
  }

}
