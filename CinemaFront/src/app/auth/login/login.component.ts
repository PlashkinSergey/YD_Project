import { Component, ElementRef, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

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
  ) {}
  ngOnInit(): void {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#03a9f4';
    this.form = new FormGroup({
      "email": new FormControl(
        null,
        [Validators.required]),
      "password": new FormControl(null, [Validators.required, Validators.minLength(6)])
    });
  }
  public submit(): void {
    this.router.navigate(["/auth", 'register']);
  }
  public onSubmit(): void {
    if (!this.form.valid) { return; }
    
  }
}
