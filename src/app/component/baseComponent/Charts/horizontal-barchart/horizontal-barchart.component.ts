import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-horizontal-barchart',
  templateUrl: './horizontal-barchart.component.html',
  styleUrls: ['./horizontal-barchart.component.scss']
})
export class HorizontalBarchartComponent implements OnInit {
  @Input() source:any;
  optionsHorizontalstackbar: any;

  constructor() { }

  ngOnInit(): void {
    this.optionsHorizontalstackbar ={
      dataset: {
        source: this.source ? this.source : []
      },
      grid: { containLabel: true,
        top:'15%',
        bottom:'0%'
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
          }, },
      yAxis: { type: 'category',
           splitArea: {
            show: false
          },
          splitLine: {
            show: false
          },
          axisLabel:{
            show:true,
            fontWeight:"bold"
          },
          axisLine:{
            show:false
          },
          axisTick:{
            show:false
          },},
      visualMap: {
        show:false,
        orient: 'horizontal',
        left: 'center',
        min: 10,
        max: 100,
        text: ['High Score', 'Low Score'],
        dimension: 0,
        inRange: {
          color: ['#6ebcfa','#f36d9e', '#ba68c8','#2497d4','#ff8a65']
        }
      },
      series: [
        {
          type: 'bar',
            label: {
            position: 'right',
            show: true,
            fontWeight:"bold",
            color:"#000000"
          },
          encode: {
            x: 'amount',
            y: 'product'
          }
        }
      ]
    }
  }

}
