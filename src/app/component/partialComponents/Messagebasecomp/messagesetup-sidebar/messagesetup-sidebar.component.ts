import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-messagesetup-sidebar',
  templateUrl: './messagesetup-sidebar.component.html',
  styleUrls: ['./messagesetup-sidebar.component.scss']
})
export class MessagesetupSidebarComponent implements OnInit {

  @Input("data") data: any;

  constructor() { }
  public tableHead2=[{
		"label": "Period",
		"fieldName": "period"
	}, {
		"label": "Message Volume / Month",
		"fieldName": "message",
    "type":"input"
	},
 ];
  public tableValues2=[{
    "period": "2022",
    "message": "",
   
  },
 
  ];
  ngOnInit(): void {
  }

}
