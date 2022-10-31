import { Component, OnInit,Input } from '@angular/core';
import{adminuserHeadInterface,adminuserContentInterface} from '../../../interface/adminuserdetail-interface';

import { JsonHttpService } from 'src/app/services/json-http/json-http.service';

@Component({
  selector: 'app-adminuser-content',
  templateUrl: './adminuser-content.component.html',
  styleUrls: ['./adminuser-content.component.scss']
})
export class AdminuserContentComponent implements OnInit {
  public tableadminHead2: adminuserHeadInterface[];
  public tableadminValues2: adminuserContentInterface[];

  constructor(private jsonhttp:JsonHttpService) { }

  ngOnInit(): void {

    this.jsonhttp.getadminUserContent("assets/data/admin.json").subscribe(data => {
      this.tableadminHead2 = data['adminuserTablehead'];
      this.tableadminValues2 = data['adminuserTablecont'];
    })
   

  }
}
