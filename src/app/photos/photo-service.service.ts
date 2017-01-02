import { Injectable, EventEmitter } from '@angular/core';
import { Http, Headers, Response } from "@angular/http";
import 'rxjs/Rx'

import { Photo } from "./photo"

@Injectable()
export class PhotoServiceService {
  photosChanged = new EventEmitter<Photo[]>();
  private photos: Photo[] = []
  //  new Photo('Eden Back To School','Eden\'s picture for back to school Fall 2016', 'https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/13920942_10153777762794599_6398620272109907535_n.jpg?oh=beace499fd1d57fd17bc584fdfa0fb9b&oe=5922CCE2')
  //]
  constructor(private http: Http) { }

  getPhotos() {
    return this.photos;
  }
  getPhoto(id: number) {
    return this.photos[id];
  }

  deletePhoto(photo: Photo) {
    this.photos.splice(this.photos.indexOf(photo), 1);
  }

  addPhoto(photo: Photo) {
    this.photos.push(photo);
  }

  editPhoto(oldPhoto: Photo, newPhoto: Photo) {
    this.photos[this.photos.indexOf(oldPhoto)] = newPhoto;
  }

  storeData(){
    console.log(this.photos);
    const body = JSON.stringify(this.photos);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });

    return this.http.put('https://family-project-4f904.firebaseio.com/photos.json', body, {headers: headers});
  }
  fetchData(){
    return this.http.get('https://family-project-4f904.firebaseio.com/photos.json')
      .map((response: Response) => response.json())
      .subscribe(
        (data: Photo[]) => {
      this.photos = data;
      this.photosChanged.emit(this.photos);
    }
      );
  }
}
