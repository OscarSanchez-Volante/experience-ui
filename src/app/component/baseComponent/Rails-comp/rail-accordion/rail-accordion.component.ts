import { Output, EventEmitter ,Component, Input, OnInit  } from '@angular/core';
import { Router } from '@angular/router';
import {railaccordionInterface} from '../../../../interface/basecomponent-interface'
@Component({
  selector: 'app-rail-accordion',
  templateUrl: './rail-accordion.component.html',
  styleUrls: ['./rail-accordion.component.scss']
})
export class RailAccordionComponent implements OnInit {
 public selectedRails:number[]=[];
 @Input("data") data: railaccordionInterface;

 @Output() newItemEvent = new EventEmitter<string|number>();
 public currentUrl;

 public title=sessionStorage.getItem('selectedAddOn')
  constructor(public router:Router) { }
  myFunc(railTitle){
    sessionStorage.railTitle=railTitle;
   }
 btnDisabled = false;
 stopPropagation(){
  this.btnDisabled = true;
 
 }
  ngOnInit(): void {
    sessionStorage.setItem("railsheader", JSON.stringify(this.data));
    // console.log("railsheader", JSON.stringify(this.data))
    this.currentUrl =this.router.url;
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
