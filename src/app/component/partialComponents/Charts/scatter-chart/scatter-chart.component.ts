import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-scatter-chart',
  templateUrl: './scatter-chart.component.html',
  styleUrls: ['./scatter-chart.component.scss']
})
export class ScatterChartComponent implements OnInit {
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

const data = [[0,0,5],[0,1,7],[0,2,10],[0,3,10],[0,4,10],[0,5,8],[0,6,5],[0,7,3],[0,8,10],[0,9,10],[0,10,10],[0,11,2],[0,12,4],[0,13,1],[0,14,1],[0,15,10],[0,16,4],[0,17,6],[0,18,10],[10,19,14],[10,20,10],[0,21,3],[0,22,2],[0,23,5],[1,0,7],[1,1,10],[1,2,10],[1,3,4],[1,4,0],[1,5,6],[1,6,8],[1,7,0],[1,8,0],[1,9,10],[1,10,5],[1,11,2],[1,12,2],[1,13,6],[1,14,9],[1,15,11],[1,16,6],[1,17,7],[1,18,8],[1,19,12],[1,20,5],[1,21,5],[1,22,7],[1,23,2],[2,0,1],[2,1,10],[2,2,4],[2,3,0],[2,4,0],[2,5,0],[2,6,10],[2,7,0],[2,8,0],[2,9,10],[2,10,3],[2,11,2],[2,12,1],[2,13,9],[2,14,8],[2,15,10],[2,16,6],[2,17,5],[2,18,5],[2,19,5],[2,20,7],[2,21,4],[2,22,2],[2,23,4],[3,0,7],[3,1,3],[3,2,0],[3,3,10],[3,4,0],[3,5,0],[3,6,0],[3,7,0],[3,8,1],[3,9,10],[3,10,5],[3,11,4],[3,12,7],[3,13,14],[3,14,13],[3,15,12],[3,16,9],[3,17,5],[3,18,5],[3,19,10],[3,20,6],[3,21,4],[3,22,4],[3,23,1],[4,0,1],[4,1,3],[4,2,0],[4,3,0],[4,4,10],[4,5,1],[4,6,0],[4,7,0],[4,8,0],[4,9,2],[4,10,4],[4,11,4],[4,12,2],[4,13,4],[4,14,4],[4,15,14],[4,16,12],[4,17,1],[4,18,8],[4,19,5],[4,20,3],[4,21,7],[4,22,3],[4,23,0],[5,0,2],[5,1,1],[5,2,0],[5,3,3],[5,4,0],[5,5,0],[5,6,0],[5,7,10],[5,8,2],[5,9,0],[5,10,4],[5,11,1],[5,12,5],[5,13,10],[5,14,5],[5,15,7],[5,16,11],[5,17,6],[5,18,10],[5,19,5],[5,20,3],[5,21,4],[5,22,2],[5,23,0],[6,0,1],[6,1,0],[6,2,5],[6,3,10],[6,4,0],[6,5,10],[6,6,7],[6,7,0],[6,8,0],[6,9,5],[6,10,1],[6,11,0],[6,12,2],[6,13,1],[6,14,3],[6,15,4],[6,16,0],[6,17,0],[6,18,0],[6,19,0],[6,20,1],[6,21,2],[6,22,2],[6,23,6]]
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
