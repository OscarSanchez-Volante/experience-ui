import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-mainpage-selectservice',
  templateUrl: './mainpage-selectservice.component.html',
  styleUrls: ['./mainpage-selectservice.component.scss']
})
export class MainpageSelectserviceComponent implements OnInit {

  @Input('selectValue')  selectValue:string;
  
  @Output() newItemEvent = new EventEmitter<string>();
  value:string="ADD PAYMENT SERVICES";

  constructor() { 
  }
  ngOnInit(): void {
  }
  sendData(){
    this.newItemEvent.emit(this.value);
  }
}