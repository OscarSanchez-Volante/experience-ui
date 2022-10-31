import { Component, OnInit } from '@angular/core';
import { JsonHttpService } from 'src/app/services/json-http/json-http.service';
import {partoneInterface} from '../../../interface/basecomponent-interface'
@Component({
  selector: 'app-part-one',
  templateUrl: './partOne.component.html',
  styleUrls: ['./partOne.component.scss']
})
export class PartOneComponent implements OnInit {

public treeView: partoneInterface[];
  constructor(private jsonhttp:JsonHttpService) { }

  ngOnInit(): void {
    this.jsonhttp.gettreeinputvalidators("assets/data/admin.json").subscribe(data => {
      this.treeView = data['treeInputvalidators']
     })
  }

}
