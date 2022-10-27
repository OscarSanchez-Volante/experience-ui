import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-messagesetup-table',
  templateUrl: './messagesetup-table.component.html',
  styleUrls: ['./messagesetup-table.component.scss']
})
export class MessagesetupTableComponent implements OnInit {

  public pageSize = 5;
  public currentPage=1;
    collection = [];
    p = 1;
    @Input() tableHead: any;
    @Input() iconShow: any;
    @Input() tableValues: any;
    @Input() moduleName: string;
    @Output() valueEvent = new EventEmitter<any>();
    public data:any={};
    @Input() contain: any;
    order: any;
    ShowData: any;
    sortDir: any;
    selectedColumn:any;
  Value: any;
 
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
    getSliderValue(event) {
      this.Value=event.target.value;
   }
    constructor() {
      for (let i = 1; i <= 100; i++) {
        this.collection.push(`item ${i}`);
      }
      
    }
  }