import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AgmCoreModule } from '@agm/core';

import { routes } from './app.router';

import { AppComponent } from './app.component';
import { EstablishmentComponent } from './establishment/establishment.component';
import { EstablishmentService } from './establishment/establishment.service';
import { HomeComponent } from './home/home.component';
import { EstablishmentDetailComponent } from './establishment-detail/establishment-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EstablishmentComponent,
    EstablishmentDetailComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAvtt9bb2hPv99HXTEG6zQYXLp5H6v3RuI'
    }),
    HttpModule,
    ReactiveFormsModule,
    routes,
    NgbModule.forRoot()
  ],
  providers: [
    EstablishmentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
