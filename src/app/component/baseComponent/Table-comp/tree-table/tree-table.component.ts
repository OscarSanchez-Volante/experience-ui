import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { KeyValue } from '@angular/common';
import {tableadminInterface,tabledataInterface} from '../../../../interface/adminuserdetail-interface'

@Component({
  selector: 'app-tree-table',
  templateUrl: './tree-table.component.html',
  styleUrls: ['./tree-table.component.scss']
})
export class TreeTableComponent implements OnInit {

  @Input() tableHead: string;
  @Input() tableValues: tableadminInterface[];
  @Input() moduleName: string;
  @Output() valueEvent = new EventEmitter<tabledataInterface>();
  public data:tabledataInterface={ind:'',module:''};
  @Input() contain:string|number;

  constructor() { }

  originalOrder = (a: KeyValue<number,string>, b: KeyValue<number,string>): number => {
    return 0;
  }
  public expandPayment = (event) =>{
    setTimeout(()=>{
      event['Expand'] = !event['Expand'];
    },200)
}
  ngOnInit() {
  }

  selected(i){
    this.data.ind=i;
    this.data.module=this.moduleName;
    this.valueEvent.emit(this.data)
  }

}
