import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-messaging-dropdown-t',
  templateUrl: './messaging-dropdown-t.component.html',
  styleUrls: ['./messaging-dropdown-t.component.scss']
})
export class MessagingDropdownTComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
 
  nextroute(event: Event): void {
    this.router.navigate(['/ftu-messsage-api/'+(event.target as HTMLInputElement).value]);
  }
}
