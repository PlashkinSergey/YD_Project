import { Component, ElementRef, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MyValidatorService } from '../shared/services/my-validator.service';
import { UserService } from '../shared/services/user.service';
import { User } from '../shared/models/user.model';
import { HotToastService } from '@ngneat/hot-toast';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent implements OnInit {
  form!: FormGroup;
  constructor(
    private router: Router,
    private elementRef: ElementRef,
    private validatorService: MyValidatorService,
    private userService: UserService,
    private toast: HotToastService
  ) {}

  ngOnInit(): void {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#f43648';
    this.form = new FormGroup({
        "email": new FormControl('', [
              Validators.required,
              Validators.email
            ], [
              this.validatorService.dogInEmail.bind(this),
              this.validatorService.forbiddenEmails.bind(this)
            ]
          ),
        "login": new FormControl('', [Validators.required, Validators.minLength(3)]),
        "password": new FormControl('', [
          Validators.required, 
          Validators.minLength(6)
        ]),
      }
    )
  }

  onSubmit(): void {
    console.log(this.form.value);
    if (!this.form.valid) { return; }
    const values = this.form.value;
    const user = new User(values.login, values.password, values.email,  "Клиент");
    this.userService.createUser(user).subscribe((user: User) => {
      if (user) {
        this.toast.success("Регистрация прошла успешно");
        this.router.navigate(['/auth','login']);
        return;
      }
      this.toast.error("Ошибка при регистраций")
    });
  }
  
  submit():void {
    this.router.navigate(['/auth','login']);
  }
}
