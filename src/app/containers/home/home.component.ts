import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  displayMoreCriteas: boolean;
  currentStyles: object;

  constructor() { }

  ngOnInit() {
    this.displayMoreCriteas = false;
    this.currentStyles = {
      'width': !this.displayMoreCriteas ? '88%' : ''
    };
  }

  moreCriteas(): void {
    this.displayMoreCriteas = !this.displayMoreCriteas;
    this.currentStyles = {
      'width': !this.displayMoreCriteas ? '88%' : ''
    };
  }

}
