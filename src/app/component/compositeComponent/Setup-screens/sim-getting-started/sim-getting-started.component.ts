import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sim-getting-started',
  templateUrl: './sim-getting-started.component.html',
  styleUrls: ['./sim-getting-started.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class SimGettingStartedComponent implements OnInit {
  public userInfo= JSON.parse(sessionStorage.getItem("userInfo"));
 constructor(private router:Router) { }
 public currentUrl:string|number;

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
