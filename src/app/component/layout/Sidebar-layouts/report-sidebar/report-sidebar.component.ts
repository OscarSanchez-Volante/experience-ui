import { Component, OnInit,Input } from '@angular/core';
import { JsonHttpService } from 'src/app/services/json-http/json-http.service';

@Component({
  selector: 'app-report-sidebar',
  templateUrl: './report-sidebar.component.html',
  styleUrls: ['./report-sidebar.component.scss']
})
export class ReportSidebarComponent implements OnInit {
  public reportSidebarData ;
  public active:string;
  public activeIndex:number;
  public accordianData: any ;
  value: string;
  public railshead= JSON.parse(sessionStorage.getItem("railsheader"));
  constructor(private jsonhttp:JsonHttpService) { }

  ngOnInit(): void {
    this.jsonhttp.getreportSidbar("assets/data/admin.json").subscribe(data => {
      this.accordianData = data['reportSidebarData']
    
    })
  }

  
save()
{
  if (sessionStorage.getItem("autosave")) {
    this.value = sessionStorage.getItem("autosave");
  }
}
}
