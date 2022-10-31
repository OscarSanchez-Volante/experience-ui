import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-ops-barchart',
  templateUrl: './ops-barchart.component.html',
  styleUrls: ['./ops-barchart.component.scss']
})
export class OpsBarchartComponent implements OnInit, OnChanges {
  public options: any;
  @Input() events: Observable<any>;
  @Input() series: any;
  @Input() xAxis: any;
  constructor() { }
  ngOnInit(): void {

    this.changeData([], [])
  }
  ngOnChanges() {

    this.changeData(this.series, this.xAxis);
  }
  changeData(data: any, xAxis: any) {
    this.options = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },

      grid: {
        left: '7%',
        right: '10%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [
        {
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
          data: xAxis ? xAxis : []
        }
      ],
      yAxis: [
        {
          type: 'value',
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
        }
      ],
      series: data ? data : []
    };

  }


}
