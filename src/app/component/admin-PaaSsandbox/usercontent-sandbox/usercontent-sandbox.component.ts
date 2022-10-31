import { Component, OnInit } from '@angular/core';
import{adminuserContentInterface,adminuserHeadInterface} from '../../../interface/adminuserdetail-interface';

import { JsonHttpService } from 'src/app/services/json-http/json-http.service';
@Component({
  selector: 'app-usercontent-sandbox',
  templateUrl: './usercontent-sandbox.component.html',
  styleUrls: ['./usercontent-sandbox.component.scss']
})
export class UsercontentSandboxComponent implements OnInit {
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
