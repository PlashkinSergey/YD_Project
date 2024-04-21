import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { FilmsComponent } from './films/films.component';
import { UserPageComponent } from './user-page/user-page.component';
import { SystemRoutingModule } from './system-routing.module';
import { OrderPageComponent } from './order-page/order-page.component';
import { SystemComponent } from './system.component';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [
    HomeComponent,
    FilmsComponent,
    UserPageComponent,
    OrderPageComponent,
    SystemComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    SystemRoutingModule
  ]
})
export class SystemModule { }
