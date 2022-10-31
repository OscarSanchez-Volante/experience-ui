import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { JsonHttpService } from 'src/app/services/json-http/json-http.service';
import{Contain} from '../../../../interface/nodata-interface';
import{adminuserHeadInterface} from '../../../../interface/adminuserdetail-interface'


@Component({
  selector: 'app-nodata-msgftudashboard',
  templateUrl: './nodata-msgftudashboard.component.html',
  styleUrls: ['./nodata-msgftudashboard.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NodataMsgftudashboardComponent implements OnInit {

  public tableHeadNodataMessage:adminuserHeadInterface;
  public containFtuMessage:Contain; 
  public containTop:Contain;
  public containMessage:Contain;
  public containcreator:Contain;
  public containTransformer:Contain;
  public containValidator:Contain;
  public containRequestMessage:Contain;
  constructor(private jsonhttp: JsonHttpService) { }


  ngOnInit(): void {
    this.jsonhttp.getnodataPaas("assets/data/admin.json").subscribe(data => {
      this.tableHeadNodataMessage = data['tableHeadNodataMessage'],
        this.containFtuMessage = data['containFtuMessage'],
        this.containTop = data['containTop'],
        this.containMessage = data['containMessage'],
        this.containcreator = data['containcreator'],
        this.containTransformer = data['containTransformer'],
        this.containValidator = data['containValidator'],
        this.containRequestMessage = data['containRequestMessage']
    })
  }
}
