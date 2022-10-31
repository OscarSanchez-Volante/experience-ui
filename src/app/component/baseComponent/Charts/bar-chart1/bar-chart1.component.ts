import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-bar-chart1',
  templateUrl: './bar-chart1.component.html',
  styleUrls: ['./bar-chart1.component.scss']
})
export class BarChart1Component implements OnInit, OnChanges {
  @Input() events: Observable<any>;
  @Input() changeChartdata: any;
  options: any;

  ngOnInit(): void {

    this.changeData([])
  }
  ngOnChanges() {
    this.changeData(this.changeChartdata);
  }
  changeData(data: any) {
    this.options = {
      legend: {
        show: ''
      },
      tooltip: {},
      dataset: {
        dimensions: ['product', 'LargestTransactions', 'OutofHours', 'LargestCounterparties', 'HighestTrafficCustomers', 'NewCounterPerties'],
        source: data ? data : []
      },
      xAxis: {
        type: 'category',
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
      series: [{
        type: 'bar',
        color: '#ffc14a',
      }, {
        type: 'bar',
        color: '#858fd4',
      }, {
        type: 'bar',
        color: '#ff966c',
      }, {
        type: 'bar',
        color: '#8acf8b',
      }, {
        type: 'bar',
        color: '#6ebcfa',
      }]
    };
  }

}

