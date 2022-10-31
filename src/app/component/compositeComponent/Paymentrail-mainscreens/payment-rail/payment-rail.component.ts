import { Component, OnInit } from '@angular/core';
import {selectedtitleInterface} from '../../../../interface/select-service-interface.service'
import { JsonHttpService } from 'src/app/services/json-http/json-http.service';
import{containinputInterface} from '../../../../interface/composite-interface';
@Component({
  selector: 'app-payment-rail',
  templateUrl: './payment-rail.component.html',
  styleUrls: ['./payment-rail.component.scss']
})
export class PaymentRailComponent implements OnInit {
	public selected:selectedtitleInterface={"title":sessionStorage.getItem('selectedAddOn')};

	public accordianData:string ;
  public tableHead2:string;
  constructor(private jsonhttp:JsonHttpService) { }
  public contain:containinputInterface;
  ngOnInit(): void {
	this.jsonhttp.getpaymentRail("assets/data/admin.json").subscribe(data => {
		this.contain = data['containPaymentRail3'][0];
		this.tableHead2 = data['tablePaymentRail3Head'];
		this.accordianData = data['accordianPaymentRail3Data']
	  })
  } 

}
