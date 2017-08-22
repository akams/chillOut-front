import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
    HttpModule,
    FormsModule,
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
