import { Component, OnInit} from '@angular/core';
import {partoneInterface} from '../../../interface/basecomponent-interface'
import { JsonHttpService } from 'src/app/services/json-http/json-http.service';
@Component({
  selector: 'app-part-three',
  templateUrl: './partThree.component.html',
  styleUrls: ['./partThree.component.scss']
})
export class PartThreeComponent implements OnInit {
  public treeView2: partoneInterface[];
    constructor(private jsonhttp:JsonHttpService) { }
  
    ngOnInit(): void {
      this.jsonhttp.gettreeinputcreator("assets/data/admin.json").subscribe(data => {
        this.treeView2 = data['treeviewcreator']
       })
    }
  
  }