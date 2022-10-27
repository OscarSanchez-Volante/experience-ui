import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-box-plot-chart',
  templateUrl: './box-plot-chart.component.html',
  styleUrls: ['./box-plot-chart.component.scss']
})
export class BoxPlotChartComponent implements OnInit {
  @Input() optionsBoxplotchart:any;

  constructor() { }

  ngOnInit(): void {
  }

}
