import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-messagereport-sidebar',
  templateUrl: './messagereport-sidebar.component.html',
  styleUrls: ['./messagereport-sidebar.component.scss']
})
export class MessagereportSidebarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public accordianData = [
    {
      id: 21,
      header: "Monthly Message Volume",
      count: 0,
      color: "#facdcf",
    }
  ];
}
