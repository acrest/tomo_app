import { Component } from '@angular/core';

import { HeaderComponent } from './header.component';

import { TitleComponent } from './title.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Welcome to the Crestani Family Web Page!';
}
