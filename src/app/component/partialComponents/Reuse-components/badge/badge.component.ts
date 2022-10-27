import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss']
})
export class BadgeComponent implements OnInit {


  constructor() {
  }


  @Input() count:number=0;
  bgcolor='red'
  actionName = 'inbox'
  

  ngOnInit(): void {
  
}

}
