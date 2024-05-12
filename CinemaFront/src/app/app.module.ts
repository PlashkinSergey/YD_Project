import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AuthModule } from './auth/auth.module';
import { SystemModule } from './system/system.module';
import { Error404Module } from './error404/error404.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideHotToastConfig } from '@ngneat/hot-toast';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { EditFilmComponent } from './system/shared/forms/edit-film/edit-film.component';
import { AddFilmComponent } from './system/shared/forms/add-film/add-film.component';
import { AddOrderComponent } from './system/shared/forms/add-order/add-order.component';
import { EditOrderComponent } from './system/shared/forms/edit-order/edit-order.component';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    SystemModule,
    Error404Module,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    provideHotToastConfig(),
    { 
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, 
      useValue: {appearance: 'fill'}
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
