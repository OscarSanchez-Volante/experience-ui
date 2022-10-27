import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-ops-barchart',
  templateUrl: './ops-barchart.component.html',
  styleUrls: ['./ops-barchart.component.scss']
})
export class OpsBarchartComponent implements OnInit, OnChanges {
  public options:any;
  @Input() events: Observable<any>;
  @Input() changeChartdata1:any;
  constructor() { }
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
            data: ['27 June', '28 June', '29 June', '30 June',  '1 July', '2 July','3 July' ]
          }
        ],
        yAxis: [
          {
                 type: 'value' ,
                 axisLine:{
                  show:false,
                },
                axisTick:{
                  show:false
                },
                axisLabel:{
                  show:true,
                  fontWeight:"bold",
                  color:'#a3a3a3'
                },
      
          }
        ],
        series: [
          {
            name: 'Profit',
            type: 'bar',
            label: {
              show: false,
              position: 'inside'
            },
            emphasis: {
              focus: 'series',
            },
          },
          {
            name: 'STP',
            type: 'bar',
            color:'#858fd4',
            stack: 'Total',
            label: {
              show: false
            },
            emphasis: {
              focus: 'series'
            },
            data: [220, 202, 241, 274, 290, 250, 220]
          },
          {
            name: 'Repair',
            type: 'bar',
            color:'#f36d9e',
            stack: 'Total',
            label: {
              show: false,
              position: 'left'
            },
            emphasis: {
              focus: 'series'
            },
            data: [-120, -132, -101, -134, -190, -130, -110]
          }
        ]
      };
    }
    fifteenDaysData(){
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
            data: ['27 June', '28 June', '29 June', '30 June',  '1 July', '2 July','3 July', '4 July', '5 July',  '6 July', '7 July', '8 July', '9 July', '10 July', '11 July']
          }
        ],
        yAxis: [
          {
                 type: 'value' ,
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
                },      
          }
        ],
        series: [
          {
            name: 'Profit',
            type: 'bar',
            label: {
              show: false,
              position: 'inside'
            },
            emphasis: {
              focus: 'series',
            },
          },
          {
            name: 'STP',
            type: 'bar',
            color:'#858fd4',
            stack: 'Total',
            label: {
              show: false
            },
            emphasis: {
              focus: 'series'
            },
            data: [220, 202, 241, 274, 290, 250, 220,110,180,210,270,200,170,120,89,104,200]
          },
          {
            name: 'Repair',
            type: 'bar',
            color:'#f36d9e',
            stack: 'Total',
            label: {
              show: false,
              position: 'left'
            },
            emphasis: {
              focus: 'series'
            },
            data: [-120, -132, -101, -134, -190, -130, -110,-60,-90,-160,-70,-220,-170,-130,-203,-190]
          }
        ]
      };
    }

}
