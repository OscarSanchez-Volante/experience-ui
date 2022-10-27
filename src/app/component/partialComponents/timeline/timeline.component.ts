import { Component, OnInit } from '@angular/core';
import { timelinetabs } from 'src/app/interface/timelineTap';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {
  
  public timeLineData:timelinetabs[]=[{"name":"Select Service","status":"pending","id":"1"},{"name":"Setup","status":"initial","id":"2"},{"name":"Review Order","status":"initial","id":"3"}]
  public active:String="Select Service";

  constructor() { }

  ngOnInit(): void {
    
  }
   selectActive(name){

  }

}
