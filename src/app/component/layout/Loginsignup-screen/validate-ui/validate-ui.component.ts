import { Component, OnInit } from '@angular/core';
import { JsonHttpService } from 'src/app/services/json-http/json-http.service';
import{validateUIInteface} from '../../../../interface/layout-interface'
@Component({
  selector: 'app-validate-ui',
  templateUrl: './validate-ui.component.html',
  styleUrls: ['./validate-ui.component.scss']
})
export class ValidateUIComponent implements OnInit {

  constructor(private jsonhttp:JsonHttpService) { }
  public validateUI:validateUIInteface;

  ngOnInit(): void {
    this.jsonhttp.getvalidateUi("assets/data/admin.json").subscribe(data => {
      this.validateUI = data['dataValidateUi'][0]
    })
  }

}
