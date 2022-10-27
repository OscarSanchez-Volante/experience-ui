import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {
  @Input() data;
  @Input() active;
  constructor() { }

  ngOnInit(): void { 
    
    }
    selectActive(index){
    
      this.active=this.data[index].name;
      this.data.forEach(element => {
        if(element.name==this.active){
           element.status="pending";
        }
        else{
           element.status="initial";
        }
      });
      
     }
  }

