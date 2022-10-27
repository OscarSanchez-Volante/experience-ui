import { Component, OnInit,ViewEncapsulation,Input } from '@angular/core';
@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class BarChartComponent implements OnInit {
  @Input() options: any;

  constructor() { }

  ngOnInit(): void {
  }
  
}
