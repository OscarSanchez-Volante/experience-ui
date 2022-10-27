import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';

@Component({
  selector: 'app-sandbox-nodatascreen',
  templateUrl: './sandbox-nodatascreen.component.html',
  styleUrls: ['./sandbox-nodatascreen.component.scss']
})
export class SandboxNodatascreenComponent implements OnInit {

  public tableHead2=[{
		"label": "ID",
		"fieldName": "ID"
	}, {
		"label": "Amount",
		"fieldName": "Amount"
	}, {
		"label": "Currency",
		"fieldName": "Currency"
	}, {
		"label": "Source",
		"fieldName": "Source"
	}, {
		"label": "Destination",
		"fieldName": "Destination"
	}, {
		"label": "Transaction Date",
		"fieldName": "Transaction Date"
	},{
		"label": "Status",
		"fieldName": "Status"
	}];
public railTitle= (sessionStorage.railTitle); 
public dropDownData: Data[]=[{"name":"one","status":"pending","id":"1"},{"name":"two","status":"initial","id":"2"},{"name":"three","status":"initial","id":"3"}]
public contain = {
  image: "lock-image2.png",
  title: "No Data",
  description: "Create your first transaction simulation.",
  route :"ftuPaymentRail-14.2"
  }
  constructor() { }

  ngOnInit(): void {
	
 
  
}

}
