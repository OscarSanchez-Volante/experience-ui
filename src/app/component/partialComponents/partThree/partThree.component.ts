import { Component, OnInit,OnChanges,Input } from '@angular/core';
import { treeviewcreator } from '@inputs/creator';

@Component({
  selector: 'app-part-three',
  templateUrl: './partThree.component.html',
  styleUrls: ['./partThree.component.scss']
})
export class PartThreeComponent implements OnInit {
  treeInput2:Array <any>=treeviewcreator;
  public treeView2: any;
    constructor() { }

    ngOnInit(): void {

  this.treeView2= this.treeInput2;
    }

  }
