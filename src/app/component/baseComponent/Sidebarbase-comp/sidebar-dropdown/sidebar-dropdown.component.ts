import { Component, OnInit,Input } from '@angular/core';
import { JsonHttpService } from 'src/app/services/json-http/json-http.service';
import {sidebardropdownInterface} from '../../../../interface/basecomponent-interface'
@Component({
  selector: 'app-sidebar-dropdown',
  templateUrl: './sidebar-dropdown.component.html',
  styleUrls: ['./sidebar-dropdown.component.scss']
})
export class SidebarDropdownComponent implements OnInit {
   @Input("data") data: sidebardropdownInterface;
  public tableHead2;
  public tableValues2;
  constructor(private jsonhttp:JsonHttpService) { }

  ngOnInit(): void {
    this.jsonhttp.getsidebarReport("assets/data/admin.json").subscribe(data => {
      this.tableHead2 = data['tableInputSizingHead'];
      this.tableValues2 = data['tableInputSizingValues'];
    })
  }
  

}
