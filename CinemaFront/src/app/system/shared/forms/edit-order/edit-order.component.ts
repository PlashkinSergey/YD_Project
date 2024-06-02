import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA,  MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { OrderService } from '../../services/order.service';
import { Ticket } from '../../models/ticket.model';
import { Seance } from '../../models/seance.model';
import { SeanceService } from '../../services/seance.service';
import { FilmService } from '../../services/film.service';
import { HallService } from '../../services/hall.service';
import { Film } from '../../models/film.model';
import { Hall } from '../../models/hall.model';

@Component({
  selector: 'app-edit-order',
  templateUrl: './edit-order.component.html',
  styleUrl: './edit-order.component.css'
})
export class EditOrderComponent implements OnInit {

  tickets$!: Observable<Ticket[]>;
  seances$!: Observable<Seance[]>;
  films$!: Observable<Film[]>;
  halls$!: Observable<Hall[]>;

  constructor(
    private dialogRef: MatDialogRef<EditOrderComponent>,
    @Inject(MAT_DIALOG_DATA) private data: { orderId: string },
    private orderService: OrderService,
    private seanceService: SeanceService,
    private filmService: FilmService,
    private hallService: HallService
  ) { }

  ngOnInit(): void {
    this.tickets$ = this.orderService.getBooked_TicketsByIdOrder(this.data.orderId);
    this.seances$ = this.seanceService.Seances;
    this.films$  = this.filmService.Films;
    this.halls$  = this.hallService.Halls;
  }

}
