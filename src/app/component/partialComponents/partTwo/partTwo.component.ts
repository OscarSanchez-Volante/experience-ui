import { Component, OnInit, Input } from '@angular/core';
import { treeInputtransformer } from '@inputs/transformer-api-transformer.service';

@Component({
  selector: 'app-part-two',
  templateUrl: './partTwo.component.html',
  styleUrls: ['./partTwo.component.scss']
})
export class PartTwoComponent implements OnInit {

  treeInput1:Array <any>=treeInputtransformer;
  public treeView1: any;
    constructor() { }

    ngOnInit(): void {
  this.treeView1= this.treeInput1
    }

  }
