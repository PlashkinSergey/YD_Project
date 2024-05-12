import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Distributor } from '../../models/distributor.model';
import { Observable } from 'rxjs';
import { DistributorService } from '../../services/distributor.service';

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
  constructor(
    private router: Router,
    private distributorService: DistributorService
  ) {}
  ngOnInit(): void {
    this.distributors$ = this.distributorService.Distributors;
    this.onChange();
    this.form = new FormGroup({
      "name": new FormControl('', [Validators.required], [
        ]
      ),
      "type": new FormControl('',[Validators.required]),
      "distributor" : new FormControl('',[Validators.required])
    })
  }
  onSubmit(): void {
    if (!this.form.valid) return;
    console.log(this.distributor)
  }
  onChange(): void {
    console.log(this.idDistributor);
    this.distributors$.subscribe((distributors: Distributor[]) => {
      this.distributor = distributors.find(distributor => distributor.id === this.idDistributor);
    });
  }
}
