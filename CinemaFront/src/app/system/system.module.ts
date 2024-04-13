import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { FilmsComponent } from './films/films.component';
import { UserPageComponent } from './user-page/user-page.component';
import { SystemRoutingModule } from './system-routing.module';



@NgModule({
  declarations: [
    HomeComponent,
    FilmsComponent,
    UserPageComponent
  ],
  imports: [
    CommonModule,
    SystemRoutingModule
  ]
})
export class SystemModule { }
