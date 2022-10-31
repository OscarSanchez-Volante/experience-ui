import { Component, OnInit,ViewEncapsulation,Input,Output,EventEmitter  } from '@angular/core';
import * as introJs from 'intro.js/intro.js';
import { JsonHttpService } from 'src/app/services/json-http/json-http.service';
@Component({
  selector: 'app-message-ftudashboard',
  templateUrl: './message-ftudashboard.component.html',
  styleUrls: ['./message-ftudashboard.component.scss'],
  encapsulation:ViewEncapsulation.None

})
export class MessageFtudashboardComponent implements OnInit {

  optionslineBar2:any;
  optionslineBar3:any;
  optionsmessagedoughnut4:any;
  optionsdoughnut5:any;
  optionsdoughnut6:any;
  date: Date;
  chartFtuDoughnutData:any;
  public tableMessageFtuHead;
  public tableMessageFtuValues;
  chartdata: any;
  introJS = introJs();
  constructor(private jsonhttp:JsonHttpService ) {
    setInterval(() => {
      this.date = new Date()
    }, 1000)
   }
  
  ngOnInit(): void {

    this.jsonhttp.getmessageFtu("assets/data/admin.json").subscribe(data => {
      this.tableMessageFtuHead = data['tableMessageFtuHead']
      this.tableMessageFtuValues = data['tableMessageFtuValues']
      this.chartFtuDoughnutData = data['doughnutchartFtu'];
      if(this.chartFtuDoughnutData?.data.length){
        this.optionsdoughnut5 =  this.chartFtuDoughnutData.data;
        this.optionsmessagedoughnut4 =  this.chartFtuDoughnutData.data;
      }
      this.chartdata = data['dashboard'];
      
      if (this.chartdata?.Rails?.length) {
        let data = [];
        let dataHead = Object.keys(this.chartdata.Rails[0]);
        data = this.chartdata.Rails.map((obj) => [obj.score, obj.amount, obj.product]);
        data.unshift(dataHead);
        if (data) {
          this.optionslineBar2 = data;
        }   
      }
      if (this.chartdata?.Currency?.length) {
        let data = [];
        let dataHead = Object.keys(this.chartdata.Currency[0]);
        data = this.chartdata.Currency.map((obj) => [obj.score, obj.amount, obj.product]);
        data.unshift(dataHead);
        if (data?.length) {
          this.optionslineBar3 = data;

        }
      }
    })
    setTimeout(()=>{
      this.introJS
        .setOptions({
        steps: [
        {
          element: '#step1-li',
          intro: 'Connect the messaging APIs and set up your dashboard.',
          position: 'top',
          showProgress: false,
          bullets: false
        },
        {
          element: '#step2-li',
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
