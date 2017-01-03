import { Component, OnInit } from '@angular/core';
import {Cruise} from "../cruise-obj";
import {CruiseService} from "../cruise.service";

@Component({
  selector: 'app-cruise-list',
  templateUrl: './cruise-list.component.html',
  styleUrls: ['./cruise-list.component.css']
})
export class CruiseListComponent implements OnInit {

  cruises: Cruise[] = [];

  constructor(private cruiseService: CruiseService) {}

  ngOnInit() {
    this.cruises = this.cruiseService.getCruises();
    this.cruiseService.cruiseChanged.subscribe(
      (cruises: Cruise[]) => this.cruises = cruises
    );
  }

}
