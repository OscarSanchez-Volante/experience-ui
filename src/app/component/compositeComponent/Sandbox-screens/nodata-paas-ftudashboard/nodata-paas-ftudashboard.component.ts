import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { JsonHttpService } from 'src/app/services/json-http/json-http.service';
import{Contain} from '../../../../interface/nodata-interface';
import{adminuserHeadInterface} from '../../../../interface/adminuserdetail-interface'
@Component({
  selector: 'app-nodata-paas-ftudashboard',
  templateUrl: './nodata-paas-ftudashboard.component.html',
  styleUrls: ['./nodata-paas-ftudashboard.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NodataPaasFtudashboardComponent implements OnInit {
  public tableHead2:adminuserHeadInterface;
  public containRails:Contain;
  public containPaymentservices:Contain;
  public containNotify:Contain;
  public containTable:Contain; 
  public containRequest:Contain;
  constructor(private jsonhttp: JsonHttpService) { }

  ngOnInit(): void {
    this.jsonhttp.getnodataPaas("assets/data/admin.json").subscribe(data => {
      this.tableHead2 = data['tableNodataPaasHead'],
        this.containRails = data['containRails'],
        this.containPaymentservices = data['containPaymentservices'],
        this.containNotify = data['containNotify'],
        this.containTable = data['containTable'],
        this.containRequest = data['containRequest']
    })
  }



}
