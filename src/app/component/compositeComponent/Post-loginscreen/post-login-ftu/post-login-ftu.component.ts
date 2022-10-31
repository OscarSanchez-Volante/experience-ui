import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable} from 'rxjs';
import{signupInterface} from'../../../../interface/login-interface';
@Component({
  selector: 'app-post-login-ftu',
  templateUrl: './post-login-ftu.component.html',
  styleUrls: ['./post-login-ftu.component.scss']
})
export class PostLoginFtuComponent implements OnInit {
  @Input() events: Observable<string|number>;
  public userInfo:signupInterface= JSON.parse(sessionStorage.getItem("userInfo"));
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
