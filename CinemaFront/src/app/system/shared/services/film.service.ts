import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Film } from '../models/film.model';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  private readonly URL: string = 'https://localhost:7039/api/Films'
  constructor(private http: HttpClient) { }

  get Films(): Observable<Film[]> {
    return this.http.get<Film[]>(this.URL);
  }

  createFilm(film: Film): Observable<Film> {
    return this.http.post<Film>(this.URL, film);
  }

  deleteFilm(film: Film): Observable<boolean> {
    return this.http.delete<boolean>(this.URL + '/' + film.id);
  }

  get CountFilmsByDistributor(): Observable<number[]>  {
    return this.http.get<number[]>(this.URL + '/countOfDistributors');
  }
}
