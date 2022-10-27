import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { reviewOrderInput } from '@inputs/review-order.service';
import { reviewOrderInput1 } from '@inputs/review-order1.service';
import { reviewOrderMessage } from '@inputs/review-order-me.service';
import { reviewOrderValidators } from '@inputs/review-order-va.service';
import { MessageReviewOrderInput } from '@inputs/Messagerevieworder-input';

@Component({
  selector: 'app-review-order',
  templateUrl: './review-order.component.html',
  styleUrls: ['./review-order.component.scss']
})
export class ReviewOrderComponent implements OnInit {
  public orderId=Math.floor(Date.now()/1000)
  reviewOrderInput:Array <any>=reviewOrderInput;
  reviewOrderInput1:Array <any>=reviewOrderInput1;
  reviewOrderMessage:Array <any>=reviewOrderMessage;
  reviewOrderValidators:Array <any>=reviewOrderValidators;
  messageInputrevieworder:Array <any>=MessageReviewOrderInput;

  public valueneeded;
  public selected:any={"title":sessionStorage.getItem('selectedAddOn')};

  public length;
  public today = new Date();
  public title=sessionStorage.getItem('selectedAddOn')
  public active:string;
  public accordianData = this.reviewOrderInput
  public MsgaccordianData = this.messageInputrevieworder

  public userInfo= JSON.parse(sessionStorage.getItem("userInfo"));
  @Input() count:number=3;

  constructor(private router:Router) {

    this.active = this.router.url;
    this.valueneeded= this.selected.title;


  }

  ngOnInit() {

if(this.valueneeded=='Payment Rails'){
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
}
  }



}
