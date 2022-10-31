import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-side-navbar',
  templateUrl: './side-navbar.component.html',
  styleUrls: ['./side-navbar.component.scss']
})
export class SideNavbarComponent  {
  show:Boolean;
  options: string[];
  public active:string;
  constructor(private router:Router) { 

    this.active = this.router.url;


  }
  open(){
    this.show = !this.show;
  }
}
