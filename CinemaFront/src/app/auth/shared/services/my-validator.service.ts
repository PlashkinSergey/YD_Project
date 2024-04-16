import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { UserService } from './user.service';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class MyValidatorService {

  constructor(
    private userService: UserService
  ) { }

  forbiddenEmails(control: AbstractControl): Promise<any> {
    return new Promise((resolve, reject) => {
      this.userService.userByEmail(control.value)
      .subscribe((user: User | undefined)=>{
        if(user) {
          resolve({ forbiddenEmail: true });
        } else {
          resolve(null);
        }
      });
    });
  }

  dogInEmail(control: AbstractControl): Promise<any> {
    return new Promise((resolve, reject)=> {
      const email: string = control.value;
      console.log(email);
      if (!email.includes('@')) {
        resolve({dogInEmail: true})
      } else {
        resolve(null);
      }
    })
  }
}
