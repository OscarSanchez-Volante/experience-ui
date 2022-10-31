import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-e-chart',
  templateUrl: './e-chart.component.html',
  styleUrls: ['./e-chart.component.scss']
})
export class EChartComponent implements OnInit, OnChanges {
  @Input() events: Observable<any>;
  @Input() changeChartdata1: any;
  options: any;
  ngOnInit(): void {

    this.changeData([])
  }
  ngOnChanges() {
    this.changeData(this.changeChartdata1);
  }
  changeData(data: any) {
    this.options = {
      legend: {
        show: ''
      },
      dataset: {
        source: data ? data : []
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          show: true,
          fontWeight: "bold"
        },
      },
      yAxis: {
        gridIndex: 0,
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          show: true,
          showMaxLabel: true,
          fontWeight: "bold",
          color: '#a3a3a3'
        },
      },
      grid: {
        top: '20%',
        height: '60%',
      },
      series: [
        {
          type: 'line',
          smooth: true,
          seriesLayoutBy: 'row',
          color: '#f36d9e',
          emphasis: { focus: 'series' }
        },
        {
          type: 'line',
          smooth: true,
          seriesLayoutBy: 'row',
          color: '#858fd4',
          emphasis: { focus: 'series' }
        },
        {
          type: 'line',
          smooth: true,
          seriesLayoutBy: 'row',
          color: '#53d5e6',
          emphasis: { focus: 'series' }
        },
        {
          type: 'line',
          smooth: true,
          seriesLayoutBy: 'row',
          color: '#e0ec77',
          emphasis: { focus: 'series' }
        },
        {
          type: 'line',
          smooth: true,
          seriesLayoutBy: 'row',
          color: '#ff966c',
          emphasis: { focus: 'series' }
        },
      ]
    };
  }


}