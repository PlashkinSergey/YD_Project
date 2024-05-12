import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddFilmComponent } from '../shared/forms/add-film/add-film.component';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrl: './films.component.css'
})
export class FilmsComponent implements OnInit {
  constructor(private dialog: MatDialog) { }
  ngOnInit(): void {}
  openDialog(): void {
    let dialogRef = this.dialog.open(AddFilmComponent, { 
      width: '450px',
      height: '500px'
    }); 
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }
}
