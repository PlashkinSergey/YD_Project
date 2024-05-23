import { Component,  OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { UserService } from '../../../../auth/shared/services/user.service';
import { map, Observable, timeout } from 'rxjs';
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
  seances$!: Observable<Seance[]>
  tickets: Ticket[] = [];

  form!: FormGroup;
  user?: User;
  idEmployee: string = '';
  idFilm: string = '';
  idHall: string = '';
  selectFilm: boolean = false;
  selectHall: boolean = false;
  time: string = '';
  date: string = '';

  constructor(
    private dialogRef: MatDialogRef<AddOrderComponent>,
    private userService: UserService,
    private filmService: FilmService,
    private hallService: HallService,
    private seanceService: SeanceService,
    private placeService: PlaceService,
    private toastr: HotToastService
  ) { }

  ngOnInit(): void {
    this.userService.CurrentUser.subscribe((curUser: User) => this.user = curUser);
    this.employees$ = this.userService.userByType("Сотрудник");
    this.films$ = this.filmService.Films;
    this.halls$ = this.hallService.Halls;
    this.tickets.push(new Ticket(0, 0, ''));
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

  }

  close(): void {
    this.dialogRef.close();
  }

  addTicket(): void {
    this.tickets.push(new Ticket(0, 0, ''));
  }

  delTicket(): void {
    this.tickets.pop();
  }
  
  onChangeFilm(): void {
    console.log(this.idFilm);
    this.selectFilm = this.idFilm !== '' ? true : this.selectFilm;
    if (!this.selectFilm) return;
    this.seances$ = this.seanceService.getSeancesByFilmId(this.idFilm);
    this.seances$.subscribe((seances: Seance[]) => {
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
      map((seances: Seance[]) => seances.filter(seance => seance.hallId === this.idHall))
    );
    this.places$ = this.placeService.getPlacesByHallId(this.idHall);
  }

  onChangeSeance(): void {
    if (this.time === '' || this.date === '') return;
    this.seances$ = this.seances$.pipe(
      map((seances: Seance[]) => seances.filter(seance => seance.time && seance.date === this.date))
    );
  }
}
