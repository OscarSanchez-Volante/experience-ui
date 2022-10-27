import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
@Component({
  selector: 'app-adminsidebar-sandbox',
  templateUrl: './adminsidebar-sandbox.component.html',
  styleUrls: ['./adminsidebar-sandbox.component.scss']
})
export class AdminsidebarSandboxComponent implements OnInit {
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
