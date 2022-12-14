import { Component, OnInit,Input, ViewEncapsulation, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { JsonHttpService } from 'src/app/services/json-http/json-http.service';
import { NguCarousel, NguCarouselConfig } from '@ngu/carousel';
import { Router } from '@angular/router';


@Component({
selector: 'app-carousel-simstarted',
templateUrl: './carousel-simstarted.component.html',
styleUrls: ['./carousel-simstarted.component.scss'],
encapsulation:ViewEncapsulation.None


})
export class CarouselSimstartedComponent implements OnInit {
    withAnim = true;

    @ViewChild('myCarousel') myCarousel: NguCarousel<any>;
    public userInfo= JSON.parse(sessionStorage.getItem("userInfo"));
public carouselcardData ;





constructor(private jsonhttp:JsonHttpService,private router:Router) {

}


public currentUrl;
public isReadMore = true
active: boolean;
public orderId=Math.floor(Date.now()/1000)
public length;
newArray:any=[];
d(){

}
showText() {
this.isReadMore = !this.isReadMore
}
@Input() events: Observable<void>;


ngOnInit() {
  this.jsonhttp.getnodataPaas("assets/data/admin.json").subscribe(data => {
    this.carouselcardData = data['carouselcardData']
  })
this.currentUrl = this.router.url;
let storedArray1 =JSON.parse(sessionStorage.getItem("selectedAddOn1"));
storedArray1.forEach((item1) =>{
if(item1.selected==true)
{

this.newArray.push(item1);
}


})


this.isInvolved();

}

isInvolved()
{ 

this.carouselcardData.forEach((item) =>{
let titl:boolean=true;
this.newArray.forEach((item1) =>{



if(item.title == item1.title)
{
titl=false;
}


})
if(titl )
{
this.newArray.push(item)
}
})
}
invitescreen(){
document.getElementById("closemodal").click();
}
arrayLength = 10;
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
  carousel(data:any){
  console.log(data.value)
  }
}