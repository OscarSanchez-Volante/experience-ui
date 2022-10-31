import { Component, OnInit,ViewEncapsulation,Input} from '@angular/core';
import { JsonHttpService } from 'src/app/services/json-http/json-http.service';
@Component({
  selector: 'app-executive-dashboard-step2',
  templateUrl: './executive-dashboard-step2.component.html',
  styleUrls: ['./executive-dashboard-step2.component.scss'],
    encapsulation:ViewEncapsulation.None

})
export class ExecutiveDashboardStep2Component implements OnInit {

  @Input() active:string;
  options:any; 
  Horizontalstackbar1=[];
  Horizontalstackbar2=[];
  optionsLinechart:any;
  optionscandlestick5:any;
  optionscandlestick2:any;
  optionscandlestick3:any;
  optionscandlestick4:any;
  HeatmapData:any;
  ScattermapData:any;
  LargeCounterParties:any;
  HighTrafficCustomers:any;
  data:any;
chartCandleData:any;
chartCandleStick:any;

optionscandlestick1:any={};

worldData:any;
worldmapSource= [];
worldmapInput:any;



public railTitle= (sessionStorage.railTitle);
constructor(private jsonhttp:JsonHttpService) { }

ngOnInit(): void {
  
  this.jsonhttp.getjsonlinechart("assets/data/admin.json").subscribe(data => {
    this.chartCandleData = data['CandleStick'];
    this.HeatmapData = data["HeatmapData"];
    this.ScattermapData = data["ScatterData"];
    this.LargeCounterParties = data["LargeCounter"];
    this.HighTrafficCustomers = data['HighTraffic'];
    this.worldData = data['worldMapData'];
    let worldmapdata= [
      ["fo", 0],
      ["um", 0],
      ["us", 0],
      ["jp", 0],
      ["sc", 0],
      ["in", 0],
      ["fr", 0],
      ["fm", 0],
      ["cn", 0],
      ["pt", 0],
      ["sw", 0],
      ["sh", 0],
      ["br", 0],
      ["ki", 0],
      ["ph", 0],
      ["mx", 0],
      ["es", 0],
      ["bu", 0],
      ["mv", 0],
      ["sp", 0],
      ["gb", 0],
      ["gr", 0],
      ["as", 0],
      ["dk", 0],
      ["gl", 0],
      ["gu", 0],
      ["mp", 0],
      ["pr", 0],
      ["vi", 0],
      ["ca", 0],
      ["st", 0],
      ["cv", 0],
      ["dm", 0],
      ["nl", 0],
      ["jm", 0],
      ["ws", 0],
      ["om", 0],
      ["vc", 0],
      ["tr", 0],
      ["bd", 0],
      ["lc", 0],
      ["nr", 0],
      ["no", 0],
      ["kn", 0],
      ["bh", 0],
      ["to", 0],
      ["fi", 0],
      ["id", 0],
      ["mu", 0],
      ["se", 0],
      ["tt", 0],
      ["my", 0],
      ["pa", 0],
      ["pw", 0],
      ["tv", 0],
      ["mh", 0],
      ["cl", 0],
      ["th", 0],
      ["gd", 0],
      ["ee", 0],
      ["ag", 0],
      ["tw", 0],
      ["bb", 0],
      ["it", 0],
      ["mt", 0],
      ["vu", 0],
      ["sg", 0],
      ["cy", 0],
      ["lk", 0],
      ["km", 0],
      ["fj", 0],
      ["ru", 0],
      ["va", 0],
      ["sm", 0],
      ["kz", 0],
      ["az", 0],
      ["tj", 0],
      ["ls", 0],
      ["uz", 0],
      ["ma", 0],
      ["co", 0],
      ["tl", 0],
      ["tz", 0],
      ["ar", 0],
      ["sa", 0],
      ["pk", 0],
      ["ye", 0],
      ["ae", 0],
      ["ke", 0],
      ["pe", 0],
      ["do", 0],
      ["ht", 0],
      ["pg", 0],
      ["ao", 0],
      ["kh", 0],
      ["vn", 0],
      ["mz", 0],
      ["cr", 0],
      ["bj", 0],
      ["ng", 0],
      ["ir", 0],
      ["sv", 0],
      ["sl", 0],
      ["gw", 0],
      ["hr", 0],
      ["bz", 0],
      ["za", 0],
      ["cf", 0],
      ["sd", 0],
      ["cd", 0],
      ["kw", 0],
      ["de", 0],
      ["be", 0],
      ["ie", 0],
      ["kp", 0],
      ["kr", 0],
      ["gy", 0],
      ["hn", 0],
      ["mm", 0],
      ["ga", 0],
      ["gq", 0],
      ["ni", 0],
      ["lv", 0],
      ["ug", 0],
      ["mw", 0],
      ["am", 0],
      ["sx", 0],
      ["tm", 0],
      ["zm", 0],
      ["nc", 0],
      ["mr", 0],
      ["dz", 0],
      ["lt", 0],
      ["et", 0],
      ["er", 0],
      ["gh", 0],
      ["si", 0],
      ["gt", 0],
      ["ba", 0],
      ["jo", 0],
      ["sy", 0],
      ["mc", 0],
      ["al", 0],
      ["uy", 0],
      ["cnm", 0],
      ["mn", 0],
      ["rw", 0],
      ["so", 0],
      ["bo", 0],
      ["cm", 0],
      ["cg", 0],
      ["eh", 0],
      ["rs", 0],
      ["me", 0],
      ["tg", 0],
      ["la", 0],
      ["af", 0],
      ["ua", 0],
      ["sk", 0],
      ["jk", 0],
      ["bg", 0],
      ["qa", 0],
      ["li", 0],
      ["at", 0],
      ["sz", 0],
      ["hu", 0],
      ["ro", 0],
      ["ne", 0],
      ["lu", 0],
      ["ad", 0],
      ["ci", 0],
      ["lr", 0],
      ["bn", 0],
      ["iq", 0],
      ["ge", 0],
      ["gm", 0],
      ["ch", 0],
      ["td", 0],
      ["kv", 0],
      ["lb", 0],
      ["dj", 0],
      ["bi", 0],
      ["sr", 0],
      ["il", 0],
      ["ml", 0],
      ["sn", 0],
      ["gn", 0],
      ["zw", 0],
      ["pl", 0],
      ["mk", 0],
      ["py", 0],
      ["by", 0],
      ["cz", 0],
      ["bf", 0],
      ["na", 0],
      ["ly", 0],
      ["tn", 0],
      ["bt", 0],
      ["md", 0],
      ["ss", 0],
      ["bw", 0],
      ["bs", 0],
      ["nz", 0],
      ["cu", 0],
      ["ec", 0],
      ["au", 0],
      ["ve", 0],
      ["sb", 0],
      ["mg", 0],
      ["is", 0],
      ["eg", 0],
      ["kg", 0],
      ["np", 0]
    ];
    if (this.worldData?.length) {    
      this.worldmapSource=worldmapdata;
        for (let i = 0; i < this.worldmapSource.length; i++) {
          if (this.worldData.some(e => Object.keys(e)[0] === this.worldmapSource[i][0])) {
            var selectedData = Object.entries(this.worldData.find(e => Object.keys(e)[0] === this.worldmapSource[i][0]));
            this.worldmapSource[i]= selectedData[0];
          }
        }
        this.worldmapInput = this.worldmapSource;      
    } else{
      this.worldmapInput = worldmapdata;
    }
    if (this.LargeCounterParties?.length) {
      let data = [];
      let dataHead = Object.keys(this.LargeCounterParties[0]);
      data = this.LargeCounterParties.map((obj)=>[obj.score, obj.amount, obj.product]);
      data.unshift(dataHead);
      this.Horizontalstackbar1 = data;
    }
    if (this.HighTrafficCustomers?.length) {
      let data = [];
      let dataHead = Object.keys(this.HighTrafficCustomers[0]);
      data = this.HighTrafficCustomers.map((obj)=>[obj.score, obj.amount, obj.product]);
      data.unshift(dataHead);
      this.Horizontalstackbar2 = data;
    }

    
    if(this.chartCandleData.STP){
      this.optionscandlestick1 = this.chartCandleData.STP;
    }
    if(this.chartCandleData.Repair){
      this.optionscandlestick2 = this.chartCandleData.Repair;
    }
    if(this.chartCandleData.Sanctions){
      this.optionscandlestick3 = this.chartCandleData.Sanctions;
    }
    if(this.chartCandleData.Fraud){
      this.optionscandlestick4 = this.chartCandleData.Fraud;
    }
    if(this.chartCandleData.Credit){
      this.optionscandlestick5 =this.chartCandleData.Credit;
    }
  })

 
}



selectActive(index){

  this.active=this.data[index].name;
  this.data.forEach(element => {
    if(element.name==this.active){
       element.status="pending";
    }
    else{
       element.status="initial";
    }
  });
  
 }
 


}
