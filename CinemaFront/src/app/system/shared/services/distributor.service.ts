import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Distributor } from '../models/distributor.model';

@Injectable({
  providedIn: 'root'
})
export class DistributorService {
  private readonly URL: string = 'https://localhost:7039/api/Distributors';
  constructor(private http: HttpClient) { }

  get Distributors(): Observable<Distributor[]> {
    return this.http.get<Distributor[]>(this.URL);
  }
}
