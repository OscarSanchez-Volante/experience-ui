import { Component, OnInit,ViewEncapsulation,Input,Output,EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-executive-dashboard',
  templateUrl: './executive-dashboard.component.html',
  styleUrls: ['./executive-dashboard.component.scss'],
  encapsulation:ViewEncapsulation.None

})
export class ExecutiveDashboardComponent implements OnInit {
  @Input() active;
  options:any; 
  optionsstackbar:any;
  optionsdoughnutexecutive:any;
  optionsLinechart:any;
  optionsmidbar:any
data:any;


public railTitle= (sessionStorage.railTitle);
constructor() { }

ngOnInit(): void {
  this.optionsstackbar ={
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    legend: {
      show:false,
      textStyle:{
        fontSize:14,
        fontWeight:"bold",
      }
    },
    grid: {
      left: '0%',
      right: '3%',
      bottom: '0%',
      containLabel: true
    },
    xAxis: {
      axisLabel:{
        fontWeight:"bold"
            },
      type: 'value',
      axisTick:{
        show:false
      },
      axisLine:{
        show:false,
        onZero:false
      },
    },
    yAxis: {
      axisLabel:{
        fontWeight:"bold"
            },
      type: 'category',
      axisTick:{
        show:false
      },
      axisLine:{
        show:false,
        onZero:false
      },
      data: [  'SEPA INST', 'TCH-RTP','Fedwire','Fednow']
    },
    series: [
      {
        name: 'Currency',
        type: 'bar',
        stack: 'total',
        color: "#009ada",
        label: {
          show: false,
        },
        emphasis: {
          focus: 'series',
         
        },
        data: [320, 302, 301, 334, 390, 330, 320]
      },
      {
        name: 'Transaction',
        type: 'bar',
        stack: 'total',
        color: "#fab212",
        label: {
          show: false
        },
        emphasis: {
          focus: 'series'
        },
        data: [120, 132, 101, 134, 90, 230, 210]
      },
      {
        name: 'Payment',
        type: 'bar',
        stack: 'total',
        color: "#858fd4",
        label: {
          show: false
        },
        emphasis: {
          focus: 'series'
        },
        data: [220, 182, 191, 234, 290, 330, 310]
      },
      {
        name: 'Operations',
        type: 'bar',
        stack: 'total',
        color: "#f36d9e",
        label: {
          show: false
        },
        emphasis: {
          focus: 'series'
        },
        data: [150, 212, 201, 154, 190, 330, 410]
      },
    
    ]
  }
  this.optionsmidbar ={
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    legend: {
      textStyle:{
        fontSize:14,
        fontWeight:"bold",
      },
      data: [ 'Currency', 'Transactions']
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'value',
        axisLabel:{
          fontWeight:"bold"
              },
              axisTick:{
                show:false
              },
              axisLine:{
                show:false,
                color:'#b3c4d8',
                onZero:false
              },
      }
    ],
    yAxis: [
      {
        type: 'category',
        axisLabel:{
          fontWeight:"bold"
              },
        axisTick: {
          show: false
        },
        
        data: ['SEPA INST CT', 'TCH-RTP','Fedwire','Fednow']
      }
    ],
    series: [
     
      {
        name: 'Transactions',
        type: 'bar',
        stack: 'Total',
        color: "#009ada",
        label: {
          show: false
        },
        emphasis: {
          focus: 'series'
        },
        data: [320, 302, 341, 374]
      },
      {
        name: 'Currency',
        type: 'bar',
        stack: 'Total',
        color: "#fab212",
        label: {
          show: false,
          position: 'left'
        },
        emphasis: {
          focus: 'series'
        },
        data: [-120, -132, -101, -134]
      }
    ]
  }
  this.optionsLinechart = {
    legend: {
     show:true,
    },
    xAxis: {
      type: 'category',
      axisLine:{
        show:false,
        onZero:false
      },
      boundaryGap: false,

      splitLine: {
        show: true
      },
      axisLabel:{
        fontWeight:"bold"
            },
            
      data: ['JAN', 'FEB', 'MAR','APR','MAY','JUN'],
      axisTick:{
        show:false
      }
    },
    yAxis: {
      type: 'value',
      axisLine:{
        show:false,
        onZero:false,
      },
      axisLabel:{
        fontWeight:"bold"
            },
      axisTick:{
        show:false
      },
      splitLine: {
        show: false
      },
      boundaryGap: [0, '60%'],
    },
    series: [
      {
      name: 'Customer Credit Transfer',
        data: [  1000,1200,500,700,250,340,300,400,600,200],
        type: 'line',
         color:'#6dd400',
            emphasis: {
              focus: 'series'
            },
        smooth: true
      },
       {
      name: 'Payment Returns',
        data: [  500,1100,800,1300,700,400,550,190,400,200],
        type: 'line',
        color:'#858fd4',
            emphasis: {
              focus: 'series'
            },
        smooth: true
      }, 
      {
        name: 'Liquidity Management Transfer',
        data: [ 1200,400,800,560,950,270,600,300,490,240],
        type: 'line',
          color:'#fab212',
            emphasis: {
              focus: 'series'
            },
        smooth: true
      },
      {
        name: 'Request for Payments',
        data: [ 1500,550,630,900,400,620,250,1000,100,203],
        type: 'line',
          color:'#2497d4',
            
            emphasis: {
              focus: 'series'
            },
        smooth: true
      },
     
      
    ]
  }
  this.optionsdoughnutexecutive = {
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
  };
 
   
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
