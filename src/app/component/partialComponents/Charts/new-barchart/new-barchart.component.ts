import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-barchart',
  templateUrl: './new-barchart.component.html',
  styleUrls: ['./new-barchart.component.scss']
})
export class NewBarchartComponent implements OnInit {

  options: any;

  ngOnInit(): void {
    const xAxisData = [];
    const data1 = [];
    const data2 = [];

    for (let i = 0; i < 100; i++) {
      xAxisData.push('category' + i);
      data1.push((Math.sin(i / 5) * (i / 5 - 10) + i / 6) * 5);
      data2.push((Math.cos(i / 5) * (i / 5 - 10) + i / 6) * 5);
    }

    this.options = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      legend: {
        data: [ 'Expenses', 'Income']
      },
      grid: {
        left: '10%',
        right: '50%',
        bottom: '3%',
        width:"70%",
        containLabel: true
      },
      xAxis: [
         {
          type: 'category',
          axisTick: {
            show: false
          },
          data: ['27 june', '28 june', '29 june', '30 june', '1 july', '2 july', '3 july']
        }
       
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      series: [
       
        {
          name: 'Income',
          type: 'bar',
          stack: 'Total',
          label: {
            show: true
          },
          emphasis: {
            focus: 'series'
          },
          data: [320, 302, 341, 374, 390, 450, 420]
        },
        {
          name: 'Expenses',
          type: 'bar',
          stack: 'Total',
          label: {
            show: true,
            position: 'left'
          },
          emphasis: {
            focus: 'series'
          },
          data: [-120, -132, -101, -134, -190, -230, -210]
        }
      ]
    };
    
 
}}
