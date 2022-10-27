import { Component, OnInit,Input,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-report-table',
  templateUrl: './report-table.component.html',
  styleUrls: ['./report-table.component.scss']
})
export class ReportTableComponent implements OnInit {
  @Input() tableHead: string;
  @Input() tableValues: string;
  @Input() moduleName: string;
  @Output() valueEvent = new EventEmitter<any>();
  public data:any={};
  @Input() contain: any;

  constructor() { }

  ngOnInit() {
  }

  selected(i){
    this.data.ind=i;
    this.data.module=this.moduleName;
    this.valueEvent.emit(this.data)
  }

}
