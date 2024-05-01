import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Observable, of, take } from 'rxjs';
import { Router } from '@angular/router';
import { User } from '../auth/shared/models/user.model';

@Component({
  selector: 'app-system',
  templateUrl: './system.component.html',
  styleUrl: './system.component.css'
})
export class SystemComponent implements OnInit {
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  isMobile= true;

  constructor(
    private observer: BreakpointObserver, 
    private router: Router,
  ) {}

  user$!: Observable<User>| undefined;
  isCollapsed = true;

  ngOnInit(): void {
    this.user$ = of<User>(JSON.parse(window.sessionStorage.getItem('user')!)).pipe(
      take(1)
    );
    this.observer.observe(['(max-width: 800px)']).subscribe((screenSize) => {
      if(screenSize.matches){
        this.isMobile = true;
      } else {
        this.isMobile = false;
      }
    });
  }
  toggleMenu(): void {
    if(this.isMobile){
      this.sidenav.toggle();
      this.isCollapsed = false;
    } else {
      this.sidenav.open();
      this.isCollapsed = !this.isCollapsed;
    }
  }

  logout(): void {
    window.sessionStorage.clear();
    this.router.navigate(["/auth", "login"]);
  }
}
