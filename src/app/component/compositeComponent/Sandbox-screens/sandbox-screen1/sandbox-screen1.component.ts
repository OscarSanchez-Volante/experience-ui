import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { JsonHttpService } from 'src/app/services/json-http/json-http.service';
import { map } from 'rxjs/operators'

@Component({
  selector: 'app-sandbox-screen1',
  templateUrl: './sandbox-screen1.component.html',
  styleUrls: ['./sandbox-screen1.component.scss']
})
export class SandboxScreen1Component implements OnInit {
	optionsStatus:any;
	optionsCurrencuy:any;
	optionsRails:any;
	optionsBanks:any;
	chartData:any;
  
	public tableHead2;
	public tableValues2;
public dropDownData: Data[]=[{"name":"one","status":"pending","id":"1"},{"name":"two","status":"initial","id":"2"},{"name":"three","status":"initial","id":"3"}]
	chartStatus: Object= {keys:[], values:[]} ;
	chartCurrencuy: Object= {keys:[], values:[]} ;
	chartRails: Object= {keys:[], values:[]} ;
	chartBanks: Object= {keys:[], values:[]} ;

  constructor(private jsonhttp:JsonHttpService) { }

  ngOnInit(): void {
	this.jsonhttp.getsandbox("assets/data/admin.json").subscribe(data => {
		this.tableHead2 = data['tableSandboxHead'];
		this.tableValues2 = data['tableSanboxValues'];
		this.chartData = data['chart'];
		if(this.chartData?.status.length){
		  this.chartStatus['keys']= this.chartData.status.map((obj) =>obj.name);
		  this.chartStatus['values']=this.chartData.status.map((obj) =>obj.count);
		  this.optionsStatus = this.chartInitial(this.chartStatus);
		}
		if(this.chartData?.currency.length){
			this.chartCurrencuy['keys']= this.chartData.currency.map((obj) =>obj.name);
			this.chartCurrencuy['values']=this.chartData.currency.map((obj) =>obj.count);
			this.optionsCurrencuy = this.chartInitial(this.chartCurrencuy);
		  }
		  if(this.chartData?.rails.length){
			this.chartRails['keys']= this.chartData.rails.map((obj) =>obj.name);
			this.chartRails['values']=this.chartData.rails.map((obj) =>obj.count);
			this.optionsRails = this.chartInitial(this.chartRails);
		  }
		  if(this.chartData?.banks.length){
			this.chartBanks['keys']= this.chartData.banks.map((obj) =>obj.name);
			this.chartBanks['values']=this.chartData.banks.map((obj) =>obj.count);
			this.optionsBanks = this.chartInitial(this.chartBanks);
		  }
		
	  })
	
  }
 chartInitial(dataChart){
	let chartOPtion = {
		
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
		  data: dataChart['keys']
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
			data: dataChart['values'],
			type: 'line',
			smooth: true
		  }
		]
	  };
	  return chartOPtion;
 }

}
