import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-messaging-dropdown-t',
  templateUrl: './messaging-dropdown-t.component.html',
  styleUrls: ['./messaging-dropdown-t.component.scss']
})
export class MessagingDropdownTComponent implements OnInit {

  constructor(private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
  }
  nextroute(value:any){
    this.router.navigate(['/ftuMesssageAPI/'+value.value]);
    this.router.navigate(['/ftuMesssageAPI/'+value.value]);
    this.router.navigate(['/ftuMesssageAPI/'+value.value]);
  }
}
