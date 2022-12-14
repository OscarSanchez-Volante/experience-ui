import { Component, OnInit,Input, ViewEncapsulation, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { Slick } from 'ngx-slickjs';
import { title } from 'process';
import { NguCarousel, NguCarouselConfig } from '@ngu/carousel';
import { JsonHttpService } from 'src/app/services/json-http/json-http.service';
@Component({
  selector: 'app-messaging-carousal',
  templateUrl: './messaging-carousal.component.html',
  styleUrls: ['./messaging-carousal.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class MessagingCarousalComponent implements OnInit {
  withAnim = true;
  public userInfo= JSON.parse(sessionStorage.getItem("userInfo"));

  @ViewChild('myCarousel') myCarousel: NguCarousel<any>;
  public MessagingcardData ;
  constructor(private jsonhttp:JsonHttpService) { }

    ngOnInit() {
      this.jsonhttp.getMessagingcardData("assets/data/admin.json").subscribe(data => {
        this.MessagingcardData = data['MessagingcardData']
      })
     }
    public isReadMore = true
    active: any;
    public orderId=Math.floor(Date.now()/1000)
    public length; 
    newArray=[];
    d(){
    
    }
    
    
    
    showText() {
    this.isReadMore = !this.isReadMore
    }   
    @Input() events: Observable<void>;
       invitescreen(){
         document.getElementById("closemodal").click();
       }
   
      arrayLength = 10;
   
     config: Slick.Config = {
         infinite: true,
         slidesToShow: 2,
         slidesToScroll: 1,
         dots: true,
         autoplay: false,
         autoplaySpeed: 2000 
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
    carouselItems = [1, 2];
  
    
    }