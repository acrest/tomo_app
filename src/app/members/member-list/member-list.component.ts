import { Component, OnInit } from '@angular/core';

import { Member } from '../member'
import { MEMBERS } from '../membersArray'

@Component({
  selector: 'app-member-list',
  template: `
<div class="row">
  <div class="col-xs-12">
    <ul class="list-group">
      <app-member-item *ngFor="let member of membersArray; let i = index" [member]="member" [memberID]="i">list</app-member-item>
    </ul>
  </div>
</div>
<div class="row">
  <div class="col-xs-12">
    <a class="btn btn-success" [routerLink]="['new']">New Member</a>
  </div>
</div>
`,
  styles:[]
})
export class MemberListComponent implements OnInit {
  membersArray: Member[] = MEMBERS;

  constructor() { }

  ngOnInit() {
  }

}
