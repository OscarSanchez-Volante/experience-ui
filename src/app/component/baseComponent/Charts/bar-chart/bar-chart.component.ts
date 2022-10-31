import { Component, OnInit,ViewEncapsulation,Input, OnChanges, SimpleChanges } from '@angular/core';
@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class BarChartComponent implements OnInit, OnChanges {
  @Input() options: any;
  chartOptions:any;
  constructor() { }

  ngOnInit(): void {
    this.changeData([]);
  }
  ngOnChanges() {
    this.changeData(this.options);  
  }
  changeData(data: any) {
    this.chartOptions = {
      dataset: {
        source: data ? data: []
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
        // orient: 'horizontal',
        // left: 'center',
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
}
