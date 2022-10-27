import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-doughnut-charts',
  templateUrl: './doughnut-charts.component.html',
  styleUrls: ['./doughnut-charts.component.scss']
})
export class DoughnutChartsComponent implements OnInit {

  @Input() options: any;

  ngOnInit(): void {

  }
}  


