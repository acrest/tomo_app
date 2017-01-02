import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { TitleComponent } from './title.component';
import { MembersComponent } from './members/members.component';
import { VacationsComponent } from './vacations/vacations.component';
import { EventsComponent } from './events/events.component';
import { PhotosComponent } from './photos/photos.component';
import { HomeComponent } from './home/home.component';
import {routing} from "./app.routing";
import { MemberItemComponent } from './members/member-list/member-item.component';
import { MemberListComponent } from './members/member-list/member-list.component';
import { VacationsListComponent } from './vacations/vacations-list/vacations-list.component';
import { VacationItemComponent } from './vacations/vacations-list/vacation-item.component';
import { PhotoServiceService } from './photos/photo-service.service';
import { PhotoListComponent } from './photos/photo-list/photo-list.component';
import { PhotoItemComponent } from './photos/photo-list/photo-item.component';
import { PhotoEditComponent } from './photos/photo-edit/photo-edit.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TitleComponent,
    MembersComponent,
    VacationsComponent,
    EventsComponent,
    PhotosComponent,
    HomeComponent,
    MemberItemComponent,
    MemberListComponent,
    VacationsListComponent,
    VacationItemComponent,
    PhotoListComponent,
    PhotoItemComponent,
    PhotoEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    routing
  ],
  providers: [PhotoServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
