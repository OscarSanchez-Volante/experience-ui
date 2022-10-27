import { Component, OnInit,Input,Output,EventEmitter,ViewEncapsulation, ViewChild } from '@angular/core';
import { CarouselSmallcardServiceService } from '@services/carousel-smallcard.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';
import { NguCarousel, NguCarouselConfig } from '@ngu/carousel';

@Component({
  selector: 'app-carousel-smallcard',
  templateUrl: './carousel-smallcard.component.html',
  styleUrls: ['./carousel-smallcard.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class CarouselSmallcardComponent implements OnInit {
  withAnim = true;

  @ViewChild('myCarousel') myCarousel: NguCarousel<any>;
  @Input()  data:any;
  @Output() onTFAEnabled = new EventEmitter();
  @Input() events: Observable<void>;
  @Input('checkBoxType') checkBoxType:string;

  public carouselcardData =[
    {
    "title":"VolPay",
    "image": "icons-payment.png",
    "selected":true,
    "isDisabled":false,
    "desc":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.Lorem Ipsum has been.",
    "freeDetails":{
    "title":"Rails",
    "content":['TCH-RTP','Fedwire']
    },
    "paidDetails":{
    "title":"Fedwire",
    "content":['End User']
    }

    },
    {
    "title":"Reporting",
    "image": "icons-action.png",
    "selected":true,
    "isDisabled":true,
    "desc":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.Lorem Ipsum has been.",

    "paidDetails":{
    "title":"Users",
    }

    },
    {
    "title":"Billing",
    "image": "icons-transactions.png",
    "selected":true,
    "desc":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry. Lorem Ipsum has been.",

    "paidDetails":{
    "title":"Users",
    }

    },




    ]
  public isReadMore = true
  public currentUrl;
  newArray=[];
  newValue: any=[];
  d(){

  }

  showText() {
     this.isReadMore = !this.isReadMore
  }
  constructor(private CarouselSmallcardService:CarouselSmallcardServiceService, private router: Router) { }

  ngOnInit(): void {

    this.currentUrl = this.router.url;
    let storedArray1 =JSON.parse(sessionStorage.getItem("selectedAddOn1"));

    // code when no json
storedArray1.forEach((item1) =>{
  if(item1.selected==true)
  {

  this.newValue.push(item1);
  }


  })



  this.isInvolved();
  }

 isInvolved()
{ let storeArray:any=[];

this.carouselcardData.forEach((item) =>{
let titl:boolean=true;
this.newValue.forEach((item1) =>{



if(item.title == item1.title)
{
titl=false;
}


})
if(titl )
{
this.newValue.push(item)

}


})


 }




  addonChange(type,details){
    if(type=='group'){
      sessionStorage.removeItem('selectedRails');
    sessionStorage.setItem('selectedAddOn2',JSON.stringify(this.data))
    sessionStorage.setItem('selectedAddOn','Message Creators')


  }
    else{

    sessionStorage.setItem('selectedAddOn1',JSON.stringify(this.data))

    sessionStorage.setItem('selectedAddOn','Payment Rails')
  }
    this.CarouselSmallcardService.serviceSelectedC();
  }

  invitescreen(){
      this.onTFAEnabled.emit();
    this.router.navigate(['gettingStarted5.0-invite-v2']);

    }
    getArray(count: number) {
      return new Array(count)
      }
    public carouselTileConfig: NguCarouselConfig = {
      grid: { xs: 1, sm: 1, md: 2, lg: 3, all: 0 },
      speed: 500,
      point: {
        visible: true,
        hideOnSingleSlide: true
      },
      touch: true,
      loop: true,
      load: 2,
      interval: { timing: 1000000 },
      velocity: 0,
      animation: 'lazy',
      easing: 'cubic-bezier(0.35, 0, 0.25, 1)',
      RTL: false

    };
    carouselItems = [1, 2, 3];
}


