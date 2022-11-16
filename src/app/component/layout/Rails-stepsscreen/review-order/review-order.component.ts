import { Component, Input, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { JsonHttpService } from 'src/app/services/json-http/json-http.service';
// import { reviewOrderInput } from '../../../../inputs/review-order.service';
import {selectedtitleInterface,setup2accordiondata} from '../../../../interface/select-service-interface.service'
import {msgrevieworderinputInterface} from '../../../../interface/railsstepscreen-interface'
@Component({
  selector: 'app-review-order',
  templateUrl: './review-order.component.html',
  styleUrls: ['./review-order.component.scss']
})
export class ReviewOrderComponent implements OnInit {
  public orderId=Math.floor(Date.now()/1000)
  public MsgaccordianData: Array <msgrevieworderinputInterface> ;
  public valueneeded:string;
  public selected:selectedtitleInterface={"title":sessionStorage.getItem('selectedAddOn')};

  public length:number;
  public today = new Date();
  public title=sessionStorage.getItem('selectedAddOn')
  public active:string;
  public accordianData:setup2accordiondata;
  //public userInfo= JSON.parse(sessionStorage.getItem("userInfo"));
  public userInfo = JSON.parse(localStorage.getItem('userdata'));
  @Input() count:number=3;

  constructor(private router:Router, private jsonhttp:JsonHttpService) {

    this.active = this.router.url;
    this.valueneeded= this.selected.title;


  }

 ngOnInit() {
    this.jsonhttp.getjsonreviewOrder("assets/data/admin.json").subscribe(data => {
      this.accordianData = data['reviewOrderInput']
      this.MsgaccordianData = data['messageInputrevieworder']
      if(this.valueneeded=='Payment Rails'){
        var storedArray = JSON.parse(sessionStorage.getItem("selectedRails"));
        this.length=storedArray.length;
        let len=this.accordianData?.length;
        for (let i = 0; i < len; i++) {
          var index = storedArray.indexOf(this.accordianData[i].id);
          if(index!==-1){
            this.accordianData[i]['display']=true;
            this.accordianData[i]['selected']=true;

        }
        }
    }
    })

  }
}
