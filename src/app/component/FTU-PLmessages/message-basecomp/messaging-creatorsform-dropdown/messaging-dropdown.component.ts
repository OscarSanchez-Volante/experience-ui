import { Component, Input, OnInit } from '@angular/core';
import {Router } from '@angular/router';

@Component({
  selector: 'app-messaging-dropdown',
  templateUrl: './messaging-dropdown.component.html',
  styleUrls: ['./messaging-dropdown.component.scss']
})
export class MessagingDropdownComponent implements OnInit {
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  
  nextroute(event: Event): void {
    this.router.navigate(['/ftu-messsage-api/'+(event.target as HTMLInputElement).value]);
  }
}
