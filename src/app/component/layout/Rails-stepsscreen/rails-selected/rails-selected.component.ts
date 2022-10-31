import { Component, Input, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { JsonHttpService } from 'src/app/services/json-http/json-http.service';
import {selectedtitleInterface,setup2accordiondata} from '../../../../interface/select-service-interface.service'
@Component({
  selector: 'app-rails-selected',
  templateUrl: './rails-selected.component.html',
  styleUrls: ['./rails-selected.component.scss']
})
export class RailsSelectedComponent implements OnInit {
  public orderId=Math.floor(Date.now()/1000)
  public selected:selectedtitleInterface={"title":sessionStorage.getItem('selectedAddOn')};
  public valueneeded:string;
  public length:number;
  public today = new Date();
  public title=sessionStorage.getItem('selectedAddOn')
  public active:string;
  Title=[{
    "name":"Selected"
  }] 
  public userInfo= JSON.parse(sessionStorage.getItem("userInfo"));
  @Input() count:number=3;
  public accordianData:setup2accordiondata; 
  
  constructor(private router:Router,private jsonhttp:JsonHttpService) { 
    
    this.active = this.router.url;
    var storedArray = JSON.parse(sessionStorage.getItem("selectedRails"));
    this.length=storedArray.length;

  }

  ngOnInit() {

   this.jsonhttp.getjsonrailsSelected("assets/data/admin.json").subscribe(data => {
  this.accordianData = data['reviewOrderInput']
  this.valueneeded= this.selected.title;
  var storedArray = JSON.parse(sessionStorage.getItem("selectedRails"));
  this.length=storedArray.length;
  let len=this.accordianData.length;
  for (let i = 0; i < len; i++) {
    var index = storedArray.indexOf(this.accordianData[i].id);
    if(index!==-1){     
      this.accordianData[i]['display']=true;
      this.accordianData[i]['selected']=true;
    }
  }

       })
  }

}

