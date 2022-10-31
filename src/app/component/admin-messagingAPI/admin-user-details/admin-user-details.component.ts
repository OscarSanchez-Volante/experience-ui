import { Component, Input, OnInit } from '@angular/core';
import{userdetailInterface,userContentInterface} from '../../../interface/adminuserdetail-interface';
import { JsonHttpService } from 'src/app/services/json-http/json-http.service';

@Component({
  selector: 'app-admin-user-details',
  templateUrl: './admin-user-details.component.html',
  styleUrls: ['./admin-user-details.component.scss']
})
export class AdminUserDetailsComponent implements OnInit {
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
