import { Component, OnInit,Input } from '@angular/core';


@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit {
  @Input() options: any;

  constructor() { }

  ngOnInit(): void {
  }

}
