import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { FilmsComponent } from './films/films.component';
import { SystemRoutingModule } from './system-routing.module';
import { OrderPageComponent } from './order-page/order-page.component';
import { SystemComponent } from './system.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { AddFilmComponent } from './shared/forms/add-film/add-film.component';
import { AddOrderComponent } from './shared/forms/add-order/add-order.component';
import { EditOrderComponent } from './shared/forms/edit-order/edit-order.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldModule } from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';
import { FinddistributorPipe } from './shared/pipes/finddistributor.pipe';
import { FilmPipe } from './shared/pipes/film.pipe';
import { HallPipe } from './shared/pipes/hall.pipe';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { EditSeanceComponent } from './shared/forms/edit-seance/edit-seance.component';
import { UserPipe } from './shared/pipes/user.pipe';
import { SeancesPageComponent } from './seances-page/seances-page.component';
import { SeancePipe } from './shared/pipes/seance.pipe';
import { StatsPageComponent } from './stats-page/stats-page.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { SearchePipe } from './shared/pipes/searche.pipe';

@NgModule({
  declarations: [
    HomeComponent,
    FilmsComponent,
    OrderPageComponent,
    SystemComponent,
    AddFilmComponent,
    AddOrderComponent,
    EditOrderComponent,
    FinddistributorPipe,
    FilmPipe,
    HallPipe,
    EditSeanceComponent,
    UserPipe,
    SeancesPageComponent,
    SeancePipe,
    StatsPageComponent,
    SearchePipe
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
    MatSelectModule,
    MatDialogModule,
    MatCardModule,
    MatAutocompleteModule,
    HighchartsChartModule
  ],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, 
      useValue: {appearance: 'fill'}
    }
  ]
})
export class SystemModule { }