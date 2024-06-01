import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from '../models/order.model';
import { Observable } from 'rxjs';
import { boooked_ticket } from '../models/booked_ticket.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http:  HttpClient) { }

  private readonly URL: string = 'https://localhost:7039/api/Orders'

  private readonly URLB_T: string = 'https://localhost:7039/api/booked_tickets'

  getOrderByUserId(userId: string): Observable<Order[]>   {
    return this.http.get<Order[]>(`${this.URL}/user=${userId}`);
  }
  
  createOrder(order: Order): Observable<Order>  {
    return this.http.post<Order>(this.URL, order);
  }

  createBooked_Ticket(idOrder: string, idTicket: string): Observable<boooked_ticket>  {
    let b_t: boooked_ticket = new boooked_ticket(idOrder, idTicket);
    return this.http.post<boooked_ticket>(`${this.URLB_T}/order=${idOrder}/ticket=${idTicket}`, b_t);
  }
}
