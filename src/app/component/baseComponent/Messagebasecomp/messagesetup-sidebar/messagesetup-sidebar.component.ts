import { Component, OnInit,Input } from '@angular/core';
import { JsonHttpService } from 'src/app/services/json-http/json-http.service';
import{msgsetupInterface} from '../../../../interface/basecomponent-interface'
@Component({
  selector: 'app-messagesetup-sidebar',
  templateUrl: './messagesetup-sidebar.component.html',
  styleUrls: ['./messagesetup-sidebar.component.scss']
})
export class MessagesetupSidebarComponent implements OnInit {

 @Input("data") data: msgsetupInterface;
  public tableHead2;
  public tableValues2;
  constructor(private jsonhttp:JsonHttpService) { }
  
  ngOnInit(): void {
    this.jsonhttp.getMessageSetup("assets/data/admin.json").subscribe(data => {
      this.tableHead2 = data['tableMessageSetupHead'];
      this.tableValues2 = data['tableMessageSetupValues'];
    })
  }

}
