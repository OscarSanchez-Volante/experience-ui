import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-post-login-ftu',
  templateUrl: './post-login-ftu.component.html',
  styleUrls: ['./post-login-ftu.component.scss']
})
export class PostLoginFtuComponent implements OnInit {
  private eventsSubscription: Subscription;
  @Input() events: Observable<any>;
  public userInfo= JSON.parse(sessionStorage.getItem("userInfo"));
  active: string;
  constructor(private router:Router) { 
    
    this.active = this.router.url;


  }

  ngOnInit(): void {
  }
  onShow(){
    document.getElementById("servicesHome").click();
  }

}
