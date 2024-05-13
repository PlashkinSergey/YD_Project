import { Component, DoCheck, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddFilmComponent } from '../shared/forms/add-film/add-film.component';
import { Observable, windowWhen } from 'rxjs';
import { Film } from '../shared/models/film.model';
import { FilmService } from '../shared/services/film.service';
import { DistributorService } from '../shared/services/distributor.service';
import { Distributor } from '../shared/models/distributor.model';
import { HotToastService } from '@ngneat/hot-toast';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrl: './films.component.css'
})
export class FilmsComponent implements OnInit{
  films$!: Observable<Film[]>
  distributors$!: Observable<Distributor[]>;
  constructor(
    private dialog: MatDialog,
    private filmsService: FilmService,
    private distributorService: DistributorService,
    private toastr: HotToastService
  ) { }
  ngOnInit(): void {
    this.films$ = this.filmsService.Films;
    this.distributors$ = this.distributorService.Distributors
  }
  openDialog(): void {
    let dialogRef = this.dialog.open(AddFilmComponent, { 
      width: '450px',
      height: '500px'
    }); 
    dialogRef.afterClosed().subscribe((addFilm: boolean) => {
      this.films$ = this.filmsService.Films;
    });
  }

  delFilm(film: Film): void {
    if(!confirm(`Вы действительно хотите удалить фильм ${film.name}`)) return;
    this.filmsService.deleteFilm(film).subscribe((request: boolean) =>{
      if(request) {
        this.films$ = this.filmsService.Films;
        this.toastr.success(`Фильм ${film.name} удален!`);
        return;
      }
      this.toastr.error(`Ошибка при удалений`);
    });
  }
}
