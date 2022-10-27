import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
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
