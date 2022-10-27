import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-heatmap-chart',
  templateUrl: './heatmap-chart.component.html',
  styleUrls: ['./heatmap-chart.component.scss']
})
export class HeatmapChartComponent implements OnInit {
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
    
    const data = [[0,0,5],[0,1,1],[0,2,1],[0,3,1],[0,4,1],[0,5,1],[0,6,1],[0,7,4],[0,8,8],[0,9,1],[0,10,10],[0,11,2],[0,12,4],[0,13,1],[0,14,1],[0,15,3],[0,16,4],[0,17,6],[0,18,4],[0,19,4],[0,20,3],[0,21,3],[0,22,2],[0,23,5],[1,0,7],[1,1,1],[1,2,2],[1,3,10],[1,4,10],[1,5,4],[1,6,8],[1,7,1],[1,8,1],[1,9,4],[1,10,5],[1,11,2],[1,12,2],[1,13,6],[1,14,9],[1,15,11],[1,16,6],[1,17,7],[1,18,8],[1,19,12],[1,20,5],[1,21,5],[1,22,7],[1,23,2],[2,0,1],[2,1,1],[2,2,5],[2,3,1],[2,4,3],[2,5,10],[2,6,3],[2,7,6],[2,8,1],[2,9,1],[2,10,3],[2,11,2],[2,12,1],[2,13,9],[2,14,8],[2,15,10],[2,16,6],[2,17,5],[2,18,5],[2,19,5],[2,20,7],[2,21,4],[2,22,2],[2,23,4],[3,0,7],[3,1,3],[3,2,1],[3,3,10],[3,4,1],[3,5,3],[3,6,3],[3,7,2],[3,8,1],[3,9,8],[3,10,5],[3,11,4],[3,12,7],[3,13,14],[3,14,13],[3,15,12],[3,16,9],[3,17,5],[3,18,5],[3,19,10],[3,20,6],[3,21,4],[3,22,4],[3,23,1],[4,0,1],[4,1,3],[4,2,1],[4,3,10],[4,4,9],[4,5,1],[4,6,3],[4,7,7],[4,8,3],[4,9,2],[4,10,4],[4,11,4],[4,12,2],[4,13,4],[4,14,4],[4,15,14],[4,16,12],[4,17,1],[4,18,8],[4,19,5],[4,20,3],[4,21,7],[4,22,3],[4,23,6],[5,0,2],[5,1,1],[5,2,1],[5,3,3],[5,4,1],[5,5,1],[5,6,10],[5,7,1],[5,8,2],[5,9,0],[5,10,4],[5,11,1],[5,12,5],[5,13,10],[5,14,5],[5,15,7],[5,16,11],[5,17,6],[5,18,1],[5,19,5],[5,20,3],[5,21,4],[5,22,2],[5,23,4],[6,0,1],[6,1,3],[6,2,1],[6,3,10],[6,4,5],[6,5,1],[6,6,1],[6,7,7],[6,8,3],[6,9,7],[6,10,1],[6,11,1],[6,12,2],[6,13,1],[6,14,3],[6,15,4],[6,16,10],[6,17,7],[6,18,4],[6,19,8],[6,20,1],[6,21,2],[6,22,2],[6,23,6]]
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
