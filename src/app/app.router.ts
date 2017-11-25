import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './containers/home/home.component';
// import { EstablishmentComponent } from './containers/establishment/establishment.component';
// import { EstablishmentDetailComponent } from './containers/establishment-detail/establishment-detail.component';

export const router: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    // {path: 'establishment', component: EstablishmentComponent},
    // {path: 'detail/:id', component: EstablishmentDetailComponent}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
