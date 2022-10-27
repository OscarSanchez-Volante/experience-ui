import { Component, OnInit,Input} from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-ops-header',
  templateUrl: './ops-header.component.html',
  styleUrls: ['./ops-header.component.scss']
})
export class OpsHeaderComponent implements OnInit {
  @Input() active;
  data:any;
  public currentUrl;
  public userInfo= JSON.parse(sessionStorage.getItem("userInfo"));
  constructor(private router: Router ) { }

  ngOnInit(): void {
    this.currentUrl = this.router.url;

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
