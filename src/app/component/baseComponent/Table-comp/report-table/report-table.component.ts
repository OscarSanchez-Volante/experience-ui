import { Component, OnInit,Input,EventEmitter,Output } from '@angular/core';
import {tableadminInterface,tabledataInterface} from '../../../../interface/adminuserdetail-interface'

@Component({
  selector: 'app-report-table',
  templateUrl: './report-table.component.html',
  styleUrls: ['./report-table.component.scss']
})
export class ReportTableComponent implements OnInit {
  @Input() tableHead: string;
  @Input() tableValues: tableadminInterface;
  @Input() moduleName: string;
  @Output() valueEvent = new EventEmitter<tabledataInterface>();
  public data:tabledataInterface={ind:'',module:''};
  @Input() contain:  string|number;

  constructor() { }

  ngOnInit() {
  }

  selected(i){
    this.data.ind=i;
    this.data.module=this.moduleName;
    this.valueEvent.emit(this.data)
  }

}
