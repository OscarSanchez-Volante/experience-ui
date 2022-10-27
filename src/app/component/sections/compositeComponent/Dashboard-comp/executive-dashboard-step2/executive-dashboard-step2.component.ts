import { Component, OnInit,ViewEncapsulation,Input} from '@angular/core';

@Component({
  selector: 'app-executive-dashboard-step2',
  templateUrl: './executive-dashboard-step2.component.html',
  styleUrls: ['./executive-dashboard-step2.component.scss'],
    encapsulation:ViewEncapsulation.None

})
export class ExecutiveDashboardStep2Component implements OnInit {

  @Input() active;
  options:any; 
  Horizontalstackbar1:any;
  Horizontalstackbar2:any;
  optionsLinechart:any;
  optionscandlestick5:any;
  optionscandlestick1:any;
  optionscandlestick2:any;
  optionscandlestick3:any;
  optionscandlestick4:any;
data:any;


public railTitle= (sessionStorage.railTitle);
constructor() { }

ngOnInit(): void {
  this.optionscandlestick1 ={
    tooltip: {
      trigger: 'item',
      axisPointer: {
        type: 'shadow'
      }
    },
    grid: {
      top: '10%',
      bottom:'-10%'
    },
    xAxis: {
        splitArea: {
        show: false
      },
      splitLine: {
        show: false
      },
      axisLabel:{
        show:false
      },
      axisLine:{
        show:false
      },
      axisTick:{
        show:false
      },
      data: ['2017-10-24', '2017-10-25']
      
    },
    yAxis: {
        splitArea: {
        show: false
      },
      splitLine: {
        show: true,
        lineStyle:{
          color:'#d7d9de'
        }
      },
      axisLine:{
        show:false
      },
      axisTick:{
        show:false
      },
      axisLabel:{
        show:true,
        fontWeight:"bold"
      }
    },
    series: [
      {
        type: 'candlestick',
        data: [
          [20, 34, 10, 38]
        ],
        itemStyle:{
          color:"#ffe8e0",
          borderColor:"#ff8a65"
        }
      }
    ]
  }
  this.optionscandlestick2 ={
    tooltip: {
      trigger: 'item',
      axisPointer: {
        type: 'shadow'
      }
    },
    grid: {
      top: '10%',
      bottom:'-10%'
    },
    xAxis: {
        splitArea: {
        show: false
      },
      splitLine: {
        show: false
      },
      axisLabel:{
        show:false
      },
      axisLine:{
        show:false
      },
      axisTick:{
        show:false
      },
      data: ['2017-10-24', '2017-10-25']
      
    },
    yAxis: {
        splitArea: {
        show: false
      },
      splitLine: {
        show: true,
        lineStyle:{
          color:'#d7d9de'
        }
      },
      axisLine:{
        show:false
      },
      axisTick:{
        show:false
      },
      axisLabel:{
        show:true,
        fontWeight:"bold"
      }
    },
    series: [
      {
        type: 'candlestick',
        data: [
          [20, 34, 16, 38]
        ],
        itemStyle:{
          color:"#f1e1f4",
          borderColor:"#ba68c8"
        }
      }
    ]
  }
  this.optionscandlestick3 ={
    tooltip: {
      trigger: 'item',
      axisPointer: {
        type: 'shadow'
      }
    },
    grid: {
      top: '10%',
      bottom:'-10%'
    },
    xAxis: {
        splitArea: {
        show: false
      },
      splitLine: {
        show: false
      },
      axisLabel:{
        show:false
      },
      axisLine:{
        show:false
      },
      axisTick:{
        show:false
      },
      data: ['2017-10-24', '2017-10-25']
      
    },
    yAxis: {
        splitArea: {
        show: false
      },
      splitLine: {
        show: true,
        lineStyle:{
          color:'#d7d9de'
        }
      },
      axisLine:{
        show:false
      },
      axisTick:{
        show:false
      },
      axisLabel:{
        show:true,
        fontWeight:"bold"
      }
    },
    series: [
      {
        type: 'candlestick',
        data: [
          [20, 34, 10, 35]
        ],
        itemStyle:{
          color:"#d3eaf6",
          borderColor:"#2497d4"
        }
      }
    ]
  }
  this.optionscandlestick4 ={
    tooltip: {
      trigger: 'item',
      axisPointer: {
        type: 'shadow'
      }
    },
    grid: {
      top: '10%',
      bottom:'-10%'
    },
    xAxis: {
        splitArea: {
        show: false
      },
      splitLine: {
        show: false
      },
      axisLabel:{
        show:false
      },
      axisLine:{
        show:false
      },
      axisTick:{
        show:false
      },
      data: ['2017-10-24', '2017-10-25']
      
    },
    yAxis: {
        splitArea: {
        show: false
      },
      splitLine: {
        show: true,
        lineStyle:{
          color:'#d7d9de'
        }
      },
      axisLine:{
        show:false
      },
      axisTick:{
        show:false
      },
      axisLabel:{
        show:true,
        fontWeight:"bold"
      }
    },
    series: [
      {
        type: 'candlestick',
        data: [
          [20, 24, 10, 38]
        ],
        itemStyle:{
          color:"#fde2ec",
          borderColor:"#f36d9e"
        }
      }
    ]
  }
  this.optionscandlestick5 ={
    tooltip: {
      trigger: 'item',
      axisPointer: {
        type: 'shadow'
      }
    },
    grid: {
      top: '10%',
      bottom:'-10%'
    },
    xAxis: {
        splitArea: {
        show: false
      },
      splitLine: {
        show: false
      },
      axisLabel:{
        show:false
      },
      axisLine:{
        show:false
      },
      axisTick:{
        show:false
      },
      data: ['2017-10-24', '2017-10-25']
      
    },
    yAxis: {
        splitArea: {
        show: false
      },
      splitLine: {
        show: true,
        lineStyle:{
          color:'#d7d9de'
        }
      },
      axisLine:{
        show:false
      },
      axisTick:{
        show:false
      },
      axisLabel:{
        show:true,
        fontWeight:"bold"
      }
    },
    series: [
      {
        type: 'candlestick',
        data: [
          [10, 34, 10, 40]
        ],
        itemStyle:{
          color:"#e2f2fe",
          borderColor:"#6ebcfa"
        }
      }
    ]
  }
  this.Horizontalstackbar1 ={
    dataset: {
      source: [
        ['score', 'amount', 'product'],
        [80.3, 58212, 'Ameris Bancorp'],
        [10.1, 78254, 'Alley Financial'],
        [34.4, 41032, 'ANZ Bank'],
        [60.1, 50755, 'Alior Bank'],
        [100.7, 57145, 'Bank DKI'],
      ]
    },
    grid: { containLabel: true,
      top:'15%',
      bottom:'0%'
     },
    xAxis: {     
      splitArea: {
          show: false
        },
        splitLine: {
          show: false
        },
        axisLabel:{
          show:false
        },
        axisLine:{
          show:false
        },
        axisTick:{
          show:false
        }, },
    yAxis: { type: 'category',
         splitArea: {
          show: false
        },
        splitLine: {
          show: false
        },
        axisLabel:{
          show:true,
          fontWeight:"bold"
        },
        axisLine:{
          show:false
        },
        axisTick:{
          show:false
        },},
    visualMap: {
      show:false,
      orient: 'horizontal',
      left: 'center',
      min: 10,
      max: 100,
      text: ['High Score', 'Low Score'],
      dimension: 0,
      inRange: {
        color: ['#6ebcfa','#f36d9e', '#ba68c8','#2497d4','#ff8a65']
      }
    },
    series: [
      {
        type: 'bar',
          label: {
          position: 'right',
          show: true,
          fontWeight:"bold",
          color:"#000000"
        },
        encode: {
          x: 'amount',
          y: 'product'
        }
      }
    ]
  }
  this.Horizontalstackbar2 ={
    dataset: {
      source: [
        ['score', 'amount', 'product'],
        [80.3, 58212, 'Autonomy corp.'],
        [10.1, 78254, 'Bracknell corp.'],
        [34.4, 41032, 'City view Ltd.'],
        [60.1, 50755, 'Creo Inc.'],
        [100.7, 57145, 'Elscint Ltd.'],
      ]
    },
    grid: { containLabel: true,
      top:'15%',
      bottom:'0%'
     },
    xAxis: {     
      splitArea: {
          show: false
        },
        splitLine: {
          show: false
        },
        axisLabel:{
          show:false
        },
        axisLine:{
          show:false
        },
        axisTick:{
          show:false
        }, },
    yAxis: { type: 'category',
         splitArea: {
          show: false
        },
        splitLine: {
          show: false
        },
        axisLabel:{
          show:true,
          fontWeight:"bold"
        },
        axisLine:{
          show:false
        },
        axisTick:{
          show:false
        }
      },
    visualMap: {
      show:false,
      orient: 'horizontal',
      left: 'center',
      min: 10,
      max: 100,
      text: ['High Score', 'Low Score'],
      dimension: 0,
      inRange: {
        color: ['#6ebcfa','#f36d9e', '#ba68c8','#2497d4','#ff8a65']
      }
    },
    series: [
      {
        type: 'bar',
          label: {
          position: 'right',
          show: true,
          fontWeight:"bold",
          color:"#000000"
        },
        encode: {
          x: 'amount',
          y: 'product'
        }
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
