import { Routes } from "@angular/router";

import { PhotosStartComponent } from "./photos-start.component"
import { PhotoEditComponent } from "./photo-edit/photo-edit.component";
import {PhotoDetailComponent} from "./photo-detail/photo-detail.component";

export const PHOTOS_ROUTES: Routes = [
  { path: '', component: PhotosStartComponent },
  { path: 'new', component: PhotoEditComponent },
  { path: ':id', component: PhotoDetailComponent },
  { path: ':id/edit', component: PhotoEditComponent }
];
