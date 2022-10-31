import { Component, OnInit ,Input, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-ops-linechart',
  templateUrl: './ops-linechart.component.html',
  styleUrls: ['./ops-linechart.component.scss']
})
export class OpsLinechartComponent implements OnInit, OnChanges {
  @Input() optionsLinechart:any;
  @Input() series: any;
  @Input() xData: any;
  option: any;

  constructor() { }

  ngOnInit(): void {
    this.changeData([], [])
  } 
  ngOnChanges() {
      this.changeData(this.series, this.xData)
  }  
  changeData(series: any, xData: any) {
    this.option = {
      xAxis: {
        type: 'category',
        boundaryGap: false,
        axisLine: {
          show: false,
          onZero: false
        },
        axisLabel: {
          show: true,
          fontWeight: "bold"
        },
        axisTick: {
          show: false
        },
        splitLine: {
          show: true
        },

        data: xData ? xData : [],
      },
      yAxis: {
        type: 'value',
        axisLine: {
          show: false,
          onZero: false,
        },
        axisTick: {
          show: false
        },
        splitLine: {
          show: false
        },
        axisLabel: {
          show: true,
          fontWeight: "bold"
        },
      },
      series: series ? series : []
    }
  }
}
