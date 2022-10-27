import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';

@Component({
  selector: 'app-sandbox-screen1',
  templateUrl: './sandbox-screen1.component.html',
  styleUrls: ['./sandbox-screen1.component.scss']
})
export class SandboxScreen1Component implements OnInit {
	options:any;
	
  
	public tableHead2=[{
		"label": "ID",
		"fieldName": "ID"
	}, {	"label": "Rail",
	"fieldName": "Rail"
}, 
	{
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
	public tableValues2=[{
		"ID": "01",
		"Rail":"Fedwire",
		"Amount": "$12234334",
		"Currency": "USD",
		"Source": "P210420000000000000000002",
		"Destination": "Customer Credit Transfer",
		"Transaction Date": "08-08-2020 | 10:07:47.589",
		"Status": "Completed",
		"Expand":false,
		"Details":{"MOP":"OUT_US_TCH_RTP","PSA Code":"7765569996_Payment_VPH_ISOPACS008Channel","Original Payment Reference":"QUANKE6ESRR826OAVZDNZWXUUA9TARCAHKVY","Original Message Subfunction":"USA Branch","Received Date":"2021-04-21 | 03:05:36.331","Value Date":"2021-04-020"}
	  },
	
	  {
		"ID": "02",
		"Rail":"Fedwire",
		"Amount": "$12234334",
		"Currency": "USD",
		"Source": "Customer Credit Transfer",
		"Destination": "{Destination goes here}",
		"Transaction Date": "08-08-2020 | 10:07:47.589",
		"Status": "Completed",
		"Expand":false,
		"Details":{"MOP":"OUT_US_TCH_RTP","PSA Code":"7765569996_Payment_VPH_ISOPACS008Channel","Original Payment Reference":"QUANKE6ESRR826OAVZDNZWXUUA9TARCAHKVY","Original Message Subfunction":"USA Branch","Received Date":"2021-04-21 | 03:05:36.331","Value Date":"2021-04-020"}
	  },
	  {
		"ID": "03",
		"Rail":"TCH-RTP",
		"Amount": "$12234334",
		"Currency": "USD",
		"Source": "Customer Credit Transfer",
		"Destination": "{Destination goes here}",
		"Transaction Date": "08-08-2020 | 10:07:47.589",
		"Status": "Completed",
		"Expand":false,
		"Details":{"MOP":"OUT_US_TCH_RTP","PSA Code":"7765569996_Payment_VPH_ISOPACS008Channel","Original Payment Reference":"QUANKE6ESRR826OAVZDNZWXUUA9TARCAHKVY","Original Message Subfunction":"USA Branch","Received Date":"2021-04-21 | 03:05:36.331","Value Date":"2021-04-020"}
	  },
	  {
		"ID": "04",
		"Rail":"TCH-RTP",
		"Amount": "$12234334",
		"Currency": "USD",
		"Source": "Customer Credit Transfer",
		"Destination": "{Destination goes here}",
		"Transaction Date": "08-08-2020 | 10:07:47.589",
		"Status": "Completed",
		"Expand":false,
		"Details":{"MOP":"OUT_US_TCH_RTP","PSA Code":"7765569996_Payment_VPH_ISOPACS008Channel","Original Payment Reference":"QUANKE6ESRR826OAVZDNZWXUUA9TARCAHKVY","Original Message Subfunction":"USA Branch","Received Date":"2021-04-21 | 03:05:36.331","Value Date":"2021-04-020"}
	  },
	  {
		"ID": "05",
		"Rail":"TCH-RTP",
		"Amount": "$12234334",
		"Currency": "USD",
		"Source": "Customer Credit Transfer",
		"Destination": "{Destination goes here}",
		"Transaction Date": "08-08-2020 | 10:07:47.589",
		"Status": "Completed",
		"Expand":false,
		"Details":{"MOP":"OUT_US_TCH_RTP",
				   "PSA Code":"7765569996_Payment_VPH_ISOPACS008Channel",
				   "Original Payment Reference":"QUANKE6ESRR826OAVZDNZWXUUA9TARCAHKVY",
				   "Original Message Subfunction":"USA Branch",
				   "Received Date":"2021-04-21 | 03:05:36.331",
				   "Value Date":"2021-04-020"}
	  }
	 
	]
public dropDownData: Data[]=[{"name":"one","status":"pending","id":"1"},{"name":"two","status":"initial","id":"2"},{"name":"three","status":"initial","id":"3"}]

  constructor() { }

  ngOnInit(): void {
	this.options = {
		
		grid:{
			top:'20%',
			bottom:'10%',
			left:'13%'
			  },
		xAxis: {
		  type: 'category',
		  boundaryGap: false,
		  axisLabel:{
			show:false,
		  },
		  axisLine:{
			show:false
		  },
		  axisTick:{
			show:false
		  },
			splitLine:{
			show:true
		  },
		  data: ['Mon', 'Tue', 'Wed','Mon', 'Tue', 'Wed','Mon', 'Tue', 'Wed']
		},
		yAxis: {
			name: 'Last 30 days',
			nameTextStyle:{
				fontWeight:"bold"
					},
			type: 'value',
		  splitLine:{
			show:false
		  },
		  axisLabel:{
			fontWeight:"bold"
				},
		  axisLine:{
			show:false
		  },
		  axisTick:{
			show:false
		  },
		},
		series: [
		  {
			color:'#f06292',
			data: [20,45,30,90,50,10,78,38,60],
			type: 'line',
			smooth: true
		  }
		]
	  };
  }
 
}
