import { Component, OnInit,Input } from '@angular/core';
import { adminuserTablehead ,adminuserTablecont} from '@inputs/adminusertable-input';

@Component({
  selector: 'app-adminuser-content',
  templateUrl: './adminuser-content.component.html',
  styleUrls: ['./adminuser-content.component.scss']
})
export class AdminuserContentComponent implements OnInit {
  @Input() data;
  @Input() active;
  AdminTablehead:Array <any>=adminuserTablehead;
  AdminTablecont:Array <any>=adminuserTablecont;
  public tableadminHead2: any;
  public tableadminValues2: any;

  constructor() { }

  ngOnInit(): void {
    this.tableadminHead2=this.AdminTablehead;
    this.tableadminValues2=this.AdminTablecont;

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
