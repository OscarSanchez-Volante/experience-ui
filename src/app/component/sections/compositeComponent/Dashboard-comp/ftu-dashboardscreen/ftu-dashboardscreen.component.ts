import { Component, OnInit,ViewEncapsulation,Input} from '@angular/core';
import * as introJs from 'intro.js/intro.js';

@Component({
  selector: 'app-ftu-dashboardscreen',
  templateUrl: './ftu-dashboardscreen.component.html',
  styleUrls: ['./ftu-dashboardscreen.component.scss'],
  encapsulation:ViewEncapsulation.None

})
export class FtuDashboardscreenComponent implements OnInit {
  optionsdoughnutftu:any;
  optionsdoughnutftu1:any;
  optionslineBar:any;
  optionslineBar1:any;
  @Input() active;
  introJS = introJs();
  data: any;
  date: Date;
  constructor( ) {
    setInterval(() => {
      this.date = new Date()
    }, 1000)
   }
   public chartItem:any;


  ngOnInit(): void {
var storedArray = JSON.parse(sessionStorage.getItem("selectedRails"));
this.chartItem=storedArray;

setTimeout(()=>{
      this.introJS
        .setOptions({
        steps: [
        {
          element: '#step1-li',
          intro: 'Add your new rails and set up your dashboard.',
          position: 'top',
          showProgress: false,
          bullets: false
        },
        {
          element: '#step2-li',
          intro: "Add new chart to set up your dashboard.",
          position: 'right',
          showProgress: false,

        },
        {
          element: '#step3-li',
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

    this.optionsdoughnutftu = {
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
              fontSize: '11',
            }
          },
          labelLine: {
            show: false
          },
          data: [
            { value: 1048, name: 'Deposit to \n senders account',  itemStyle: {color: '#2497d4'} },
            { value: 735, name: 'Fed Funds Sold', itemStyle: {color: '#f36d9e'} },
            { value: 580, name: 'Customer Transfer',itemStyle: {color: '#6dd400'} },
            { value: 280, name: 'Bank Transfer' ,itemStyle: {color: '#fab212'} },
          
          ]
        }
      ]
    },

    this.optionsdoughnutftu1 = {
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
              fontSize: '11',
            }
          },
          labelLine: {
            show: false
          },
          data: [
            { value: 1048, name: 'Requests For \n Payment',  itemStyle: {color: '#2497d4'} },
            { value: 735, name: 'Customer Credit \n Transfer', itemStyle: {color: '#f36d9e'} },
            { value: 580, name: 'Bank Transfer ',itemStyle: {color: '#6dd400'} },
            { value: 280, name: 'Liquidity \n management Transfer' ,itemStyle: {color: '#fab212'} },
          
          ]
        }
      ]
    },
    this.optionslineBar={
    
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
    this.optionslineBar1={
    
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

