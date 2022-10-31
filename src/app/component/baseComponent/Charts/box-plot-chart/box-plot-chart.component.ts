import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-box-plot-chart',
  templateUrl: './box-plot-chart.component.html',
  styleUrls: ['./box-plot-chart.component.scss']
})
export class BoxPlotChartComponent implements OnInit, OnChanges {
  @Input() optionsBoxplotchart:any;
  option: any;

  constructor() { }

  ngOnInit(): void {
    this.changeData('');
  }
  ngOnChanges(){
     this.changeData(this.optionsBoxplotchart) 
  }
  changeData(data: any) {
    this.option ={
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
        data: data ? data.date : ''
        
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
            data ? data.data : ''
          ],
          itemStyle:{
            color: data ? data.color : '',
            borderColor: data ? data.borderColor : ''
          }
        }
      ]
    }
  }
}
