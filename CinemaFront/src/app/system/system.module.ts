import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { FilmsComponent } from './films/films.component';
import { UserPageComponent } from './user-page/user-page.component';
import { SystemRoutingModule } from './system-routing.module';
import { OrderPageComponent } from './order-page/order-page.component';
import { SystemComponent } from './system.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';


@NgModule({
  declarations: [
    HomeComponent,
    FilmsComponent,
    UserPageComponent,
    OrderPageComponent,
    SystemComponent
  ],
  imports: [
    CommonModule,
    SystemRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatMenuModule
  ]
})
export class SystemModule { }