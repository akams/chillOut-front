import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Establishment } from './establishment.class';

@Injectable()
export class EstablishmentService {
  private headers = new Headers({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
  private url = 'http://localhost:3000/establishment';  // URL to web api

  constructor(private http: Http) { }

  getEstablishments(): Promise<Establishment[]> {
    return this.http.get(this.url)
      .toPromise()
      .then(response => response.json() as Establishment[])
      .catch(this.handleError);
  }

  getEstablishment(id: number): Promise<Establishment> {
    const url = `${this.url}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Establishment)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
