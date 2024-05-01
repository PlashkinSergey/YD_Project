import { Component, OnInit } from '@angular/core';
import { Observable, of, take } from 'rxjs';
import { User } from '../../auth/shared/models/user.model';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrl: './user-page.component.css'
})
export class UserPageComponent implements OnInit {
  
  user$!: Observable<User>;
  constructor() { }

  ngOnInit(): void {
    this.user$ = of<User>(JSON.parse(window.sessionStorage.getItem('user')!)).pipe(
      take(1)
    );
  }

}
