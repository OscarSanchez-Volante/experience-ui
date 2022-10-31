import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-scatter-chart',
  templateUrl: './scatter-chart.component.html',
  styleUrls: ['./scatter-chart.component.scss']
})
export class ScatterChartComponent implements OnInit {
  @Input() data:any;
 scatterChart:any;

  constructor() { }

  ngOnInit(): void {
const hours = [

  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
];

const days = [
  'Saturday', 'Friday', 'Thursday',
  'Wednesday', 'Tuesday', 'Monday', 'Sunday'
];

const data = this.data
  .map(function (item) {
      return [item[1], item[0], item[2]];
  });

this.scatterChart = {

tooltip: {
  position: 'top',
  formatter: function (params: any) {
    return (
      params.value[2] +
      ' commits in ' +
      hours[params.value[0]] +
      ' of ' +
      days[params.value[1]]
    );
  }
},
grid: {
  left: 20,
  bottom: 10,
  right: 10,
  containLabel: true
},
xAxis: {
  type: 'category',
  data: hours,
  boundaryGap: true,
  splitLine: {
    show: false
  },
  axisLine: {
    show: true,
     lineStyle:{
        color:'#d7d9de'
      }
  },
   axisTick:{
        show:false
      },
        axisLabel:{
        show:true,
        fontWeight:"bold",
        color:"#000000"
      },    
},
yAxis: {
  type: 'category',
   splitArea: {
        show: false
      },
      splitLine: {
        show: false
      },
      axisLabel:{
        show:false,
      },
      axisLine:{
        show:true,
         lineStyle:{
        color:'#d7d9de'
      }
      },
      axisTick:{
        show:false
      },
  data: days,

},
series: [
  {
    name: 'Punch Card',
    type: 'scatter',
    symbolSize: function (val) {
      return val[2] * 2;
    },
    data: data,
    animationDelay: function (idx) {
      return idx * 5;
    },
    itemStyle:{
      color:"#2497d4"
    }
  }
]
};

  }

}
