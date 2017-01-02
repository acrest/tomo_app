import { RouterModule, Routes } from '@angular/router';

import { MembersComponent } from './members/members.component';
import { VacationsComponent } from './vacations/vacations.component';
import { EventsComponent } from './events/events.component';
//import { PhotosComponent } from './photos/photos.component';
import { HomeComponent } from './home/home.component';
import { PhotoEditComponent } from "./photos/photo-edit/photo-edit.component";
import {PhotoListComponent} from "./photos/photo-list/photo-list.component";
import {CruiseComponent} from "./cruise/cruise.component";
import {LakePowellComponent} from "./lake-powell/lake-powell.component";
import {CaliforniaComponent} from "./california/california.component";
import {BlakeAprilWeddingComponent} from './blake-april-wedding/blake-april-wedding.component';

const APP_ROUTES: Routes = [
  {path: 'members', component: MembersComponent},
  {path: 'vacations', component: VacationsComponent},
  {path: 'events', component: EventsComponent},
  {path: 'photos', component: PhotoListComponent},
  {path: 'home', component: HomeComponent },
  {path: '', component: HomeComponent },
  { path: 'photos/new', component: PhotoEditComponent },
  {path: 'vacations/cruise', component: CruiseComponent},
  {path: 'vacations/lake-powell', component: LakePowellComponent},
  {path: 'vacations/california', component: CaliforniaComponent},
  {path: 'events/b-a-wedding', component: BlakeAprilWeddingComponent}
];

export const routing = RouterModule.forRoot(APP_ROUTES);
