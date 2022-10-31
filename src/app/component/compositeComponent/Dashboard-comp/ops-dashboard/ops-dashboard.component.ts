import { any } from '@amcharts/amcharts4/.internal/core/utils/Array';
import { object } from '@amcharts/amcharts4/core';
import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';
import { JsonHttpService } from 'src/app/services/json-http/json-http.service';

@Component({
  selector: 'app-ops-dashboard',
  templateUrl: './ops-dashboard.component.html',
  styleUrls: ['./ops-dashboard.component.scss'],
  encapsulation: ViewEncapsulation.None

})
export class OpsDashboardComponent implements OnInit {
  @Output() chartEvent: EventEmitter<any> = new EventEmitter<any>();
  @Input() active:string;
  optionsdoughnutops: any;
  data: any;
  chartLineOps = {
    series: [] ,
    xData : []
  };
  chartOpsData: any;
  chartOpsDoughnutData: any;
  lineSeries = [];
  OversightData: any;
  ManualActionData: any;
  PaymentProcessingXaxis: any;
  PaymentProcessingSeries = [];
  public railTitle = (sessionStorage.railTitle);
  constructor(private jsonhttp: JsonHttpService) { }
  chartEmit(data: string) {
    if (data == 'seven') {
      this.jsonhttp.getjsonlinechart("assets/data/admin.json").subscribe(data => {

        this.OversightData = data['OpsChartData'].Sevendays.OversightData;
        if (data['OpsChartData']?.Sevendays?.ManualAction) {
          let manualData = data['OpsChartData'].Sevendays.ManualAction;
          let names = Object.keys(manualData);
          let mData = [];
          for (let i = 0; i < names.length; i++) {
            mData.push(Object.values(manualData[names[i]]));
          }
          if (mData.length) {
            mData.unshift(Object.keys(manualData[names[0]]));
            this.ManualActionData = mData;
          }
        }
        if (data['OpsChartData']?.Sevendays?.PaymentProcess) {
          let paymentData = data['OpsChartData'].Sevendays.PaymentProcess;
          let colors = ["#858fd4", "#f36d9e"];
          let names = Object.keys(paymentData);
          this.PaymentProcessingXaxis = Object.keys(paymentData[names[0]]);
          for (let i = 0; i < names.length; i++) {
            let series = {
              name: names[i],
              data: Object.values(paymentData[names[i]]),
              type: 'bar',
              color: colors[i],
              stack: 'Total',
              emphasis: {
                focus: 'series'
              },
              label: {
                show: false
              }
            }
            this.PaymentProcessingSeries.push(series);
          }

        }

      })
    } else if (data == 'fifteen') {
      this.jsonhttp.getjsonlinechart("assets/data/admin.json").subscribe(data => {
        this.OversightData = data['OpsChartData'].FifteenDays.OversightData;
        if (data['OpsChartData']?.FifteenDays?.ManualAction) {
          let manualData = data['OpsChartData'].FifteenDays.ManualAction;
          let names = Object.keys(manualData);
          let mData = [];
          for (let i = 0; i < names.length; i++) {
            mData.push(Object.values(manualData[names[i]]));
          }
          if (mData.length) {
            mData.unshift(Object.keys(manualData[names[0]]));
            this.ManualActionData = mData;
          }
        }
        if (data['OpsChartData']?.FifteenDays?.PaymentProcess) {
          let paymentData = data['OpsChartData'].FifteenDays.PaymentProcess;
          let colors = ["#858fd4", "#f36d9e"];
          let names = Object.keys(paymentData);
          this.PaymentProcessingXaxis = Object.keys(paymentData[names[0]]);
          for (let i = 0; i < names.length; i++) {
            let series = {
              name: names[i],
              data: Object.values(paymentData[names[i]]),
              type: 'bar',
              color: colors[i],
              stack: 'Total',
              emphasis: {
                focus: 'series'
              },
              label: {
                show: false
              }
            }
            this.PaymentProcessingSeries.push(series);
          }

        }

      })
    }
  }

  ngOnInit(): void {
    this.jsonhttp.getjsonlinechart("assets/data/admin.json").subscribe(data => {
      this.chartOpsData = data['opsLinechart'];
      this.chartOpsDoughnutData = data['doughnutchartOps'];
      if (this.chartOpsData.lineOps) {
        let data = this.chartOpsData.lineOps;
        let colors = ["#6dd400", "#858fd4", "#fab212", "#2497d4"];
        let names = Object.keys(data);
        let xaxisData = Object.keys(data[names[0]]);
        let lineSeries = [];
        for (let i = 0; i < names.length; i++) {
          let series = {
            name: names[i],
            data: Object.values(data[names[i]]),
            type: "line",
            color: colors[i],
            emphasis: {
              focus: 'series'
            },
            smooth: true
          }
          lineSeries.push(series);
        }
        if (lineSeries.length) {
          this.chartLineOps.series = lineSeries;
          this.chartLineOps.xData = xaxisData;
          this
        }
      }
      if (this.chartOpsDoughnutData?.data.length) {
        this.optionsdoughnutops = this.chartOpsDoughnutData.data;

      }

    })
    this.chartEmit('seven');
  }



  selectActive(index) {

    this.active = this.data[index].name;
    this.data.forEach(element => {
      if (element.name == this.active) {
        element.status = "pending";
      }
      else {
        element.status = "initial";
      }
    });

  }



}
