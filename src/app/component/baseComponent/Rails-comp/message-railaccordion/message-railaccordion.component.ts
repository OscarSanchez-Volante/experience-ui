import { Output, EventEmitter ,Component, Input, OnInit  } from '@angular/core';
import {messagerailaccordianInterface} from '../../../../interface/basecomponent-interface'
@Component({
  selector: 'app-message-railaccordion',
  templateUrl: './message-railaccordion.component.html',
  styleUrls: ['./message-railaccordion.component.scss']
})
export class MessageRailaccordionComponent implements OnInit {
public selectedRails;
@Input("data") data: messagerailaccordianInterface;

@Output() newItemEvent = new EventEmitter<string|number>();
public currentUrl;

public title=sessionStorage.getItem('selectedAddOn')
 constructor() { }
 myFunc(railTitle){
   sessionStorage.railTitle=railTitle;
  }
btnDisabled = false;
stopPropagation(){
 this.btnDisabled = true;

}
 ngOnInit(): void {
 }
 d(data){
   var index = this.selectedRails.indexOf(data);
   if (index === -1) {
     this.data['selected']=true;
     this.selectedRails.push(data);
   } else {
     this.data['selected']=false;
       this.selectedRails.splice(data, 1);
   }
   this.newItemEvent.emit(data);    
 }
}