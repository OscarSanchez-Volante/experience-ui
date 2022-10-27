import { Component, Input, OnInit } from '@angular/core';
import { userDetailHead,userDetailcont } from '@inputs/user-detail';
@Component({
  selector: 'app-userdetails-sandbox',
  templateUrl: './userdetails-sandbox.component.html',
  styleUrls: ['./userdetails-sandbox.component.scss']
})
export class UserdetailsSandboxComponent implements OnInit {
  @Input() data;
  @Input() active;
  UserDetailHead:Array <any>=userDetailHead;
  UserDetailcont:Array <any>=userDetailcont;
  public tabledetailsHead3: any;
  public tabledetailValues3: any;

  constructor() { }

  ngOnInit(): void {
   this.tabledetailsHead3=this.UserDetailHead;
    this.tabledetailValues3=this.UserDetailcont;
  }
  selectActive(index){

    this.active=this.data[index].name;
    this.data.forEach(element => {
      if(element.name==this.active){
         element.status="pending";
      }
      else{
         element.status="initial";
      }
    });

   }
}
