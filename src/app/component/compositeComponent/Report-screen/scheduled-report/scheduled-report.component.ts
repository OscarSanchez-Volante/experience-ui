import { Component, OnInit } from '@angular/core';
import { JsonHttpService } from 'src/app/services/json-http/json-http.service';
@Component({
  selector: 'app-scheduled-report',
  templateUrl: './scheduled-report.component.html',
  styleUrls: ['./scheduled-report.component.scss']
})
export class ScheduledReportComponent implements OnInit {

  
  public tableHead2;

  public tableValues2;
  constructor(private jsonhttp:JsonHttpService) { }
 

  ngOnInit(): void {
    this.jsonhttp.getscheduledReport("assets/data/admin.json").subscribe(data => {
      this.tableHead2 = data['tableScheduledReportHead'];
      this.tableValues2 = data['tableScheduledReportValues'];
    })
  }

}
