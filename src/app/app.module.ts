import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { Seccion1Component } from './seccion1/seccion1.component';
import { SeccionCarruselComponent } from './seccion-carrusel/seccion-carrusel.component';
import { Seccion3Component } from './seccion3/seccion3.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Seccion1Component,
    SeccionCarruselComponent,
    Seccion3Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
