import { Component, Input ,ElementRef} from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { InteractionServiceService } from '../../../../services/interaction-service.service';
import { JsonHttpService } from 'src/app/services/json-http/json-http.service';
import {selectedtitleInterface,setup2accordiondata} from '../../../../interface/select-service-interface.service'


@Component({
  selector: 'app-setup2',
  templateUrl: './setup2.component.html',
  styleUrls: ['./setup2.component.scss']
})
export class Setup2Component  {

  @Input() count:number=3;


  public active:string;
  public selected:selectedtitleInterface={"title":sessionStorage.getItem('selectedAddOn')};
  public selectedRails:number[]=[];
  public stepperCount:number[]=[];
  public valueneeded:string;
  public accordianData:setup2accordiondata;
  constructor(private router:Router,private activeRouter:ActivatedRoute,private InteractionService:InteractionServiceService, private readonly elementRef: ElementRef, private jsonhttp:JsonHttpService) { 

    this.active = this.router.url;
    this.valueneeded= this.selected.title;
    this.router.events.forEach((event) => {
      if(event instanceof NavigationEnd) {
       
      }
     
    });
   this.activeRouter.queryParams.subscribe((params:any):string=>{
    return  this.selected.title=params.selectedAddon;

    })
  }
  ngOnInit(): void {
    this.jsonhttp.getsetup2("assets/data/admin.json").subscribe(data => {
      this.accordianData = data['accordianSetupData']
    })
    this.activeRouter
    .queryParams
    .subscribe(params => {
      this.selected.title=params.selectedAddon;
      switch (this.selected.title) {
        case "Payment Rails":
          this.selected['description']="Select and configure the payment rails that your institution would like to review and evaluate on the Volante VolPay service. You only need to configure one rail to get started, and can configure additional rails later as needed."
          break;
        
          case "Message Services":
         
         
            this.selected['description']="Select and configure the Message Services that your institution would like to review and evaluaite ont he Volante VolPay service. You only need to configure one rail to get started, and can configure additional rails later as needed."
            break;
        default:
          break;
      }
     
    })
    var storedArray = JSON.parse(sessionStorage.getItem("selectedRails"));
  
    if(storedArray){
      let len=this.accordianData.length;
      for (let i = 0; i < len; i++) {
        var index = storedArray.indexOf(this.accordianData[i].id);
        if(index!==-1){     
          this.accordianData[i]['selected']=true;
          this.selectedRails.push(this.accordianData[i].id);
        }
      }
    }

  }

  selectRails(value:number) {
    var index = this.selectedRails.indexOf(value); 
    if (index === -1) {
      this.selectedRails.push(value);
    } else {
        this.selectedRails.splice(index, 1);
    }
        this.InteractionService.serviceSelected();
   sessionStorage.setItem("selectedRails", JSON.stringify(this.selectedRails));
	}
  stepper(value:number) {
    var index = this.stepperCount.indexOf(value); 
    if (index === -1) {
      this.stepperCount.push(value);
    } else {
        this.stepperCount.splice(index, 1);
    }
        this.InteractionService.serviceSelected();
	}
 
 
}
