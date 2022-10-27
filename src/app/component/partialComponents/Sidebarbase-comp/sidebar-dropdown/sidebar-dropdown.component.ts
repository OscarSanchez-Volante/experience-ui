import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-sidebar-dropdown',
  templateUrl: './sidebar-dropdown.component.html',
  styleUrls: ['./sidebar-dropdown.component.scss']
})
export class SidebarDropdownComponent implements OnInit {
  @Input("data") data: any;

  constructor() { }
  public tableHead2=[{
		"label": "Product",
		"fieldName": "Product"
	}, {
		"label": "2021",
		"fieldName": "2021",
    "type": "input"
	}, {
		"label": "2022",
		"fieldName": "2022",
    "type": "input"
	}, {
		"label": "2023",
		"fieldName": "2023",
    "type": "input"
	},];
  public tableValues2=[{
    "Product": "Bank Transfer",
    "2021": "0,000",
    "2022": "0,000",
    "2023":  "0,000",
  },
  {
    "Product": "Check Same Day Settlement",
    "2021": "0,000",
    "2022": "0,000",
    "2023":  "0,000",
    
    
  },
  {
    "Product": "Customer Transfer Plus",
    "2021": "0,000",
    "2022": "0,000",
    "2023":  "0,000",
   
  },
  {
    "Product": "Customer Transfer",
    "2021": "0,000",
    "2022": "0,000",
    "2023":  "0,000",
    
   
  },
  {
    "Product": "Deposit to Senders Account",
    "2021": "0,000",
    "2022": "0,000",
    "2023":  "0,000",
  
  },
  {
    "Product": "Bank-to-Bank Drawdown Request ",
    "2021": "0,000",
    "2022": "0,000",
    "2023":  "0,000",
  
  },
  {
    "Product": "Customer/Corp. Drawdown Request",
    "2021": "0,000",
    "2022": "0,000",
    "2023":  "0,000",
  
  },
  {
    "Product": "Drawdown Payment",
    "2021": "0,000",
    "2022": "0,000",
    "2023":  "0,000",
  
  },
  {
    "Product": "Fed Funds Returned",
    "2021": "0,000",
    "2022": "0,000",
    "2023":  "0,000",
  
  },
  {
    "Product": "Fed Funds Sold",
    "2021": "0,000",
    "2022": "0,000",
    "2023":  "0,000",
  
  },
  {
    "Product": "Fed Funds Sold",
    "2021": "0,000",
    "2022": "0,000",
    "2023":  "0,000",
  
  },
  {
    "Product": "Service Message",
    "2021": "0,000",
    "2022": "0,000",
    "2023":  "0,000",
  
  }];
  ngOnInit(): void {
  }
  

}
