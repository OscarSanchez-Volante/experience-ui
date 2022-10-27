import { Component, OnInit } from '@angular/core';


export interface AutoCompleteModel {
   value: any;
   display: string;
}
@Component({
  selector: 'app-adminpopup-inviteuser',
  templateUrl: './adminpopup-inviteuser.component.html',
  styleUrls: ['./adminpopup-inviteuser.component.scss']
})
export class AdminpopupInviteuserComponent implements OnInit {

  
  constructor() { }

  ngOnInit() {
  }
 
}