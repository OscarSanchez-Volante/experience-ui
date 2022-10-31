import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import {tableadminInterface,tabledataInterface} from '../../../interface/adminuserdetail-interface'

@Component({
  selector: 'app-admintable-sandbox',
  templateUrl: './admintable-sandbox.component.html',
  styleUrls: ['./admintable-sandbox.component.scss']
})
export class AdmintableSandboxComponent implements OnInit {
  isfrmChecked:boolean;
  Array: string[] = [];
  sortDirection=false;

    collection = [];
    p = 1;
    @Input() tableHead: string;
    @Input() tableValues: tableadminInterface[];
    @Input() moduleName: string;
    @Output() valueEvent = new EventEmitter<tabledataInterface>();
    public data:tabledataInterface={ind:'',module:''};
    @Input() contain: string|number;
    public currentUrl;
    sortDir: number;
    ShowData: string|number;
    selectedColumn:string|number;
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
    componentMethodName(event:Event, isChecked: boolean) 
    {
      if (isChecked) {
        this.Array.push((event.target as HTMLInputElement).value)
      }
      else {
        let index = this.Array.indexOf((event.target as HTMLInputElement).value);
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

}
}