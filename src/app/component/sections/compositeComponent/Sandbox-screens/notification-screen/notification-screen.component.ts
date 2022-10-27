import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification-screen',
  templateUrl: './notification-screen.component.html',
  styleUrls: ['./notification-screen.component.scss']
})
export class NotificationScreenComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public tableNotificationHead=[{
		"label": "Transactions",
		"fieldName": "Transactions"
	}, {
		"label": "Category",
		"fieldName": "Category"
	}, 
  {
		"label": "Criteria",
		"fieldName": "Criteria"
	},
  {
		"label": "Severity",
		"fieldName": "Severity"
	}, 
  {
		"label": "Timestamp",
		"fieldName": "Timestamp"
	},
];
  public tableNotificationValues=[{
    "Transactions": "Repairs",
    "Category": "Payments",
    "Criteria":"Duplicate>10,000>Status=Waiting",
    "Severity":"High",
    "Timestamp":"2022-08-15 23:00:00:00"
    
  },
  {
    "Transactions": "Oversight",
    "Category": "Payments",
    "Criteria":"Hold>1,000>Status=Pending",
    "Severity":"Medium",
    "Timestamp":"2022-08-15 23:00:00:00"
    
  },
  {
    "Transactions": "Oversight",
    "Category": "Payments",
    "Criteria":"Approval>1000,000>Status=Complete",
    "Severity":"Info",
    "Timestamp":"2022-08-15 23:00:00:00"

   
  }, 
]
}
