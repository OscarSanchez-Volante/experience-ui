import { Component, OnInit } from '@angular/core';
import { timelinetabs } from 'src/app/interface/timelineTap';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-timebar',
  templateUrl: './timebar.component.html',
  styleUrls: ['./timebar.component.scss']
})
export class TimebarComponent implements OnInit {

  public timeLineData1:timelinetabs[]=[{"name":"Request Submitted","status":"pending","id":"1","link":"SIMgetting"},{"name":"Setup In-Progress","status":"initial","id":"2","link":"railsSetup"},{"name":"Configured, ready to get started","status":"initial","id":"3","link":"simStep3-11.0"},]
  public active:string;
  public activeIndex:number;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
}
