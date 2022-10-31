import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';


@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit, OnChanges {
  @Input() options: any;
  choiceOption: any;

  constructor() { }

  ngOnInit(): void {
    this.changeData([])
  }
  ngOnChanges() {
    this.changeData(this.options);
  }
  changeData(data: any) {
    this.choiceOption= {
		
      grid:{
        top:'20%',
        bottom:'10%',
        left:'13%'
          },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        axisLabel:{
        show:false,
        },
        axisLine:{
        show:false
        },
        axisTick:{
        show:false
        },
        splitLine:{
        show:true
        },
        data: data ? data['keys'] : []
      },
      yAxis: {
        name: 'Last 30 days',
        nameTextStyle:{
          fontWeight:"bold"
            },
        type: 'value',
        splitLine:{
        show:false
        },
        axisLabel:{
        fontWeight:"bold"
          },
        axisLine:{
        show:false
        },
        axisTick:{
        show:false
        },
      },
      series: [
        {
        color:'#f06292',
        data: data ? data['values'] : [],
        type: 'line',
        smooth: true
        }
      ]
      };
  }

}
