import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Slick } from 'ngx-slickjs';

@Component({
  selector: 'app-sim-getting-started',
  templateUrl: './sim-getting-started.component.html',
  styleUrls: ['./sim-getting-started.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class SimGettingStartedComponent implements OnInit {
  public userInfo= JSON.parse(sessionStorage.getItem("userInfo"));

  public carouselcardData =[{
    "titleC":"VolPay",
    "image": "icons-payment.png",
    "selected":false,
    "isDisabled":false,
    "descC":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.",
    "freeDetailsC":{
      "titleC":"Rails",
      "contentC":['TCH-RTP']
    },
    "freeDetailsCo":{
      "titleC":"Rails",
      "contentC0":['Fedwire']
    },

    "paidDetailsC":{
      "titleC":"Fedwire",
      "contentC":['End User']
    },
    "paidDetailsCo":{
      "titleC":"Fedwire",
      "contentCo":['End User']
    }

  },
  {
    "titleC":"Reporting",
    "image": "icons-action.png",
    "selected":true,
    "isDisabled":true,
    "descC":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.Lorem Ipsum has been.",
    "freeDetailsC":{

    },
    "paidDetailsC":{
      "titleC":"Users",
    }

  },
  {
    "titleC":"Billing",
    "image": "icons-transactions.png",
    "selected":false,
    "descC":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry. Lorem Ipsum has been.",
    "freeDetailsC":{

    },
    "paidDetailsC":{
      "titleC":"Users",
    }

  },



]

 constructor(private router:Router) { }
 public currentUrl;

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
