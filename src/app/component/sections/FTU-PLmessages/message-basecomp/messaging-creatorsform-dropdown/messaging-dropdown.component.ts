import { Component, Input, OnInit } from '@angular/core';
import {Router } from '@angular/router';

@Component({
  selector: 'app-messaging-dropdown',
  templateUrl: './messaging-dropdown.component.html',
  styleUrls: ['./messaging-dropdown.component.scss']
})
export class MessagingDropdownComponent implements OnInit {
  @Input() data;
  @Input() active;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
 
  nextroute(value:any){
    this.router.navigate(['/ftuMesssageAPI/'+value.value]);
    this.router.navigate(['/ftuMesssageAPI/'+value.value]);
    this.router.navigate(['/ftuMesssageAPI/'+value.value]);
  }
}
