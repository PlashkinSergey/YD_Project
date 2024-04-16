import { Component, ElementRef, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MyValidatorService } from '../shared/services/my-validator.service';
import { UserService } from '../shared/services/user.service';

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
    private userService: UserService
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
          Validators.minLength(6), 
          Validators.pattern(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{6,16}$/)
        ])
    });
  }
  public submit(): void {
    this.router.navigate(["/auth", 'register']);
  }
  public onSubmit(): void {
    if (!this.form.valid) { return; }
    
  }
}
