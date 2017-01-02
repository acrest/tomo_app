import { RouterModule, Routes } from '@angular/router';

import { MembersComponent } from './members/members.component';
import { VacationsComponent } from './vacations/vacations.component';
import { EventsComponent } from './events/events.component';
//import { PhotosComponent } from './photos/photos.component';
import { HomeComponent } from './home/home.component';
import { PhotoEditComponent } from "./photos/photo-edit/photo-edit.component";
import {PhotoListComponent} from "./photos/photo-list/photo-list.component";

const APP_ROUTES: Routes = [
  {path: 'members', component: MembersComponent},
  {path: 'vacations', component: VacationsComponent},
  {path: 'events', component: EventsComponent},
  {path: 'photos', component: PhotoListComponent},
  {path: 'home', component: HomeComponent },
  {path: '', component: HomeComponent },
  { path: 'photos/new', component: PhotoEditComponent }
];

export const routing = RouterModule.forRoot(APP_ROUTES);
