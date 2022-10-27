import { Component, OnInit ,Input,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-sidebar-table',
  templateUrl: './sidebar-table.component.html',
  styleUrls: ['./sidebar-table.component.scss'] 
})
export class SidebarTableComponent implements OnInit {
  Array: string[] = [];
  isfrmChecked:any;
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
  
  }
 
