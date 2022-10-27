import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-e-chart',
  templateUrl: './e-chart.component.html',
  styleUrls: ['./e-chart.component.scss']
})
export class EChartComponent implements OnInit, OnChanges {
  @Input() events: Observable<any>;
@Input() changeChartdata1:any;
   options: any;
   ngOnInit(): void {
 
    this.changeData('seven')
  }
  ngOnChanges(){
    this.changeData(this.changeChartdata1);
     }
     changeData(data:string){
  
      switch (data) {
        case "seven":
          this.sevenDaysData();
          break;
          case 'fifteen':
            this.fifteenDaysData();
            break;
      
        default:
          break;
      }
    }
    sevenDaysData(){
      this.options = {
        legend: {
          show:''
        },
      dataset: {
        source: [
          ['Transaction', '27 june', '28 june', '29 june', '30 june', '1 july', '2 july' ,'3 july'],
          ['Duplicate Check', 56.5, 42.1, 88.7, 70.1, 53.4, 85.1,45,11,28,12],
          ['Sanctions Filter', 51.1, 67.4, 55.1, 53.3, 73.8, 68.7,81,40,64,30],
          ['Fraud Filter', 40.1, 80.2, 69.5, 36.4, 45.2, 32.5,24,50,22,68,35],
          ['Liquidity Check', 25.2, 37.1, 41.2, 18, 33.9, 49.1,27,58,38,29,40],
          ['Account Posting', 23.2, 47.1, 61.2, 12, 53.9, 37.1,60,72,54,45,20]
  
        ]
      },
      xAxis: { type: 'category',
      boundaryGap: false,
      axisLine:{
        show:false,
      },
      axisTick:{
        show:false
      },
      axisLabel:{
        show:true,
        fontWeight:"bold"
      },
     },
      yAxis: { gridIndex: 0,
        axisLine:{
          show:false,
        },
        axisTick:{
          show:false
        },
        axisLabel:{
          show:true,
          showMaxLabel:true,
          fontWeight:"bold",
          color:'#a3a3a3'
        },       },
      grid: { top: '20%',
    height: '60%',
  },
      series: [
        {
          type: 'line',
          smooth: true,
          seriesLayoutBy: 'row',
          color:'#f36d9e',
          emphasis: { focus: 'series' }
        },
        {
          type: 'line',
          smooth: true,
          seriesLayoutBy: 'row',
          color:'#858fd4',
          emphasis: { focus: 'series' }
        },
        {
          type: 'line',
          smooth: true,
          seriesLayoutBy: 'row',  
          color:'#53d5e6',
          emphasis: { focus: 'series' }
        },
        {
          type: 'line',
          smooth: true,
          seriesLayoutBy: 'row',
          color:'#e0ec77',
          emphasis: { focus: 'series' }
        },
        {
          type: 'line',
          smooth: true,
          seriesLayoutBy: 'row',
          color:'#ff966c',
          emphasis: { focus: 'series' }
        },
      ]
    };
    } 
    fifteenDaysData(){
      this.options = {
        legend: {
          show:''
        },
      dataset: {
        source: [
          ['Transaction', '27 june', '28 june', '29 june', '30 june', '1 july', '2 july' ,'3 july', '4 july', '5 july', '6 july', '7 july', '8 july', '9 july', '10 july', '11 july'],
          ['Duplicate Check', 56.5, 42.1, 88.7, 70.1, 53.4, 85.1,45,11,28,12,69,50,40,30,54],
          ['Sanctions Filter', 51.1, 67.4, 55.1, 53.3, 73.8, 68.7,81,40,64,30,22,46,40,39,50,60],
          ['Fraud Filter', 40.1, 80.2, 69.5, 36.4, 45.2, 32.5,24,50,22,68,35,67,30,20,31,70],
          ['Liquidity Check', 25.2, 37.1, 41.2, 18, 33.9, 49.1,27,58,38,29,40,65,44,32,57,67],
          ['Account Posting', 23.2, 47.1, 61.2, 12, 53.9, 37.1,60,72,54,45,20,54,26,11,29,40]
  
        ]
      },
      xAxis: { type: 'category',
      boundaryGap: false,
      axisLine:{
        show:false,
      },
      axisTick:{
        show:false
      },
      axisLabel:{
        show:true,
        fontWeight:"bold"
      }, },
      yAxis: { gridIndex: 0 ,
        axisLine:{
          show:false,
        },
        axisTick:{
          show:false
        },
        axisLabel:{
          show:true,
          showMaxLabel:true,
          fontWeight:"bold",
          color:'#a3a3a3'
        },      },
      grid: { top: '20%',
    height: '60%',
  },
      series: [
        {
          type: 'line',
          smooth: true,
          seriesLayoutBy: 'row',
          color:'#f36d9e',
          emphasis: { focus: 'series' }
        },
        {
          type: 'line',
          smooth: true,
          seriesLayoutBy: 'row',
          color:'#858fd4',
          emphasis: { focus: 'series' }
        },
        {
          type: 'line',
          smooth: true,
          seriesLayoutBy: 'row',  
          color:'#53d5e6',
          emphasis: { focus: 'series' }
        },
        {
          type: 'line',
          smooth: true,
          seriesLayoutBy: 'row',
          color:'#e0ec77',
          emphasis: { focus: 'series' }
        },
        {
          type: 'line',
          smooth: true,
          seriesLayoutBy: 'row',
          color:'#ff966c',
          emphasis: { focus: 'series' }
        },
      ]
    };
    }


  }