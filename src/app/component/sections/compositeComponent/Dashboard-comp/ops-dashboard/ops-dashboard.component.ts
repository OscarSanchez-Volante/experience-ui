import { Component, OnInit,ViewEncapsulation,Input,Output,EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-ops-dashboard',
  templateUrl: './ops-dashboard.component.html',
  styleUrls: ['./ops-dashboard.component.scss'],
  encapsulation:ViewEncapsulation.None

})
export class OpsDashboardComponent implements OnInit {
  @Output() chartEvent: EventEmitter<any> = new EventEmitter<any>(); 
  @Input() active;
    options:any; 
    optionsLinechart:any;
    optionsdoughnutops:any;
  options1:any;
  options2:any;
  options3:any;
  data:any;
  data1:any;
  data2:any;
  data3:any;
chartType:string;
  public railTitle= (sessionStorage.railTitle);
  constructor() { }
  chartEmit(data:string){
    this.chartType=data;
   }
   
  ngOnInit(): void {
    
    this.optionsLinechart = {
      xAxis: {
        type: 'category',
        boundaryGap: false,
        axisLine:{
          show:false,
          onZero:false
        },
        axisLabel:{
          show:true,
          fontWeight:"bold"
        },
        axisTick:{
          show:false
        },
          splitLine:{
          show:true
        },
      
        data: ['JAN', 'FEB', 'MAR','APR','MAY'],
      },
      yAxis: {
        type: 'value',
        axisLine:{
          show:false,
          onZero:false,
        },
        axisTick:{
          show:false
        },
        splitLine:{
          show:false
        },
        axisLabel:{
          show:true,
          fontWeight:"bold"
        },
      },
      series: [ 
        {
        name: 'Customer Credit Transfer',
          data: [  15,10,15,10,15,8,16,6],
          type: 'line',
           color:'#6dd400',
              emphasis: {
                focus: 'series'
              },
          smooth: true
        },
         {
        name: 'Payment Returns',
          data: [  10,11,8,13,7,4,5,19],
          type: 'line',
          color:'#858fd4',
              emphasis: {
                focus: 'series'
              },
          smooth: true
        }, 
        {
          name: 'Liquidity Management Transfer',
          data: [ 6,15,10,15,8,16,6,9],
          type: 'line',
            color:'#fab212',
              emphasis: {
                focus: 'series'
              },
          smooth: true
        },
        {
          name: 'Request for Payments',
          data: [ 11,15,3,9,4,6,2,10],
          type: 'line',
            color:'#2497d4',
              
              emphasis: {
                focus: 'series'
              },
          smooth: true
        },
       
        
      ]
    }
 
   this.optionsdoughnutops = {
    tooltip: {
      trigger: 'item'
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius:  ['40%', '60%'],
        avoidLabelOverlap: false,   
        label: {
          show: true,
          fontWeight: 'bold',
          position: 'left'
        },
        emphasis: {
          label: {
            show: true,
            fontSize: '12',
          }
        },
        labelLine: {
          show: false
        },
        data: [
          { value: 1048, name: 'Fednow',  itemStyle: {color: '#2497d4'} },
          { value: 735, name: 'TCH-RTP', itemStyle: {color: '#858fd4'} },
          { value: 580, name: 'Fedwire',itemStyle: {color: '#6dd400'} },
          { value: 280, name: 'SEPA Inst CT' ,itemStyle: {color: '#fab212'} },
        
        ]
      }
    ]
  }
  }

  
 

  selectActive(index){
  
    this.active=this.data[index].name;
    this.data.forEach(element => {
      if(element.name==this.active){
         element.status="pending";
      }
      else{
         element.status="initial";
      }
    });
    
   }
   


}
