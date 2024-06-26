import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Film } from '../shared/models/film.model';
import { Seance } from '../shared/models/seance.model';
import { Hall } from '../shared/models/hall.model';
import { FilmService } from '../shared/services/film.service';
import { HallService } from '../shared/services/hall.service';
import { SeanceService } from '../shared/services/seance.service';
import { MatDialog } from '@angular/material/dialog';
import { HotToastService } from '@ngneat/hot-toast';
import { EditSeanceComponent } from '../shared/forms/edit-seance/edit-seance.component';

@Component({
  selector: 'app-seances-page',
  templateUrl: './seances-page.component.html',
  styleUrl: './seances-page.component.css'
})
export class SeancesPageComponent implements OnInit {
  films$!: Observable<Film[]>;
  halls$!: Observable<Hall[]>;
  seances$!: Observable<Seance[]>;

  nameFilm: string = '';

  constructor(
    private filmsService: FilmService,
    private hallService: HallService,
    private seanceService: SeanceService,
    private dialog: MatDialog,
    private toast: HotToastService
  ) { }
  ngOnInit(): void {
    this.films$ = this.filmsService.Films;
    this.halls$ = this.hallService.Halls;
    this.seances$ = this.seanceService.Seances;
  }

  delSeance(seance: Seance) {
    this.seanceService.deleteSeance(seance).subscribe((request: boolean) => {
      if (request) {
        this.seances$ = this.seances$.pipe(
          map((seances: Seance[]) => seances.filter(s => s.id !== seance.id))
        );
        this.toast.success("Сеанс успешно удалён!");
        return;
      }
      this.toast.error("Сеанс не удалён!");
    });
  }

  updateSeance(seanceId: string): void {
    let dialogref =this.dialog.open(EditSeanceComponent, 
      {
        data : { seanceId: seanceId },
        width: '450px',
        height: '600px'
      }
    );

    dialogref.afterClosed().subscribe((result: boolean) => {
        this.seances$ = this.seanceService.Seances;
     });
  }
}
