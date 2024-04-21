import { Component, ElementRef, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MyValidatorService } from '../shared/services/my-validator.service';
import { UserService } from '../shared/services/user.service';
import { User } from '../shared/models/user.model';
import { HotToastService } from '@ngneat/hot-toast';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  constructor (
    private router: Router,
    private elementRef: ElementRef,
    public route: ActivatedRoute,
    private validatorService: MyValidatorService,
    private userService: UserService,
    private toast: HotToastService
  ) {}
  ngOnInit(): void {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#03a9f4';
    this.form = new FormGroup({
      "email": new FormControl(
        null,
        [Validators.required, Validators.email], this.validatorService.dogInEmail.bind(this)),
      "password": new FormControl(null, 
        [
          Validators.required, 
          Validators.minLength(6)
        ])
    });
  }
  public submit(): void {
    this.router.navigate(["/auth", 'register']);
  }
  public onSubmit(): void {
    if (!this.form.valid) { return; }
    this.userService.userByEmailAndPassword(this.form.value.email, this.form.value.password).subscribe((user: User) => {
      if (user) {
        this.toast.success(`Приветствую, ${user.name}!`);
        window.sessionStorage.setItem('user', JSON.stringify(user));
        this.router.navigate(["/system",'home']);
        return;
      }
      this.toast.error("Неверный логин или пароль");
    })
  }
}
