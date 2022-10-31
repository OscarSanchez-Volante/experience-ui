import { Component, OnInit } from '@angular/core';
import { JsonHttpService } from 'src/app/services/json-http/json-http.service';
import{adminuserHeadInterface,adminuserContentInterface} from '../../../../interface/adminuserdetail-interface'

@Component({
  selector: 'app-notification-screen',
  templateUrl: './notification-screen.component.html',
  styleUrls: ['./notification-screen.component.scss']
})
export class NotificationScreenComponent implements OnInit {
  public tableNotificationHead:adminuserHeadInterface;
  public tableNotificationValues:adminuserContentInterface;
  constructor(private jsonhttp:JsonHttpService) { }

  ngOnInit(): void {
      this.jsonhttp.getnotification("assets/data/admin.json").subscribe(data => {
        this.tableNotificationHead = data['tableNotificationHead']
        this.tableNotificationValues = data['tableNotificationValues']
      })
  }
  
}
