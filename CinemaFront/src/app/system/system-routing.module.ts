import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SystemComponent } from './system.component';
import { UserPageComponent } from './user-page/user-page.component';
import { Error404Module } from '../error404/error404.module';
import { FilmsComponent } from './films/films.component';
import { OrderPageComponent } from './order-page/order-page.component';
import { HomeComponent } from './home/home.component';
import { AddOrderComponent } from './shared/forms/add-order/add-order.component';
import { EditOrderComponent } from './shared/forms/edit-order/edit-order.component';
import { AddFilmComponent } from './shared/forms/add-film/add-film.component';
import { EditFilmComponent } from './shared/forms/edit-film/edit-film.component';

const routes: Routes = [
  { path: '', component: SystemComponent, children: [
    { path: 'home', component: HomeComponent},
    { path: 'user', component: UserPageComponent },
    { path: 'films', component: FilmsComponent },
    { path: 'orders', component: OrderPageComponent },
    { path: 'addOrder', component: AddOrderComponent },
    { path: 'editOrder', component: EditOrderComponent },
    { path: 'addFilm', component: AddFilmComponent },
    { path: 'editFilm', component: EditFilmComponent },
    { path: '**', loadChildren: () => Error404Module },
  ]},
  { path: '**', loadChildren: () => Error404Module }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemRoutingModule { }