import { Component, OnInit } from '@angular/core';
import { FilmService } from '../shared/services/film.service';
import { map, Observable } from 'rxjs';
import { Film } from '../shared/models/film.model';
import { HallService } from '../shared/services/hall.service';
import { SeanceService } from '../shared/services/seance.service';
import { Hall } from '../shared/models/hall.model';
import { Seance } from '../shared/models/seance.model';
import { MatDialog } from '@angular/material/dialog';
import { HotToastService } from '@ngneat/hot-toast';
import { EditSeanceComponent } from '../shared/forms/edit-seance/edit-seance.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  constructor() {}
  ngOnInit(): void  {}
}
