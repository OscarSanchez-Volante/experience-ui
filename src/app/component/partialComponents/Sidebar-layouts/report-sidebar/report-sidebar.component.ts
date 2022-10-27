import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-report-sidebar',
  templateUrl: './report-sidebar.component.html',
  styleUrls: ['./report-sidebar.component.scss']
})
export class ReportSidebarComponent implements OnInit {
  
  public active:string;
  public activeIndex:number;
  value: string;
  constructor() { }

  ngOnInit(): void {
  }
  public accordianData = [
    {
      id: 11,
      header: "Total Volume",
      count: 0,
      color: "#facdcf",
    },
    {
      id: 12,
      header: " Peak Total/Hour",
      count: 0,
      color:"#facdcf",
    
    },
    {
      id: 13,
      header: "Peak Total/Day",
      count: 5,
      color: "#d9eed1",
    },
    {
      id: 14,
      header: "Peak Total/Account",
      count: 5,
      color: "#d9eed1",
    },
  ];
save()
{
  if (sessionStorage.getItem("autosave")) {
    this.value = sessionStorage.getItem("autosave");
  }
}
}
