import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Seance } from '../models/seance.model';

@Injectable({
  providedIn: 'root'
})
export class SeanceService {

  private readonly URL = "https://localhost:7039/api/Seances";
  constructor(private http: HttpClient) { }

  get Seances(): Observable<Seance[]> {
    return this.http.get<Seance[]>(`${this.URL}`);
  }

  deleteSeance(seance: Seance): Observable<boolean> {
    return this.http.delete<boolean>(`${this.URL}/${seance.id}`);
  }

  getSeanceById(id: string): Observable<Seance> {
    return this.http.get<Seance>(`${this.URL}/${id}`);
  }

  getSeanceByFilmId(filmid: string): Observable<Seance> {
    return this.http.get<Seance>(`${this.URL}/filmId=${filmid}`);
  }

  getSeancesByFilmId(filmId: string): Observable<Seance[]> {
    return this.http.get<Seance[]>(`${this.URL}/filmId=${filmId}`);
  }

  updateSeance(seance: Seance): Observable<boolean> {
    return this.http.put<boolean>(`${this.URL}/${seance.id}`, seance);
  }
}
