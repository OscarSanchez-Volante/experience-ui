import { Component, OnInit } from '@angular/core';
import{Contain} from '../../../../interface/nodata-interface';
import{adminuserHeadInterface} from '../../../../interface/adminuserdetail-interface'
import { JsonHttpService } from 'src/app/services/json-http/json-http.service';
@Component({
  selector: 'app-sandbox-nodatascreen',
  templateUrl: './sandbox-nodatascreen.component.html',
  styleUrls: ['./sandbox-nodatascreen.component.scss']
})
export class SandboxNodatascreenComponent implements OnInit {

  public tableHead2:adminuserHeadInterface;
public railTitle= (sessionStorage.railTitle); 
public containSandbox:Contain;
  constructor(private jsonhttp:JsonHttpService) { }

  ngOnInit(): void {
	this.jsonhttp.getsandboxNodata("assets/data/admin.json").subscribe(data => {
		this.tableHead2 = data['tableSandboxNodataHead']
this.containSandbox=data['containSandbox']
	  })
 }

}
