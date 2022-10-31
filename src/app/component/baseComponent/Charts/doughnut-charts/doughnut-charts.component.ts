import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-doughnut-charts',
  templateUrl: './doughnut-charts.component.html',
  styleUrls: ['./doughnut-charts.component.scss']
})
export class DoughnutChartsComponent implements OnInit, OnChanges {

  @Input() options: any;
  choiceOption: any;

  ngOnInit(): void {
    this.changeData([]);
  }

  ngOnChanges(){
    this.changeData(this.options);
  }

  changeData(data: any){
    this.choiceOption = {
      tooltip: {
        trigger: 'item'
      },
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius:  ['40%', '60%'],
          avoidLabelOverlap: true, 
          textAlign: 'center',  
          label: {
            show: true,
            fontWeight: 'bold',
            position: 'left',
            // overflow: 'break'
          }, 
          emphasis: {
            label: {
              show: true,
              fontSize: '12',
            }
          },
          labelLine: {
            show: false
          },
          data: data,
        }
      ]
    }
  }
}  


