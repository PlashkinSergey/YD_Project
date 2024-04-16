import { Component, ElementRef, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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
  ) {}

  ngOnInit(): void {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#f43648';
    this.form = new FormGroup(
      {
        "email": new FormControl('',
            [
              Validators.required,
              Validators.email
            ]
          ),
        "login": new FormControl('', Validators.required),
        "password": new FormControl('', [
          Validators.required, 
          Validators.minLength(6),
          //Validators.pattern(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{6,16}$/)
        ]),
      }
    )
  }

  onSubmit(): void {
    if (!this.form.valid) { return; }
  }
  submit():void {
    this.router.navigate(['/auth','login']);
  }
}
