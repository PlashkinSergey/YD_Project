import { Component,  OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { UserService } from '../../../../auth/shared/services/user.service';
import { map, Observable, take, timeout } from 'rxjs';
import { User } from '../../../../auth/shared/models/user.model';
import { Film } from '../../models/film.model';
import { FilmService } from '../../services/film.service';
import { Hall } from '../../models/hall.model';
import { HallService } from '../../services/hall.service';
import { Seance } from '../../models/seance.model';
import { SeanceService } from '../../services/seance.service';
import { HotToastService } from '@ngneat/hot-toast';
import { Ticket } from '../../models/ticket.model';
import { Place } from '../../models/place.model';
import { PlaceService } from '../../services/place.service';
import { TicketService } from '../../services/ticket.service';
import { Order } from '../../models/order.model';
import { OrderService } from '../../services/order.service';
import { tick } from '@angular/core/testing';

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrl: './add-order.component.css'
})
export class AddOrderComponent implements OnInit {
  employees$!: Observable<User[]>
  films$!: Observable<Film[]>
  halls$!: Observable<Hall[]>
  places$!: Observable<Place[]>
  seances$!: Observable<Seance[]>;
  tickets: Ticket[] = [];

  form!: FormGroup;
  user?: User;
  idEmployee: string = '';
  idFilm: string = '';
  idHall: string = '';
  selectFilm: boolean = false;
  selectHall: boolean = false;
  correctTicket: boolean = false;
  time: string = '';
  date: string = '';

  constructor(
    private dialogRef: MatDialogRef<AddOrderComponent>,
    private userService: UserService,
    private filmService: FilmService,
    private hallService: HallService,
    private seanceService: SeanceService,
    private placeService: PlaceService,
    private toastr: HotToastService,
    private ticketService: TicketService,
    private orderService: OrderService,
  ) { }

  ngOnInit(): void {
    this.userService.CurrentUser.subscribe((curUser: User) => this.user = curUser);
    this.employees$ = this.userService.userByType("Сотрудник");
    this.seances$ = this.seanceService.Seances;
    this.films$ = this.filmService.Films;
    this.halls$ = this.hallService.Halls;
    this.tickets = [{ row:	0, place: 0, seanceId: ''}];
    this.form = new FormGroup({
      'employee': new FormControl('', Validators.required),
      'user': new FormControl('', Validators.required),
      'time': new FormControl('', Validators.required),
      'film': new FormControl('', Validators.required),
      'hall': new FormControl('', Validators.required),
      'date': new FormControl('', Validators.required),
      "row" : new FormControl('', Validators.required),
      "position": new FormControl('', Validators.required)
    });
  }

  onSubmit(): void {
    if (!this.form.valid) return;
    const date: Date = new Date();
    let order: Order = new Order( 
      date.toLocaleDateString('ru-RU'),
      this.idEmployee,
      this.user?.id
    );
    this.seances$.subscribe((seances: Seance[]) => {
      this.tickets.forEach((ticket: Ticket)  => {
        ticket.seanceId = seances[0].id;
        this.ticketService.createTicket(ticket).subscribe((t: Ticket) => ticket.id = t.id);
      })
      this.orderService.createOrder(order).subscribe((o: Order) => {
        for (let ticket of this.tickets)  {
          this.orderService.createBooked_Ticket(o.id!, ticket.id!).subscribe();
        }
      });
    })
   }

  close(): void {
    this.dialogRef.close();
  }

  addTicket(): void {
    if (this.tickets.length === 3) {
      this.toastr.error("Выбранно много билетов");
      return;
    }
    this.tickets = [...this.tickets, ...[{ row:	0, place: 0, seanceId: ''}]]
  }

  delTicket(): void {
    this.tickets.pop();
  }
  
  onChangeFilm(): void {
    this.selectFilm = this.idFilm !== '' ? true : this.selectFilm;
    if (!this.selectFilm) return;
    this.seances$ = this.seances$.pipe(
      map((seances: Seance[]) => seances.filter((s: Seance) => s.filmId === this.idFilm))
    );
    this.seances$.subscribe((seances: Seance[])=> {
      if (seances.length === 0) {
        this.toastr.error("Пока нет сеансов на данный фильм. \n Выберете другой.");
        this.selectFilm = false;
        return;
      }
      this.toastr.success("Сеансы найдены!");
    });
  }

  onChangeHall(): void {
    this.selectHall = this.idHall !== '' ? true : this.selectHall;
    if (!this.selectHall) return;
    this.seances$ = this.seances$.pipe(
      map((seances: Seance[]) => seances.filter((s: Seance) => s.hallId === this.idHall))
    );
    this.places$ = this.placeService.getPlacesByHallId(this.idHall);
  }

  onChangeSeance(): void {
    if (this.time === '' || this.date === '') return;
    this.seances$ = this.seances$.pipe(
      map((seances: Seance[]) => seances.filter((s: Seance) => s.time == this.time && s.date === this.date))
    );
  }

  onChangeTicket(): void  {
    this.seances$.subscribe((seances: Seance[]) => {
      this.correctTicket = true;
      this.ticketService.getTicketsBySeanceId(seances[0].id).subscribe((tickets: Ticket[]) => {
        tickets.forEach((t1: Ticket) => {
          this.tickets.forEach((t2: Ticket) => {
            if (t1.row === t2.row && t1.place === t2.place) {
              this.correctTicket = false;
            }
          });
        });
        !this.correctTicket ? this.toastr.error("Место занято. \n Выберете другое место.") : '';
      });
    })
  }
}
