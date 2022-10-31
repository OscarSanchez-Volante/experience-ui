import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-heatmap-chart',
  templateUrl: './heatmap-chart.component.html',
  styleUrls: ['./heatmap-chart.component.scss']
})
export class HeatmapChartComponent implements OnInit {
  @Input() Heatdata:any;
  optionsHeatmapChart:any;

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
if(this.Heatdata){
  const data = this.Heatdata
  .map(function (item) {
      return [item[1], item[0], item[2] || '-'];
  });
  this.optionsHeatmapChart = {
    tooltip: {
      position: 'top'
    },
    grid: {
      height: '60%',
      top: '20%',
      Bottom:'0%'
    },
    xAxis: {
      type: 'category',
      data: hours,
      splitArea: {
        show: true
      },
      axisTick:{
        show:false
      },
      axisLabel:{
        show:true,
        fontWeight:"bold",
        color:"#000000"
      }
    },
    yAxis: {
      type: 'category',
      data: days,
      splitArea: {
        show: true
      },
      axisTick:{
        show:false
      },
      axisLabel:{
        show:false,
      }
    },
    visualMap: {
      show:false,
      min: 0,
      max: 10,
      calculable: true,
      orient: 'horizontal',
      left: 'center',
      bottom: '0%',
      inRange: {
        color: [ '#d3eaf6','#6ebcfa','#2497d4']
      }
    },
    series: [
      {
        name: 'Calender Data',
        type: 'heatmap',
        data: data,
        label: {
          show: false
        },
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  };
}
   
        
  }

}
