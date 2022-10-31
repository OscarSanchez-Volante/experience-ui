import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';
import { JsonHttpService } from 'src/app/services/json-http/json-http.service';
@Component({
  selector: 'app-executive-dashboard',
  templateUrl: './executive-dashboard.component.html',
  styleUrls: ['./executive-dashboard.component.scss'],
  encapsulation: ViewEncapsulation.None

})
export class ExecutiveDashboardComponent implements OnInit {
  @Input() active:string;
  options: any;
  optionsstackbar: any;
  optionsdoughnutexecutive: any;
  optionsLinechart1 = {
    series: [] ,
    xData : []
  };
  optionsLinechart2 = {
    series: [] ,
    xData : []
  };
  optionsLinechart3 = {
    series: [] ,
    xData : []
  };
  optionsmidbar: any
  data: any;
  chartExecutiveDoughnutData: any;
  chartExecutiveSmidBarData: any;
  chartSmidExecutive: Object = { Months: [], opsname: [], rate: [] };
  chartStackBarExecutive: Object = { railsName: [], railPositive: [], railNegative: [] };
  chartExecutiveStackBarData: any;
  chartExecutiveLineData: any;
  chartLineExecutive: Object = { lineMonths: [], lineCount: [] };
  FEDWIRElinechartseries = [];
  FEDNOWlinechartseries = [];
  TCHlinechartseries = [];
  linechartseries = [];
  public railTitle = (sessionStorage.railTitle);
  constructor(private jsonhttp: JsonHttpService) { }

