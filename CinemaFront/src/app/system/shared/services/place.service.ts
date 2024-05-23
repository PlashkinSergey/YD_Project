import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hall } from '../models/hall.model';
import { Place } from '../models/place.model';

@Injectable({
  providedIn: 'root'
})
export class PlaceService {
 
  private readonly URL = "https://localhost:7039/api/Places"
  constructor(
    private http: HttpClient
  ) { }

  getPlacesByHallId(hallId: string): Observable<Place[]> {
    return this.http.get<Place[]>(`${this.URL}/hallId=${hallId}`);
  }
}
