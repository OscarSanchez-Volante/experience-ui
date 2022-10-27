import { Component, OnInit ,Input} from '@angular/core';
import { SelectValue } from '@inputs/volmain-input.service';
import {selectedAddOn1} from '@inputs/smallcard-input.service';
import {selectedAddOn2} from '@inputs/smallcard-inputmessage';
import { Router} from '@angular/router';
@Component({
  selector: 'app-select-service-component',
  templateUrl: './select-service-component.component.html',
  styleUrls: ['./select-service-component.component.scss']
})
export class SelectServiceComponentComponent implements OnInit {
  SelectValue:Array <any>=SelectValue;
  selectedAddOn1:Array <any>=selectedAddOn1;
  selectedAddOn2:Array <any>=selectedAddOn2;
  public head:any;
public selectedtext=sessionStorage.getItem('service')?sessionStorage.getItem('service'):"ADD MESSAGE TRANSFORMATION SERVICES";


constructor(private router: Router) {
}


  public cardData:any;
  public type:string ="normal";
  public currentUrl;
  ngOnInit(): void {
    this.currentUrl = this.router.url;

    if(!sessionStorage.getItem('service')){
      sessionStorage.setItem('service',this.selectedtext);
      sessionStorage.setItem('selectedAddOn','Message Creators')
    }

    if(sessionStorage.getItem('service')!='ADD MESSAGE TRANSFORMATION SERVICES'){
      this.type='normal';
      if(sessionStorage.getItem('selectedAddOn1')){
        this.cardData=JSON.parse(sessionStorage.getItem('selectedAddOn1'))
      }
      else{

this.cardData = this.selectedAddOn1;
      }
    }
    else{
      this.type='group';

      if(sessionStorage.getItem('selectedAddOn2')){
        this.cardData=JSON.parse(sessionStorage.getItem('selectedAddOn2'))
      }
      else{
      this.cardData= this.selectedAddOn2;
      }
    }
  }
  data(event){
    sessionStorage.setItem('service',event);
    this.selectedtext=event;
    sessionStorage.removeItem('selectedRails');
    if(event==='ADD MESSAGE TRANSFORMATION SERVICES'){
      this.type='group';
      this.cardData = this.selectedAddOn2;
      sessionStorage.removeItem('selectedRails');
      sessionStorage.setItem('selectedAddOn2',JSON.stringify(this.cardData))
      sessionStorage.setItem('selectedAddOn','Message Creators')
    }
    else{
      this.type='normal';
    this.cardData= this.selectedAddOn1;

    }

  }

}
