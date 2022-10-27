import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manual-reportscreen',
  templateUrl: './manual-reportscreen.component.html',
  styleUrls: ['./manual-reportscreen.component.scss']
})
export class ManualReportscreenComponent implements OnInit {

  public tableHead2=[{
		"label": "Name",
		"fieldName": "Name"
	}, {
		"label": "Frequency",
		"fieldName": "Frequency"
	}, {
		"label": "Date",
		"fieldName": "Date"
	},
  {
		"label": "Created By",
		"fieldName": "CreatedBy"
	},
  {
		"label": "Expires",
		"fieldName": "Expires"
	},
  {
		"label": "Status",
		"fieldName": "Status"
	}, {
		"label": "Download",
		"fieldName": "Download"
	},];

  public tableValues2=[{
    "Name": "Report one",
    "Frequency": "SOD",
    "Date": "2022-02-15 00:00:00",
    "CreatedBy" :"Frank Giles",
    "Expires": "-",
    "Status": "Scheduled",
    
    
    
  },
  {
    "Name": "Report Two ",
    "Frequency": "SOD",
    "Date": "2022-02-15 00:00:00",
    "CreatedBy" :"Angela Warren",
    "Expires": "25 Days",
    "Status": "Complete",
    
    
  },
  {
    "Name": "Report Three",
    "Frequency": "EOD",
    "Date": "2022-02-15 00:00:00",
    "CreatedBy" :"Laura Albeton",
    "Expires": "20 Days",
    "Status": "Complete",
    
   
  },
 
  
 
]
  constructor() { }
 

  ngOnInit(): void {
  }

}
