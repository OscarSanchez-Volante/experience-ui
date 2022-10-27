import { Output, EventEmitter ,Component, Input, OnInit  } from '@angular/core';
@Component({
  selector: 'app-message-railaccordion',
  templateUrl: './message-railaccordion.component.html',
  styleUrls: ['./message-railaccordion.component.scss']
})
export class MessageRailaccordionComponent implements OnInit {
public selectedRails:any=[];
@Input("data") data: any;

@Output() newItemEvent = new EventEmitter<any>();
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