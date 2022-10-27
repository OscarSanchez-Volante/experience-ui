import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {

  constructor() { }
  public tableHead2=[{
		"label": "Name",
		"fieldName": "Name"
	}, {
		"label": "Type",
		"fieldName": "Type"
	}, {
		"label": "Status",
		"fieldName": "Status"
	},];
  public tableValues2=[{
    "Name": "Report One",
    "Type": "SOD",
    "Status": "Complete"
    
    
    
  },
  {
    "Name": "Report Two",
    "Type": "SOD",
    "Status": "Complete"
    
    
  },
  {
    "Name": "Report Three",
    "Type": "SOD",
    "Status": "Complete"
    
   
  },
  {
    "Name": "Report Four",
    "Type": "EOD",
    "Status": "Complete"
    
   
  },
  {
    "Name": "Report Five",
    "Type": "EOD",
    "Status": "Complete"
    
  
  },

  
 
]
public tableHead4=[
  {
  "label": "Name",
  "fieldName": "Name"
}, {
  "label": "Type",
  "fieldName": "Type"
}, {
  "label": "Status",
  "fieldName": "Status"
},
];

  ngOnInit(): void {
  }

}
