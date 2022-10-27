import { Component, OnInit, Input } from '@angular/core';
import { InteractionServiceService } from '@services/interaction-service.service';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.scss']
})
export class SmallCardComponent implements OnInit {
  @Input('data')  data:any;
  @Input('checkBoxType') checkBoxType:string;
  @Input('selectValue')  selectValue:any;


  public isReadMore = true

  showText() {
     this.isReadMore = !this.isReadMore
  }
  constructor(private InteractionService:InteractionServiceService) { }
  d(){

  }

  ngOnInit(): void {
  }

  addonChange(type,details){
    if(type=='group'){
    sessionStorage.removeItem('selectedRails');
    sessionStorage.setItem('selectedAddOn2',JSON.stringify(this.data))
    sessionStorage.setItem('selectedAddOn','Message Creators')


  }
    else{

    sessionStorage.setItem('selectedAddOn1',JSON.stringify(this.data))

    sessionStorage.setItem('selectedAddOn','Payment Rails')
  }
    this.InteractionService.serviceSelected();
  }
}
