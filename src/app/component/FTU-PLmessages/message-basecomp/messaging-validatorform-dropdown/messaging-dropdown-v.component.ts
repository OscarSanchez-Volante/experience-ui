import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-messaging-dropdown-v',
  templateUrl: './messaging-dropdown-v.component.html',
  styleUrls: ['./messaging-dropdown-v.component.scss']
})
export class MessagingDropdownVComponent implements OnInit {

  constructor(private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
  }
  nextroute(event: Event): void {
    this.router.navigate(['/ftu-messsage-api/'+(event.target as HTMLInputElement).value]);
  }
}
