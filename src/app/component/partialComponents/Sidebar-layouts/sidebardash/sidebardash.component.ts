import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-sidebardash',
  templateUrl: './sidebardash.component.html',
  styleUrls: ['./sidebardash.component.scss']
})
export class SidebardashComponent {
  options: string[];
  public active:string;
  show:Boolean;
  constructor(private router:Router) { 

    this.active = this.router.url;


  }
  open(){
    this.show = !this.show;
  }

}

