import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { routes } from './app.router';

import { AppComponent } from './app.component';
import { HomeComponent } from './containers/home/home.component';
// import { EstablishmentComponent } from './containers/establishment/establishment.component';
// import { EstablishmentService } from './containers/establishment/establishment.service';
// import { EstablishmentDetailComponent } from './containers/establishment-detail/establishment-detail.component';
import { HeaderComponent } from './components/header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    // EstablishmentComponent,
    // EstablishmentDetailComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    routes,
    NgbModule.forRoot()
  ],
  providers: [
    // EstablishmentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
