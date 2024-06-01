import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ticket } from '../models/ticket.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(private http:  HttpClient) { }

  private readonly URL: string = 'https://localhost:7039/api/Tickets';

  getTicketsBySeanceId(seanceId: string | undefined): Observable<Ticket[]>  {
    return this.http.get<Ticket[]>(`${this.URL}/seanceId=${seanceId}`);
  }

  createTicket(ticket: Ticket): Observable<Ticket> {
    return this.http.post<Ticket>(`${this.URL}`, ticket);
  }
}
