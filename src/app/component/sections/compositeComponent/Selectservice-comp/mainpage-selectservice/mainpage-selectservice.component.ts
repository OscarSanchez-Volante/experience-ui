import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-mainpage-selectservice',
  templateUrl: './mainpage-selectservice.component.html',
  styleUrls: ['./mainpage-selectservice.component.scss']
})
export class MainpageSelectserviceComponent implements OnInit {

  @Input('selectValue')  selectValue:any;
  
  @Output() newItemEvent = new EventEmitter<any>();
  value:string="ADD PAYMENT SERVICES";

  constructor(private router:Router) { 
  }
  ngOnInit(): void {
  }
  sendData(){
    this.newItemEvent.emit(this.value);
  }
}