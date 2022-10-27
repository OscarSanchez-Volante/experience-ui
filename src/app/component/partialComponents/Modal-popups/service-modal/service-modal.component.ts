import { Component, OnInit, EventEmitter,Input,Output } from '@angular/core';
import { FileUploader, FileLikeObject } from 'ng2-file-upload';
import { Observable, Subscription } from 'rxjs';
import {Router } from '@angular/router';
@Component({
  selector: 'app-service-modal',
  templateUrl: './service-modal.component.html',
  styleUrls: ['./service-modal.component.scss']
})
export class ServiceModalComponent implements OnInit {
  @Output() someEvent: EventEmitter<any> = new EventEmitter<any>(); 
  public currentUrl;
  @Input() events: Observable<void>;
  public carouselcardData =[{
    "titleC":"VolPay",
    "selected":true,
    "isDisabled":true,
    "descC":"Lorem Ipsum is simply typesetting text.",
    "freeDetailsC":{
      "titleC":"Rails",
      "contentC":['TCH-RTP','Fedwire']
    },
    "paidDetailsC":{
      "titleC":"Role",
      "contentC":['End User']
    }
   
  },
  {
    "titleC":"Reporting",
    "selected":true,
    "isDisabled":true,
    "descC":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.Lorem Ipsum has been.",
 
    "freeDetailsC":{
      "titleC":"Role",
      "contentC":['User Admin']
    },
    "paidDetailsC":{
   
    }
  },
  {
    "titleC":"Billing",
    "selected":true,
    "descC":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry. Lorem Ipsum has been.",
   
    "freeDetailsC":{
      "titleC":"Role",
      "contentC":['User Admin']
    },
    "paidDetailsC":{
     
    }
    
  },

]

 constructor(private router:Router) { }
 modalEmit(){
  this.someEvent.emit();
 }



  ngOnInit() {
    ("check value");
   (this.carouselcardData);
   this.currentUrl = this.router.url;
  }

}
