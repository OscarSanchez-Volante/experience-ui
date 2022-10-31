import { Component, OnInit} from '@angular/core';
import {partoneInterface} from '../../../interface/basecomponent-interface'
import { JsonHttpService } from 'src/app/services/json-http/json-http.service';
@Component({
  selector: 'app-part-two',
  templateUrl: './partTwo.component.html',
  styleUrls: ['./partTwo.component.scss']
})
export class PartTwoComponent implements OnInit {
  public treeView1:partoneInterface[];
    constructor(private jsonhttp:JsonHttpService) { }
  
    ngOnInit(): void {
      this.jsonhttp.gettreeinputtransformer("assets/data/admin.json").subscribe(data => {
        this.treeView1 = data['treeInputtransformer']
       })
    }
  
  }
  