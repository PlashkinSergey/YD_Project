import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hall } from '../models/hall.model';

@Injectable({
  providedIn: 'root'
})
export class HallService {
 
  private readonly URL = "https://localhost:7039/api/Halls"
  constructor(
    private http: HttpClient
  ) { }

  get Halls(): Observable<Hall[]> {
    return this.http.get<Hall[]>(this.URL);
  }
}
