import { Component } from '@angular/core';
import * as am4charts from "@amcharts/amcharts4/charts";
import * as am4core from "@amcharts/amcharts4/core";
@Component({
  selector: 'app-ambar-chart',
  templateUrl: './ambar-chart.component.html',
  styleUrls: ['./ambar-chart.component.scss']
})
export class AmbarChartComponent  {
  name = 'Angular';
  chartType: string = 'XYChart';
  chartData: any[];
  categoryAxis : am4charts.CategoryAxis;
  columnSeriesOne: am4charts.ColumnSeries;
  columnSeriesTwo: am4charts.ColumnSeries;
  valueAxis: am4charts.ValueAxis;
  graphs: am4charts.Series[] = [];
  input: string;
  constructor(){
    this.chartData = [{
        "country": "Lithuania",
        "litres": 501.9,
        "food" : 600
      }, {
        "country": "Czech Republic",
        "litres": 301.9,
        "food" : 500
      }, {
        "country": "Ireland",
        "litres": 201.1,
        "food" : 300
      }, {
        "country": "Germany",
        "litres": 165.8,
        "food" : 200
      }, {
        "country": "Australia",
        "litres": 139.9,
        "food" : 200
      }, {
        "country": "Austria",
        "litres": 128.3,
        "food" : 400
      }, {
        "country": "UK",
        "litres": 99,
        "food" : 200
      }, {
        "country": "Belgium",
        "litres": 60,
        "food" : 150
      }, {
        "country": "The Netherlands",
        "litres": 50,
        "food" : 100
      }];
      this.categoryAxis = new am4charts.CategoryAxis();
      this.categoryAxis.dataFields.category = "country";
      this.valueAxis = new am4charts.ValueAxis();
      //series 1
      this.columnSeriesOne = new am4charts.ColumnSeries();
      this.columnSeriesOne.dataFields.valueY = "litres";
      this.columnSeriesOne.dataFields.categoryX = "country";
      this.columnSeriesOne.stacked = true;
      //series 2
      this.columnSeriesTwo = new am4charts.ColumnSeries();
      this.columnSeriesTwo.dataFields.valueY = "litres";
      this.columnSeriesTwo.dataFields.categoryX = "country";
      this.columnSeriesTwo.stacked = true;
      this.graphs.push(this.columnSeriesOne);
      this.graphs.push(this.columnSeriesTwo);
  }

  public changeSeriesOneColor(color:string = "#ff0000"){
      this.columnSeriesOne.columns.template.stroke = am4core.color(color); // red outline
      this.columnSeriesOne.columns.template.fill = am4core.color(color);
  }

  public changeSeriesTwoColor(color:string = "#ff0000"){
      this.columnSeriesTwo.columns.template.stroke = am4core.color(color); // red outline
      this.columnSeriesTwo.columns.template.fill = am4core.color(color);
  }
}
