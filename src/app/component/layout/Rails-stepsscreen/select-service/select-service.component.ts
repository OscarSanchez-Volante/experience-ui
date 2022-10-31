import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-select-service',
  templateUrl: './select-service.component.html',
  styleUrls: ['./select-service.component.scss']
})
export class SelectServiceComponent implements OnInit {
  @Input('selectValue')  selectValue:string;
  
  @Output() newItemEvent = new EventEmitter<string>();
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
