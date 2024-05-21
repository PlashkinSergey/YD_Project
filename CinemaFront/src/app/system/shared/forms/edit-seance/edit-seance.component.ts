import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Seance } from '../../models/seance.model';
import { Observable } from 'rxjs';
import { Film } from '../../models/film.model';
import { Hall } from '../../models/hall.model';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { HotToastService } from '@ngneat/hot-toast';
import { FilmService } from '../../services/film.service';
import { HallService } from '../../services/hall.service';
import { SeanceService } from '../../services/seance.service';

@Component({
  selector: 'app-edit-seance',
  templateUrl: './edit-seance.component.html',
  styleUrl: './edit-seance.component.css'
})
export class EditSeanceComponent implements OnInit {
  form!: FormGroup;
  seance!: Seance;
  films$!: Observable<Film[]>;
  halls$!: Observable<Hall[]>;
  constructor(
    private filmService: FilmService,
    private hallService: HallService,
    private toast: HotToastService,
    private seanceService: SeanceService,
    private dialogRef: MatDialogRef<EditSeanceComponent>,
    @Inject(MAT_DIALOG_DATA) private data: { seanceId: string },
  ) { }

  ngOnInit(): void {
    this.films$ = this.filmService.Films;
    this.halls$ = this.hallService.Halls;
    this.seanceService.getSeanceById(this.data.seanceId).subscribe((s: Seance) => {
      this.seance = s;
    })
    this.form = new FormGroup({
      "date": new FormControl('', Validators.required),
      "time": new FormControl('', Validators.required),
      "price": new FormControl('', Validators.required),
      "type": new FormControl('', Validators.required),
      "film": new FormControl('', Validators.required),
      "hall": new FormControl('', Validators.required)
    })
  }
  onSubmit(): void {
    if (!this.form.valid) return;
    this.seanceService.updateSeance(this.seance).subscribe((request: boolean) => {})
  }

  close(): void {
    this.dialogRef.close();
  }
}
