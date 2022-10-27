import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Select } from 'src/app/interface/select-service-interface.service';

@Component({
    selector: 'app-select-service',
  templateUrl: './select-service.component.html',
  styleUrls: ['./select-service.component.scss']
})
export class SelectServiceComponent implements OnInit {
  @Input('selectValue')  selectValue:any;
  
  @Output() newItemEvent = new EventEmitter<any>();
  value:string="";

  constructor() { 
  }
  ngOnInit(): void {
    if(sessionStorage.getItem('service')){
      this.value=sessionStorage.getItem('service');
    }
  }
  sendData(){
    this.newItemEvent.emit(this.value);
  }
}
