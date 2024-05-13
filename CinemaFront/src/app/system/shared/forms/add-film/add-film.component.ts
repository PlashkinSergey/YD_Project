import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Distributor } from '../../models/distributor.model';
import { Observable } from 'rxjs';
import { DistributorService } from '../../services/distributor.service';
import { FilmService } from '../../services/film.service';
import { Film } from '../../models/film.model';
import { HotToastService } from '@ngneat/hot-toast';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-film',
  templateUrl: './add-film.component.html',
  styleUrl: './add-film.component.css'
})
export class AddFilmComponent implements OnInit {
  form!: FormGroup;
  idDistributor: string = "";
  distributors$!: Observable<Distributor[]>;
  distributor!: Distributor | undefined;
  addFilm: boolean = false;
  constructor(
    private distributorService: DistributorService,
    private filmService: FilmService,
    private toast: HotToastService,
    private dialogRef: MatDialogRef<AddFilmComponent>
  ){}
  ngOnInit(): void {
    this.distributors$ = this.distributorService.Distributors;
    this.onChange();
    this.form = new FormGroup({
      "name": new FormControl('', [Validators.required], [
        ]
      ),
      "type": new FormControl('',[Validators.required]),
      "distributor" : new FormControl('',[Validators.required]),
      "director": new FormControl('',[Validators.required]),
      "duration": new FormControl('',[Validators.required])
    })
  }
  onSubmit(): void {
    if (!this.form.valid) return;
    const film = new Film(this.form.value.name,
                          `${this.form.value.duration}:00`,
                          this.form.value.type, 
                          this.form.value.director,
                          this.idDistributor);
    this.filmService.createFilm(film).subscribe((film: Film) => {
      if (film) {
        this.toast.success("Фильм успешно добавлен!");
        this.addFilm = true;
        return;
      }
      this.toast.success("Ошибка при добавлений");
    })
  }
  onChange(): void {
    console.log(this.idDistributor);
    this.distributors$.subscribe((distributors: Distributor[]) => {
      this.distributor = distributors.find(distributor => distributor.id === this.idDistributor);
    });
  }

  close(): void {
    this.dialogRef.close();
  }
}
