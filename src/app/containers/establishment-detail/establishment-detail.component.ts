import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import { Establishment } from '../establishment/establishment.class';
import { EstablishmentService } from '../establishment/establishment.service';

@Component({
  selector: 'app-establishment-detail',
  templateUrl: './establishment-detail.component.html',
  styleUrls: ['./establishment-detail.component.css']
})
export class EstablishmentDetailComponent implements OnInit {
  establishment: Establishment;

  constructor(
    private establishmentService: EstablishmentService,
    private route: ActivatedRoute,
    private location: Location,
  ) { }

  ngOnInit() {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.establishmentService.getEstablishment(+params.get('id')))
      .subscribe(establishment => this.establishment = establishment);
  }

  goBack(): void {
    this.location.back();
  }

}
