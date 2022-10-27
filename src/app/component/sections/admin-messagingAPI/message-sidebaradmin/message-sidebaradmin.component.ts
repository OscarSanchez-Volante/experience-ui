import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
@Component({
  selector: 'app-message-sidebaradmin',
  templateUrl: './message-sidebaradmin.component.html',
  styleUrls: ['./message-sidebaradmin.component.scss']
})
export class MessageSidebaradminComponent implements OnInit {
  options: string[];
  show:Boolean;
  public active:string;
  constructor(private router:Router) { 
  this.active = this.router.url;
  }
  ngOnInit(): void {
  }
  open(){
    this.show = !this.show;
  }
}
