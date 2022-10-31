import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {tableadminInterface,tabledataInterface} from '../../../../interface/adminuserdetail-interface'


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
public pageSize = 15;
public currentPage=1;
  collection = [];
  p = 1;
  @Input() tableHead: string;
  @Input() iconShow: any;
  @Input() tableValues: tableadminInterface[];
  @Input() moduleName: string;
  @Output() valueEvent = new EventEmitter<tabledataInterface>();
  public data:tabledataInterface={ind:'',module:''};
  @Input() contain:string|number;
  order: string;
  ShowData: string;
  searchText:string;
  sortDir: number;
  selectedColumn:number; 

  ngOnInit() {
    if(this.tableValues!=undefined){
      this.sortData(this.tableHead[0]['fieldName'])
    }
    
  }

  

  selected(i){
    this.data.ind=i;
    this.data.module=this.moduleName;
    this.valueEvent.emit(this.data)
  }

  sortData(fieldName){

    if(this.selectedColumn!=fieldName){
      this.sortDir=-1;
    }

    this.selectedColumn=fieldName;
  if (this.sortDir==1) {
    this.sortDir = -1;
  } else {
    this.sortDir = 1;
  }
 this.tableValues.sort((a, b) => {
      return (a[fieldName].toString() .localeCompare( b[fieldName].toString()))* this.sortDir ;
    });
  }
  constructor() {
    for (let i = 1; i <= 100; i++) {
      this.collection.push(`item ${i}`);
    }
  }
}
