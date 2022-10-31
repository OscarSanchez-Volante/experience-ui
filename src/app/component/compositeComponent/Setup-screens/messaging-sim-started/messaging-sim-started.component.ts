import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-messaging-sim-started',
  templateUrl: './messaging-sim-started.component.html', 
  styleUrls: ['./messaging-sim-started.component.scss']
})
export class MessagingSimStartedComponent implements OnInit {
  public today = new Date();    
  constructor(private router:Router) { }
 public currentUrl:string|number;
 public userInfo= JSON.parse(sessionStorage.getItem("userInfo"));
 @Input() events: Observable<void>;

  ngOnInit() {
   this.currentUrl = this.router.url;
   const next =  new Date();
   const year = next.getFullYear();
   const months = next.getMonth();
  var monthArr = ["January", "February","March", "April", "May", "June", "July", "August", "September", "October", "November","December"];
  let month = monthArr[months];
   const d = next.getDate();
   document.getElementById("date").innerHTML = d+ "-" + month + "-" + year;
  }

    invitescreen(){
      document.getElementById("closemodal").click();
    
    }

}
