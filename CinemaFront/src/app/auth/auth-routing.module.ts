import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { Error404Module } from '../error404/error404.module';

const routes: Routes = [
  { path: '', component: AuthComponent, children: [
        { path: 'login', component: LoginComponent },
        { path:'register', component: RegistrationComponent },
        { path: '**', loadChildren: () => Error404Module },
    ] 
  },
  { path: '**', loadChildren: () => Error404Module },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }