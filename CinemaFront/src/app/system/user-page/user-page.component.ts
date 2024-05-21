import { Component, OnInit } from '@angular/core';
import { Observable, of, take } from 'rxjs';
import { User } from '../../auth/shared/models/user.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../auth/shared/services/user.service';
import { HotToastService } from '@ngneat/hot-toast';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrl: './user-page.component.css'
})
export class UserPageComponent implements OnInit {
  
  user$!: Observable<User>;
  profileForm!: FormGroup;
  constructor(
    private usersService: UserService,
    private toast: HotToastService) { }

  ngOnInit(): void {
    this.user$ = of<User>(JSON.parse(window.sessionStorage.getItem('user')!)).pipe(
      take(1)
    );
    this.profileForm = new FormGroup({

    });
  }

  
  saveProfile(): void {
    if (!this.profileForm.valid) return;
  }
}
