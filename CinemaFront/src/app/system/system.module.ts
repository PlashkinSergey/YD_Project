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
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { AddFilmComponent } from './shared/forms/add-film/add-film.component';
import { EditFilmComponent } from './shared/forms/edit-film/edit-film.component';
import { AddOrderComponent } from './shared/forms/add-order/add-order.component';
import { EditOrderComponent } from './shared/forms/edit-order/edit-order.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldModule } from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';


@NgModule({
  declarations: [
    HomeComponent,
    FilmsComponent,
    UserPageComponent,
    OrderPageComponent,
    SystemComponent,
    EditFilmComponent,
    AddFilmComponent,
    AddOrderComponent,
    EditOrderComponent
  ],
  imports: [
    CommonModule,
    SystemRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatMenuModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule
  ],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, 
      useValue: {appearance: 'fill'}
    }
  ]
})
export class SystemModule { }