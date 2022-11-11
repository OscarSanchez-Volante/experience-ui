import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalVariables } from 'src/app/utilities/globals-variables';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public currentUrl;

  constructor(private router: Router,public global_vars:GlobalVariables) { 
  }
  
  ngOnInit(): void {
 //   this.username=this.global_vars.currentUser.userName;
  //  this.userlastname=this.global_vars.currentUser.userLastName;
    //console.log(this.username);
    this.currentUrl = this.router.url;
  }

  logout(){
    localStorage.clear();
    this.router.navigate(['/']);
  }



}
