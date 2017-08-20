import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { routes } from './app.router';

import { AppComponent } from './app.component';
import { EstablishmentComponent } from './establishment/establishment.component';
import { EstablishmentService } from './establishment/establishment.service';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    EstablishmentComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    routes
  ],
  providers: [
    EstablishmentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
