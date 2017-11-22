import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Establishment } from './establishment.class';
import { Marker } from './marker';
import { EstablishmentService } from './establishment.service';

@Component({
  selector: 'app-establishment',
  templateUrl: './establishment.component.html',
  styleUrls: ['./establishment.component.css']
})
export class EstablishmentComponent implements OnInit {
  establishments: Establishment[];
  selectedEstablishment: Establishment;
  // markers: Marker[] = [
  //   {
  //     lat: 51.673858,
  //     lng: 7.815982,
  //     label: 'A',
  //     draggable: true
  //   },
  //   {
  //     lat: 51.373858,
  //     lng: 7.215982,
  //     label: 'B',
  //     draggable: false
  //   },
  //   {
  //     lat: 51.723858,
  //     lng: 7.895982,
  //     label: 'C',
  //     draggable: true
  //   }
  // ];
  markers: Marker[] = [];
  // default list
  model = true;
  // google maps zoom level
  zoom = 8;
  // initial center position for the map
  lat = 51.673858;
  lng = 7.815982;


  constructor(
    private establishmentService: EstablishmentService,
    private router: Router) { }

  getEstablishments(): void {
    this.establishmentService
      .getEstablishments()
      .then(establishment => {
        console.log({ establishment });
        this.establishments = establishment;
        this.markers = this.establishments.map(value => {
          return {
            lat: Number(value.latitude),
            lng: Number(value.longitude),
            label: value.name,
            draggable: false
          };
        });
      });
  }

  ngOnInit() {
    this.getEstablishments();
  }

  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`);
  }

  mapClicked($event) {
    console.log({$event});
    this.markers.push({ // eslint-disable-line
      lat: $event.coords.lat, // eslint-disable-line
      lng: $event.coords.lng, // eslint-disable-line
      draggable: false
    }); // eslint-disable-line
  }

  markerDragEnd(m: Marker, $event: MouseEvent) {
    console.log('dragEnd', m, $event);
  }

  clicked() {
    console.log('test', this.model);
    this.model = !this.model;
  }

}
