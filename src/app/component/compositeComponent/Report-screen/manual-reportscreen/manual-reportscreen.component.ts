import { Component, OnInit } from '@angular/core';
import { JsonHttpService } from 'src/app/services/json-http/json-http.service';
@Component({
  selector: 'app-manual-reportscreen',
  templateUrl: './manual-reportscreen.component.html',
  styleUrls: ['./manual-reportscreen.component.scss']
})
export class ManualReportscreenComponent implements OnInit {

  public tableHead2;

  public tableValues2;
  constructor(private jsonhttp:JsonHttpService) { }
 

  ngOnInit(): void {
    this.jsonhttp.getsignup("assets/data/admin.json").subscribe(data => {
      this.tableHead2 = data['tableManualReportHead']
      this.tableValues2 = data['tableManualReportValue']
    })
  }

}
