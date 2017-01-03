import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs/Rx";

import { Photo } from "../photo";
import { PhotoServiceService } from '../photo-service.service'

@Component({
  selector: 'app-photo-detail',
  templateUrl: './photo-detail.component.html',
  styleUrls: ['./photo-detail.component.css']
})
export class PhotoDetailComponent implements OnInit, OnDestroy {
  selectedPhoto: Photo;
  private photoIndex: number;
  private subscription: Subscription;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private cruiseService: PhotoServiceService) {}

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      (params: any) => {
        this.photoIndex = params['id'];
        this.selectedPhoto = this.cruiseService.getPhoto(this.photoIndex);
      }
    );
  }

  onEdit() {
    this.router.navigate(['vacations/cruise', this.photoIndex, 'edit']);
  }

  onDelete() {
    this.cruiseService.deletePhoto(this.selectedPhoto);
    this.router.navigate(['vacations/cruise']);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
