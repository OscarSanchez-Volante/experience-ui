import { Component, OnInit,Input } from '@angular/core';
import { Router} from '@angular/router';
import {paymentrailsInterface} from '../../../../interface/basecomponent-interface'
@Component({
  selector: 'app-payment-rails',
  templateUrl: './payment-rails.component.html',
  styleUrls: ['./payment-rails.component.scss']
})
export class PaymentRailsComponent implements OnInit {
  @Input("data") data: paymentrailsInterface;
  @Input("gridId") grid : string;
  @Input("Id") id : number;
  public currentUrl;

  options:any;
  constructor(private router: Router) { }
  ngOnInit(): void {
    this.currentUrl = this.router.url;
    this.options = {
      xAxis: {
        type: 'category',
        boundaryGap: false,
        axisLabel:{
        show:false
        },
        axisLine:{
        show:false
        },
        axisTick:{
        show:false
        },
        splitLine:{
        show:true
        },
        data: ['Mon', 'Tue', 'Wed','Mon', 'Tue', 'Wed','Mon', 'Tue', 'Wed']
      },
      yAxis: {
        type: 'value',
        splitLine:{
        show:false
        }
      },
      series: [
        {
        data: [20,45,30,90,50,10,78,38,60],
        type: 'line',
        smooth: true
        }
      ]
      };
  
  }
 
}
