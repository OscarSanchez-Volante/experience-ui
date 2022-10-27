import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-bar-chart1',
  templateUrl: './bar-chart1.component.html',
  styleUrls: ['./bar-chart1.component.scss']
})
export class BarChart1Component implements OnInit , OnChanges {
  @Input() events: Observable<any>;
@Input() changeChartdata:any;
  options: any;

  ngOnInit(): void {

    this.changeData('seven')
  } 
 ngOnChanges(){
this.changeData(this.changeChartdata);
 }
  changeData(data:string){

    switch (data) {
      case "seven":
        this.sevenDaysData();
        break;
        case 'fifteen':
          this.fifteenDaysData();
          break;
    
      default:
        break;
    }
  }


    sevenDaysData(){
      this.options = {
        legend: {
          show:''
        },
        tooltip: {},
        dataset: {
          dimensions: ['product', 'LargestTransactions', 'OutofHours', 'LargestCounterparties','HighestTrafficCustomers', 'NewCounterPerties'],
          source: [
            { product: '27 june', LargestTransactions : 43.3, OutofHours: 35.8, LargestCounterparties: 23.7 ,HighestTrafficCustomers: 47.7 , NewCounterPerties:20},
            { product: '28 june', LargestTransactions : 33.3, OutofHours: 25.8, LargestCounterparties: 13.7 ,HighestTrafficCustomers: 27.7 , NewCounterPerties:12},
            { product: '29 june',LargestTransactions : 13.3, OutofHours: 25.8, LargestCounterparties: 43.7 ,HighestTrafficCustomers: 33.7 , NewCounterPerties:47},
            { product: '30 june', LargestTransactions : 23.3, OutofHours: 35.8, LargestCounterparties: 23.7 ,HighestTrafficCustomers: 43.7 , NewCounterPerties:37 },
            { product: '1 july',LargestTransactions : 43.3, OutofHours: 25.8, LargestCounterparties: 23.7 ,HighestTrafficCustomers: 13.7 , NewCounterPerties:47 },
            { product: '2 july',LargestTransactions : 43.3, OutofHours: 25.8, LargestCounterparties: 23.7 ,HighestTrafficCustomers: 13.7 , NewCounterPerties:47 },
            { product: '3 july',LargestTransactions : 23.3, OutofHours: 35.8, LargestCounterparties: 23.7 ,HighestTrafficCustomers: 43.7 , NewCounterPerties:37 }
  
          ]
        },
        xAxis: { type: 'category',
        axisLine:{
          show:false,
        },
        axisTick:{
          show:false
        },
        axisLabel:{
          show:true,
          fontWeight:"bold"
        },
      },
        yAxis: {
          axisLine:{
            show:false,
          },
          axisTick:{
            show:false
          },
          axisLabel:{
            show:true,
            showMaxLabel:true,
            fontWeight:"bold",
            color:'#a3a3a3'
          },      
        },
        series: [{ type: 'bar',          
        color:'#ffc14a',
      }, { type: 'bar' ,
      color:'#858fd4',
    }, { type: 'bar',
    color:'#ff966c',
  },{ type: 'bar',
  color:'#8acf8b',
  },{ type: 'bar',
  color:'#6ebcfa',
  }]
      };
    }
  


  fifteenDaysData(){
    this.options = {
      legend: {
        show:''
      },
      tooltip: {},
      dataset: {
        dimensions: ['product', 'LargestTransactions', 'OutofHours', 'LargestCounterparties','HighestTrafficCustomers', 'NewCounterPerties'],
        source: [
          { product: '1 june', LargestTransactions : 43.3, OutofHours: 35.8, LargestCounterparties: 23.7 ,HighestTrafficCustomers: 47.7 , NewCounterPerties:20},
          { product: '2 june', LargestTransactions : 33.3, OutofHours: 25.8, LargestCounterparties: 13.7 ,HighestTrafficCustomers: 27.7 , NewCounterPerties:12},
          { product: '3 june',LargestTransactions : 13.3, OutofHours: 25.8, LargestCounterparties: 43.7 ,HighestTrafficCustomers: 33.7 , NewCounterPerties:47},
          { product: '4 june', LargestTransactions : 23.3, OutofHours: 35.8, LargestCounterparties: 23.7 ,HighestTrafficCustomers: 43.7 , NewCounterPerties:37 },
          { product: '5 july',LargestTransactions : 43.3, OutofHours: 25.8, LargestCounterparties: 23.7 ,HighestTrafficCustomers: 13.7 , NewCounterPerties:47 },
          { product: '6 july',LargestTransactions : 43.3, OutofHours: 25.8, LargestCounterparties: 23.7 ,HighestTrafficCustomers: 13.7 , NewCounterPerties:47 },
          { product: '7 july',LargestTransactions : 23.3, OutofHours: 35.8, LargestCounterparties: 23.7 ,HighestTrafficCustomers: 43.7 , NewCounterPerties:37 },
          { product: '8 june', LargestTransactions : 43.3, OutofHours: 35.8, LargestCounterparties: 23.7 ,HighestTrafficCustomers: 47.7 , NewCounterPerties:20},
          { product: '9 june', LargestTransactions : 33.3, OutofHours: 25.8, LargestCounterparties: 13.7 ,HighestTrafficCustomers: 27.7 , NewCounterPerties:12},
          { product: '10 june',LargestTransactions : 13.3, OutofHours: 25.8, LargestCounterparties: 43.7 ,HighestTrafficCustomers: 33.7 , NewCounterPerties:47},
          { product: '11 june', LargestTransactions : 23.3, OutofHours: 35.8, LargestCounterparties: 23.7 ,HighestTrafficCustomers: 43.7 , NewCounterPerties:37 },
          { product: '12 july',LargestTransactions : 43.3, OutofHours: 25.8, LargestCounterparties: 23.7 ,HighestTrafficCustomers: 13.7 , NewCounterPerties:47 },
          { product: '13 july',LargestTransactions : 43.3, OutofHours: 25.8, LargestCounterparties: 23.7 ,HighestTrafficCustomers: 13.7 , NewCounterPerties:47 },
          { product: '14 july',LargestTransactions : 23.3, OutofHours: 35.8, LargestCounterparties: 23.7 ,HighestTrafficCustomers: 43.7 , NewCounterPerties:37 }, { product: '27 june', LargestTransactions : 43.3, OutofHours: 35.8, LargestCounterparties: 23.7 ,HighestTrafficCustomers: 47.7 , NewCounterPerties:20},
          { product: '15 june', LargestTransactions : 33.3, OutofHours: 25.8, LargestCounterparties: 13.7 ,HighestTrafficCustomers: 27.7 , NewCounterPerties:12},
         ]
      },
      xAxis: { type: 'category',
      axisLine:{
        show:false,
      },
      axisTick:{
        show:false
      },
      axisLabel:{
        show:true,
        fontWeight:"bold"
      },
    },
      yAxis: {
        axisLine:{
          show:false,
        },
        axisTick:{
          show:false
        },
        axisLabel:{
          show:true,
          showMaxLabel:true,
          fontWeight:"bold",
          color:'#a3a3a3'
        },      
      },
      series: [{ type: 'bar',          
      color:'#ffc14a',
    }, { type: 'bar' ,
    color:'#858fd4',
  }, { type: 'bar',
  color:'#ff966c',
},{ type: 'bar',
color:'#8acf8b',
},{ type: 'bar',
color:'#6ebcfa',
}]
    };
  }
}