  ngOnInit(): void {
    this.jsonhttp.getexecutiveDashboard("assets/data/admin.json").subscribe(data => {
      this.chartExecutiveDoughnutData = data['doughnutchartExecutive'];
      this.chartExecutiveSmidBarData = data['smidBarExecutive'];
      this.chartExecutiveStackBarData = data['stackBarExecutive'];
      this.chartExecutiveLineData = data['lineChart'];



      if (this.chartExecutiveDoughnutData?.dougnutData.length) {
        this.optionsdoughnutexecutive = this.chartExecutiveDoughnutData.dougnutData;
      }
      if (this.chartExecutiveSmidBarData?.smidData.length) {
        this.chartSmidExecutive['Name'] = this.chartExecutiveSmidBarData.smidData.map((obj) => obj.name);
        this.chartSmidExecutive['Transaction'] = this.chartExecutiveSmidBarData.smidData.map((obj) => obj.transaction);
        this.chartSmidExecutive['Currency'] = this.chartExecutiveSmidBarData.smidData.map((obj) => obj.currency);

        this.optionsmidbar = this.smidBarExecutive(this.chartSmidExecutive)
      }
      if (this.chartExecutiveStackBarData?.stackBarData.length) {
        this.chartStackBarExecutive['Name'] = this.chartExecutiveStackBarData.stackBarData.map((obj) => obj.Name);
        this.chartStackBarExecutive['Currency'] = this.chartExecutiveStackBarData.stackBarData.map((obj) => obj.Currency);
        this.chartStackBarExecutive['Transaction'] = this.chartExecutiveStackBarData.stackBarData.map((obj) => obj.Transaction);
        this.chartStackBarExecutive['Payment'] = this.chartExecutiveStackBarData.stackBarData.map((obj) => obj.Payment);
        this.chartStackBarExecutive['Operations'] = this.chartExecutiveStackBarData.stackBarData.map((obj) => obj.Operations);
        this.optionsstackbar = this.stackBarExecutiveChart(this.chartStackBarExecutive)
      }
      if (this.chartExecutiveLineData?.FEDWIRE) {

        let FEDWIRE = this.chartExecutiveLineData.FEDWIRE;
        let colors = ["#6dd400", "#858fd4", "#fab212", "#2497d4"];
        let names = Object.keys(FEDWIRE);
        let xaxisData = Object.keys(FEDWIRE[names[0]]);
        let lineSeries = [];
        for (let i = 0; i < names.length; i++) {
          let series = {
            name: names[i],
            data: Object.values(FEDWIRE[names[i]]),
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
          this.optionsLinechart1.xData = xaxisData;
          this.optionsLinechart1.series = lineSeries;

        }

      }
      if (this.chartExecutiveLineData?.FEDNOW) {

        let data = this.chartExecutiveLineData.FEDNOW;
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
          this.optionsLinechart2.xData = xaxisData;
          this.optionsLinechart2.series = lineSeries;

        }

      }
      if (this.chartExecutiveLineData?.TCH) {

        let data = this.chartExecutiveLineData.TCH;
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
          this.optionsLinechart3.xData = xaxisData;
          this.optionsLinechart3.series = lineSeries;

        }

      }



    })







  }
  stackBarExecutiveChart(stackBar) {
    let stackBarChart = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
        
          type: 'shadow' 
        }
      },
      legend: {
        show: true,
        textStyle: {
          fontSize: 14,
          fontWeight: "bold",
        },
        data: ['Currency', 'Transaction', 'Payment', 'Operations']
      },
      grid: {
        left: '0%',
        right: '3%',
        bottom: '0%',
        containLabel: true
      },
      xAxis: {
        axisLabel: {
          fontWeight: "bold"
        },
        type: 'value',
        axisTick: {
          show: false
        },
        axisLine: {
          show: false,
          onZero: false
        },
      },
      yAxis: {
        axisLabel: {
          fontWeight: "bold"
        },
        type: 'category',
        axisTick: {
          show: false
        },
        axisLine: {
          show: false,
          onZero: false
        },
        data: stackBar['Name']
      },
      series: [
        {
          name: 'Currency',
          type: 'bar',
          stack: 'total',
          color: "#009ada",
          label: {
            show: false,
          },
          emphasis: {
            focus: 'series',

          },
          data: stackBar['Currency']
        },
        {
          name: 'Transaction',
          type: 'bar',
          stack: 'total',
          color: "#fab212",
          label: {
            show: false
          },
          emphasis: {
            focus: 'series'
          },
          data: stackBar['Transaction']
        },
        {
          name: 'Payment',
          type: 'bar',
          stack: 'total',
          color: "#858fd4",
          label: {
            show: false
          },
          emphasis: {
            focus: 'series'
          },
          data: stackBar['Payment']
        },
        {
          name: 'Operations',
          type: 'bar',
          stack: 'total',
          color: "#f36d9e",
          label: {
            show: false
          },
          emphasis: {
            focus: 'series'
          },
          data: stackBar['Operations']
        },

      ]
    }
    return stackBarChart;
  }
  smidBarExecutive(smidBar) {
    let smidBarChart = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      legend: {
        textStyle: {
          fontSize: 14,
          fontWeight: "bold",
        },
        data: ['Transactions', 'Currency']
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [
        {
          type: 'value',
          axisLabel: {
            fontWeight: "bold"
          },
          axisTick: {
            show: false
          },
          axisLine: {
            show: false,
            color: '#b3c4d8',
            onZero: false
          },
        }
      ],
      yAxis: [
        {
          type: 'category',
          axisLabel: {
            fontWeight: "bold"
          },
          axisTick: {
            show: false
          },

          data: smidBar['Name']
        }
      ],
      series: [

        {
          name: 'Transactions',
          type: 'bar',
          stack: 'Total',
          color: "#009ada",
          label: {
            show: false
          },
          emphasis: {
            focus: 'series'
          },
          data: smidBar['Transaction']
        },
        {
          name: 'Currency',
          type: 'bar',
          stack: 'Total',
          color: "#fab212",
          label: {
            show: false,
            position: 'left'
          },
          emphasis: {
            focus: 'series'
          },
          data: smidBar['Currency']
        }
      ]
    }
    return smidBarChart;
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
