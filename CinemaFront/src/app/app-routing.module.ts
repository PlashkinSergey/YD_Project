import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthModule } from './auth/auth.module';
import { Error404Module } from './error404/error404.module';
import { SystemModule } from './system/system.module';

const routes: Routes = [
  { path: '', redirectTo: 'auth/login', pathMatch: 'full' },
  { path: 'auth', loadChildren: () => AuthModule },
  { path: 'system', loadChildren: () => SystemModule },
  { path: '**', loadChildren: () => Error404Module },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
