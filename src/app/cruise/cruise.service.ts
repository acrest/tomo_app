import { Injectable, EventEmitter } from '@angular/core';
import { Headers, Http, Response } from "@angular/http";
import 'rxjs/Rx';

import { Cruise } from "./cruise-obj";

@Injectable()
export class CruiseService {
  cruiseChanged = new EventEmitter<Cruise[]>();

  private cruises: Cruise[] = [
    new Cruise('Family Picture', 'This was taken on Second Night of the Cruise.  We all got dressed up and went to dinner.', 'https://scontent-lax3-1.cdninstagram.com/t51.2885-15/e35/15801922_392847301058964_4507137950277959680_n.jpg?ig_cache_key=MTQxOTI5MzUxNjAyMjc4OTgzMg%3D%3D.2'),
    new Cruise('Swimming with the Dolphins', 'Everyone had a blast swimming with the dolphins.  Especially Summer and Eden!', 'https://scontent-lax3-1.cdninstagram.com/t51.2885-15/e35/15803090_386813848333416_4477694154167549952_n.jpg?ig_cache_key=MTQxOTI1MTc3Mjg2NjU2MjUxNw%3D%3D.2')
  ];

  constructor(private http: Http) {}

  getCruises() {
    return this.cruises;
  }

  getCruise(id: number) {
    return this.cruises[id];
  }

  deleteCruise(cruise: Cruise) {
    this.cruises.splice(this.cruises.indexOf(cruise), 1);
  }

  addCruise(cruise: Cruise) {
    this.cruises.push(cruise);
  }

  editCruise(oldCruise: Cruise, newCruise: Cruise) {
    this.cruises[this.cruises.indexOf(oldCruise)] = newCruise;
  }

  storeData() {
    const body = JSON.stringify(this.cruises);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.put('https://family-project-4f904.firebaseio.com/vacations/cruise.json', body, {headers: headers});
  }

  fetchData() {
    return this.http.get('https://family-project-4f904.firebaseio.com/vacations/cruise.json')
      .map((response: Response) => response.json())
      .subscribe(
        (data: Cruise[]) => {
          this.cruises = data;
          this.cruiseChanged.emit(this.cruises);
        }
      );
  }

}
