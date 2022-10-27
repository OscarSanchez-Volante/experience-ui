import { Component, OnInit } from '@angular/core';
import {treeInputvalidators} from '@inputs/treeview-inputs';

@Component({
  selector: 'app-part-one',
  templateUrl: './partOne.component.html',
  styleUrls: ['./partOne.component.scss']
})
export class PartOneComponent implements OnInit {

  treeInput:Array <any>=treeInputvalidators;
public treeView: any;
  constructor() { }

  ngOnInit(): void {
this.treeView= this.treeInput
  }

}
