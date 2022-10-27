import { Component, OnInit,Input, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Slick } from 'ngx-slickjs';
import { title } from 'process';

@Component({
  selector: 'app-messaging-sim-started',
  templateUrl: './messaging-sim-started.component.html', 
  styleUrls: ['./messaging-sim-started.component.scss']
})
export class MessagingSimStartedComponent implements OnInit {
  public today = new Date();
  public MessagingcardData =[
    {
    "title":"Message Constructors & Validators",
    "image": "icons-payment.png",
    "selected":true,
    "isDisabled":false,
    "desc":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.",
  
    "paidDetails":{
    "title":"Users",
    "content":['End User']
    }
    
    },
    {
    "title":"Message Transformers",
    "image": "icons-action.png",
    "selected":true,
    "isDisabled":true,
    "desc":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.Lorem Ipsum has been.",
    
    "paidDetails":{
    "title":"Users",
    }
    
    },
    {
    "title":"Message Creators",
    "image": "icons-transactions.png",
    "selected":true,
    "desc":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry. Lorem Ipsum has been.",
    
    "paidDetails":{
    "title":"Users",
    }
    
    }
    
    
    ]
    
    constructor(private router:Router) { }
 public currentUrl;
 public userInfo= JSON.parse(sessionStorage.getItem("userInfo"));
 @Input() events: Observable<void>;

  ngOnInit() {
   this.currentUrl = this.router.url;
   const n =  new Date();
   const y = n.getFullYear();
   const m = n.getMonth();
  var monthArr = ["January", "February","March", "April", "May", "June", "July", "August", "September", "October", "November","December"];
  let month = monthArr[m];
   const d = n.getDate();
   document.getElementById("date").innerHTML = d+ "-" + month + "-" + y;
  }

    invitescreen(){
      document.getElementById("closemodal").click();
    
    }

}
