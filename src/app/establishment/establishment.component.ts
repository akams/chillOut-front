import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Establishment } from './establishment.class';
import { EstablishmentService } from './establishment.service';

@Component({
  selector: 'app-establishment',
  templateUrl: './establishment.component.html',
  styleUrls: ['./establishment.component.css']
})
export class EstablishmentComponent implements OnInit {
  establishments: Establishment[];
  selectedEstablishment: Establishment;
  model = 1;

  constructor(
    private establishmentService: EstablishmentService,
    private router: Router) { }

  getEstablishments(): void {
    this.establishmentService
      .getEstablishments()
      .then(establishment => {
        console.log({ establishment });
        this.establishments = establishment;
      });
  }

  ngOnInit() {
    this.getEstablishments();
  }

}
