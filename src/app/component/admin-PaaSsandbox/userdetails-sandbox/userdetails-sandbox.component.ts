import { Component, OnInit } from '@angular/core';
import{userdetailInterface,userContentInterface} from '../../../interface/adminuserdetail-interface';

import { JsonHttpService } from 'src/app/services/json-http/json-http.service';
@Component({
  selector: 'app-userdetails-sandbox',
  templateUrl: './userdetails-sandbox.component.html',
  styleUrls: ['./userdetails-sandbox.component.scss']
})
export class UserdetailsSandboxComponent implements OnInit {
  public tabledetailsHead3: userdetailInterface[];
  public tabledetailValues3: userContentInterface[];

  constructor(private jsonhttp:JsonHttpService) { }

  ngOnInit(): void {
    this.jsonhttp.getadminUser("assets/data/admin.json").subscribe(data => {
      this.tabledetailsHead3 = data['userDetailHead'];
      this.tabledetailValues3 = data['userDetailcont'];
    })
  
  }
}
