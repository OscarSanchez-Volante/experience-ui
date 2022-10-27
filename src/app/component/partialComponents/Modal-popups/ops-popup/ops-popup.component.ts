import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-ops-popup',
  templateUrl: './ops-popup.component.html',
  styleUrls: ['./ops-popup.component.scss']
})
export class OpsPopupComponent implements OnInit {
  value: string;

  optionsOps: any;
  constructor() { }

  ngOnInit(): void {
   
  
 this.optionsOps = {
          legend: {
            show: true,
            fontWeight:"bold",
            color:'#a3a3a3'
          },
          tooltip: {},
          grid: {
            left: '5%',
            right: '0%',
          },
          dataset: {
            dimensions: ['product', 'Accept', 'Ignore'],
            source: [
              { product: '27 june', Accept : 43.3, Ignore: 35.8},
             
              { product: '29 june',Accept : 13.3, Ignore: 25.8},
             
              { product: '1 july',Accept : 43.3, Ignore: 25.8},
            
              { product: '3 july',Accept : 23.3, Ignore: 35.8}
    
            ]
          },
          xAxis: { type: 'category',
          axisLine:{
            show:false,
          },
          axisTick:{
            show:false
          },
          axisLabel:{
            show:true,
            fontWeight:"bold"
          },
        },
          yAxis: {
            axisLine:{
              show:false,
            },
            axisTick:{
              show:false
            },
            axisLabel:{
              show:true,
              showMaxLabel:true,
              fontWeight:"bold",
              color:'#a3a3a3'
            },      
          },
          series: [{ type: 'bar',          
          color:'#f36d9e',
        }, { type: 'bar' ,
        color:' #89dc32',
       
    }]
        };
         
      }
  public tableOpsHead=[{
		"label": "#",
		"fieldName": "#"
	}, {
		"label": "ID",
		"fieldName": "ID"
	}, 
  {
		"label": "Office",
		"fieldName": "Office"
	},
  {
		"label": "Amount",
		"fieldName": "Amount"
	}, 
  {
		"label": "Currency",
		"fieldName": "Currency"
	},
];
  public tableOpsValues=[{
    "#": "1",
    "ID": "000-000-000-000",
    "Office":"XYZ, Inc. ",
    "Amount":"1,000,000",
    "Currency":"USD"
    
  },
  {
    "#": "2",
    "ID": "000-000-000-000",
    "Office":"XYZ, Inc. ",
    "Amount":"1,000,000",
    "Currency":"USD"
    
  },
  {
    "#": "3",
    "ID": "000-000-000-000",
    "Office":"XYZ, Inc. ",
    "Amount":"1,000,000",
    "Currency":"USD"

   
  }, 
  {
    "#": "4",
    "ID": "000-000-000-000",
    "Office":"XYZ, Inc. ",
    "Amount":"1,000,000",
    "Currency":"USD"

   
  }, 
  {
    "#": "5",
    "ID": "000-000-000-000",
    "Office":"XYZ, Inc. ",
    "Amount":"1,000,000",
    "Currency":"USD"

   
  }, 
  {
    "#": "6",
    "ID": "000-000-000-000",
    "Office":"XYZ, Inc. ",
    "Amount":"1,000,000",
    "Currency":"USD"

   
  }, 
  {
    "#": "7",
    "ID": "000-000-000-000",
    "Office":"XYZ, Inc. ",
    "Amount":"1,000,000",
    "Currency":"USD"

   
  }, 
  {
    "#": "8",
    "ID": "000-000-000-000",
    "Office":"XYZ, Inc. ",
    "Amount":"1,000,000",
    "Currency":"USD"

   
  }, 
  {
    "#": "9",
    "ID": "000-000-000-000",
    "Office":"XYZ, Inc. ",
    "Amount":"1,000,000",
    "Currency":"USD"

   
  }, 

]
}
