import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-message-sidenavbar',
  templateUrl: './message-sidenavbar.component.html',
  styleUrls: ['./message-sidenavbar.component.scss']
})
export class MessageSidenavbarComponent implements OnInit {
  options: string[];
  public active:string;
  show:Boolean;
  constructor(private router:Router) { 

    this.active = this.router.url;


  }
  open(){
    this.show = !this.show;
  }

  ngOnInit(): void {
  }

}
