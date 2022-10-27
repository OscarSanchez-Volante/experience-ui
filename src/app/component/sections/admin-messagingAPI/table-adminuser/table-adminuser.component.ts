import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table-adminuser',
  templateUrl: './table-adminuser.component.html',
  styleUrls: ['./table-adminuser.component.scss']
})
export class TableAdminuserComponent implements OnInit {
  isfrmChecked:any;
  Array: string[] = [];
  sortDirection=false;

    collection = [];
    p = 1;
    @Input() tableHead: any;
    @Input() iconShow: any;
    @Input() tableValues: any;
    @Input() moduleName: string;
    @Output() valueEvent = new EventEmitter<any>();
    public data:any={};
    @Input() contain: any;
    public currentUrl;
    sortDir: any;
    ShowData: any;
    selectedColumn:any;
    searchText;
    ngOnInit() {
      this.currentUrl = this.router.url;      
    }
  
    selected(i){
      this.data.ind=i;
      this.data.module=this.moduleName;
      this.valueEvent.emit(this.data)
    }

    constructor(private router:Router) {
      for (let i = 1; i <= 100; i++) {
        this.collection.push(`item ${i}`);
      }
    }
    componentMethodName(event: any, isChecked: boolean) 
    {
      if (isChecked) {
        this.Array.push(event.target.value)
      }
      else {
        let index = this.Array.indexOf(event.target.value);
        this.Array.splice(index, 1);
      }
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
}