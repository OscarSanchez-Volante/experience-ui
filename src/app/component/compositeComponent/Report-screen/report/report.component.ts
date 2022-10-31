import { Component, OnInit } from '@angular/core';
import { JsonHttpService } from 'src/app/services/json-http/json-http.service';
@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {

  constructor(private jsonhttp:JsonHttpService) { }
  public tableHead2;
  public tableValues2;
public tableHead4;

  ngOnInit(): void {
    this.jsonhttp.getreport("assets/data/admin.json").subscribe(data => {
      this.tableHead2 = data['tableReportHead']
      this.tableValues2 = data['tableReportValues']
      this.tableHead4 = data['tableReportHead2']
    })
  }

}
