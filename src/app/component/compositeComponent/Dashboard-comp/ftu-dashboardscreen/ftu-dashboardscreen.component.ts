import { Component, OnInit,ViewEncapsulation,Input,Output,EventEmitter  } from '@angular/core';
import * as introJs from 'intro.js/intro.js';
import { JsonHttpService } from 'src/app/services/json-http/json-http.service';
import {ftutableheadInterface,ftutablecontentInterface} from '../../../../interface/composite-interface'
@Component({
  selector: 'app-ftu-dashboardscreen',
  templateUrl: './ftu-dashboardscreen.component.html',
  styleUrls: ['./ftu-dashboardscreen.component.scss'],
  encapsulation:ViewEncapsulation.None

})
export class FtuDashboardscreenComponent implements OnInit {
  optionsdoughnutftu:any;
  optionsdoughnutftu1:any;
  optionslineBar:any;
  optionslineBar1:any;
  public tableHead2:ftutableheadInterface;
  public tableValues2:ftutablecontentInterface; 
  chartFtuDoughnutData:any;
  introJS = introJs();
  data: any;
  date: Date;
  chartdata: any;
  RailSource: any;
  constructor(private jsonhttp:JsonHttpService) {
    setInterval(() => {
      this.date = new Date()
    }, 1000)
   }
   public chartItem:any;


  ngOnInit(): void {
    this.jsonhttp.getftuDashboard("assets/data/admin.json").subscribe(data => {
      this.tableHead2 = data['tableFtuDashboardHead'];
      this.tableValues2 = data['tableFtuDashboardValues'];
      this.chartFtuDoughnutData = data['doughnutchartFtu'];
      this.chartdata = data['dashboard'];
      if(this.chartFtuDoughnutData?.data.length){
        this.optionsdoughnutftu =  this.chartFtuDoughnutData.data;
      }
      if (this.chartdata?.Rails?.length) {
        let data = [];
        let dataHead = Object.keys(this.chartdata.Rails[0]);
        data = this.chartdata.Rails.map((obj) => [obj.score, obj.amount, obj.product]);
        data.unshift(dataHead);
        if (data) {
          this.optionslineBar = data;
        }   
      }
      if (this.chartdata?.Currency?.length) {
        let data = [];
        let dataHead = Object.keys(this.chartdata.Currency[0]);
        data = this.chartdata.Currency.map((obj) => [obj.score, obj.amount, obj.product]);
        data.unshift(dataHead);
        if (data?.length) {
          this.optionslineBar1 = data;

        }
      }
    })
var storedArray = JSON.parse(sessionStorage.getItem("selectedRails"));
this.chartItem=storedArray;

setTimeout(()=>{
      this.introJS
        .setOptions({
        steps: [
        {
          element: '#step1-li',
          intro: 'Add your new rails and set up your dashboard.',
          position: 'top',
          showProgress: false,
          bullets: false
        },
        {
          element: '#step2-li',
          intro: "Add new chart to set up your dashboard.",
          position: 'right',
          showProgress: false,

        },
        {
          element: '#step3-li',
          intro: "Add new request to set up your dashboard.",
          position: 'top',
          showProgress: false,

        }
      ],
      hidePrev: true,
      hideNext: false,
      showProgress: false,
      })
      .start();
    }, 500)

   

  
    

  }

 
  

 
}

