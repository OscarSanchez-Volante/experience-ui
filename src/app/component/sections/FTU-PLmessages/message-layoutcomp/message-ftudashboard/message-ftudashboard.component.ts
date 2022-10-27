import { Component, OnInit,ViewEncapsulation,Input,Output,EventEmitter  } from '@angular/core';
import * as introJs from 'intro.js/intro.js';

@Component({
  selector: 'app-message-ftudashboard',
  templateUrl: './message-ftudashboard.component.html',
  styleUrls: ['./message-ftudashboard.component.scss'],
  encapsulation:ViewEncapsulation.None

})
export class MessageFtudashboardComponent implements OnInit {

  optionslineBar2:any;
  optionslineBar3:any;
  optionsdoughnut4:any;
  optionsdoughnut5:any;
  optionsdoughnut6:any;
  data:any;
  data1:any;
  data2:any;
  data3:any;
  date: Date;

  @Input() active;
  introJS = introJs();
  constructor( ) {
    setInterval(() => {
      this.date = new Date()
    }, 1000)
   }
  
  ngOnInit(): void {

    
    setTimeout(()=>{
      this.introJS
        .setOptions({
        steps: [
        {
          element: '#step1-li',
          intro: 'Connect the messaging APIs and set up your dashboard.',
          position: 'top',
          showProgress: false,
          bullets: false
        },
        {
          element: '#step2-li',
          intro: "Add new request to set up your dashboard.",
          position: 'top',
          showProgress: false,

        }
      ],
      hidePrev: true,
      hideNext: false,
      showProgress: false,
      })
      .start();
    }, 500)


this.optionsdoughnut4 = {
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
          fontWeight: 'bold',
        }
      },
      labelLine: {
        show: false
      },
      data: [
        { value: 1048, name: 'BAHTNET',  itemStyle: {color: '#64b5f6'} },
        { value: 735, name: 'EURO1/STEP1', itemStyle: {color: '#81c784'} },
        { value: 580, name: 'FedNow',itemStyle: {color: '#f36d9e'} },
        { value: 280, name: 'CHAPS ISO' ,itemStyle: {color: '#fab212'} },
      
      ]
    }
  ]
};
this.optionsdoughnut5 = {
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
          fontWeight: 'bold',
        }
      },
      labelLine: {
        show: false
      },
      data: [
        { value: 1048, name: 'SWIFT ISO 20022 \n to SWIFT MT',  itemStyle: {color: '#64b5f6'} },
        { value: 735, name: 'SWIFT MT to SWIFT \n ISO 20022', itemStyle: {color: '#81c784'} },
        { value: 580, name: 'SAMOS ISO to \n SAMOS MT',itemStyle: {color: '#f36d9e'} },
       
      
      ]
    }
  ]
};
this.optionsdoughnut6 = {
  tooltip: {
    trigger: 'item'
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: ['40%', '60%'],
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
          fontWeight: 'bold',
        }
      },
      labelLine: {
        show: false
      },
      data: [
        { value: 1048, name: 'FedNow',  itemStyle: {color: '#64b5f6'} },
        { value: 735, name: 'SEPA', itemStyle: {color: '#81c784'} },
        { value: 580, name: 'AusPayNet ISO',itemStyle: {color: '#f36d9e'} },
        { value: 280, name: 'TARGET 2' ,itemStyle: {color: '#ba68c8'} },
    
      
      ]
    }
  ]
};

this.optionslineBar2={
    
  dataset: {
    source: [
      ['score', 'amount', 'product'],
      [1.22, 58212, 'FED NOW'],
      [560.4, 78254, 'TCH'],

    ]
  },
  grid: { containLabel: true,
    top:'30%',
    bottom:'20%'  },
  xAxis: {
   axisLabel:{
          show:false
        },
        axisTick:{
          show:false
        },
        axisLine:{
          show:false
        },
        boundaryGap: [0, 0.01] },
  yAxis: { type: 'category',
  axisLabel:{
    fontWeight:"bold",
  },
   splitLine:{
          show:false
        },
        axisTick:{
          show:false
        },
        axisLine:{
          show:false
        }, },
  visualMap: {
    show:false,
    min: 10,
    max: 100,
    text: ['High Score', 'Low Score'],
    dimension: 0,
    inRange: {
      color: ['#64b5f6', '#81c784', '#ffc84e','#ba68c8']
    }
  },
  series: [
    {
      type: 'bar',
      encode: {
        x: 'amount',
        y: 'product'
      }
    }
  ]
    },
    this.optionslineBar3={
    
      dataset: {
        source: [
          ['score', 'amount', 'product'],
          [1.22, 58212, 'EU'],
          [560.4, 78254, 'GB'],
          [19, 41032, 'CAD'],
          [45.9, 12755, 'USD'],
        ]
      },
      grid: { containLabel: true,
        top:'0%',
        bottom:'20%'  },
      xAxis: {
       axisLabel:{
              show:false
            },
            axisTick:{
              show:false
            },
            axisLine:{
              show:false
            },
            boundaryGap: [0, 0.01] },
      yAxis: { type: 'category',
      axisLabel:{
        fontWeight:"bold",
      },
       splitLine:{
              show:false
            },
            axisTick:{
              show:false
            },
            axisLine:{
              show:false
            }, },
      visualMap: {
        show:false,
        min: 10,
        max: 100,
        text: ['High Score', 'Low Score'],
        dimension: 0,
        inRange: {
          color: ['#64b5f6', '#81c784', '#ffc84e','#ba68c8']
        }
      },
      series: [
        {
          type: 'bar',
          encode: {
            x: 'amount',
            y: 'product'
          }
        }
      ]
        }
  }
  
  
  public tableHead2=[{
		"label": "Name",
		"fieldName": "Name"
	}, {
		"label": "Frequency",
		"fieldName": "Frequency"
	}, {
		"label": "Date ",
		"fieldName": "Date "
	},
  {
		"label": "Created By ",
		"fieldName": "CreatedBy"
	}, 
  {
		"label": "Expires ",
		"fieldName": "Expires"
	},  {
		"label": "Download",
		"fieldName": "Download"
	},];
  public tableValues2=[{
    "Name": "Sample Report",
    "Frequency": "EOD",
    "Date ": "2016-01-01T00:00:00",
    "CreatedBy":"Team Volante",
    "Expires":"--"
    
  },
  {
    "Name": "Report One",
    "Frequency": "SOD",
    "Date ": "2016-01-01T00:00:00",
    "CreatedBy":"Frank Giles",
    "Expires":"29 days"
    
  },
  {
    "Name": "Report Two",
    "Frequency": "SOD",
    "Date ": "2016-01-01T00:00:00",
    "CreatedBy":"Angela Warren",
    "Expires":"25 days"

   
  },
  {
    "Name": "Report Two",
    "Frequency": "SOD",
    "Date ": "2016-01-01T00:00:00",
    "CreatedBy":"Team Volante",
    "Expires":"25 days"
   
  },
  {
    "Name": "Sample Report ",
    "Frequency": "SOD",
    "Date ": "2016-01-01T00:00:00",
    "CreatedBy":"Team Volante",
    "Expires":"25 days"   
  
  },
  {
    "Name": "Sample Report",
    "Frequency": "SOD",
    "Date ": "2016-01-01T00:00:00",
    "CreatedBy":"Team Volante",
    "Expires":"25 days"
  
  },
  {
    "Name": "Sample Report",
    "Frequency": "SOD",
    "Date ": "2016-01-01T00:00:00",
    "CreatedBy":"Team Volante",
    "Expires":"25 days"   
  
  },
 
  
 
]
 
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
