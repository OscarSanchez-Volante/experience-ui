import { Component, OnInit , ViewEncapsulation } from '@angular/core';
import { timelinetabs } from 'src/app/interface/timelineTap';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { InteractionServiceService } from '../../../../services/interaction-service.service';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class SidebarComponent implements OnInit {

  public timeLineData:timelinetabs[]=[{"name":"Select Service","status":"pending","id":"1","link":"select-service1-4.1"},{"name":"","status":"initial","id":"2","link":"sim-step2-5.0"},{"name":"Review Order","status":"initial","id":"3","link":"sim-step3-11.0"}]
  public active:string;
  public activeIndex:number;
  showBtn=[false,false,false];
  constructor(private router: Router,private InteractionService:InteractionServiceService, private activatedRoute: ActivatedRoute) { }
  public length;
  public dataval:string;
  public selectnext;
  public currentUrl;

  ngOnInit(): void {
    this.activatedRoute
    .queryParams
    .subscribe(params => {
      this.timeLineData[1].name="Select "+sessionStorage.getItem('selectedAddOn');

    })
    this.timeLineData[1].name="Select "+sessionStorage.getItem('selectedAddOn');
    this.dataval= "Select "+sessionStorage.getItem('selectedAddOn');
this.selectnext=sessionStorage.getItem('selectedAddOn');
    let currentUrl = this.router.url;
    if(currentUrl=='select-service1-4.1' || currentUrl=='/select-service1-4.1'){
      this.active="Select Service";  
    this.timeLineData[0].status='initial';
    this.timeLineData[1].status='initial';
    this.timeLineData[2].status='initial';
    }
    else if(currentUrl.split('?')[0]=='/sim-step2-5.0'){
      this.active= this.timeLineData[1].name="Select "+sessionStorage.getItem('selectedAddOn');

    this.timeLineData[0].status='pending';
    this.timeLineData[1].status='initial';
    this.timeLineData[2].status='initial';
    }
    else if(currentUrl=='/sim-step3-11.0'){
      this.active="Review Order";
    this.timeLineData[0].status='pending';
    this.timeLineData[1].status='pending';
    this.timeLineData[2].status='initial';
    }
     this.enabler();
    this.InteractionService.selectService.subscribe(()=>{      
      this.enabler();})
  }


enabler()
{

      if(this.router.url=='/select-service1-4.1'){
          if(sessionStorage.getItem('selectedAddOn')==null)
          {
             this.showBtn=[true,false,false];
          }
          else
          {
             this.showBtn=[true,false,false];
            
          }
    }


        else if(this.router.url.includes('/sim-step2-5.0')){

          if(this.selectnext=='Payment Rails'){
        if(sessionStorage.getItem('selectedRails'))
        {
         
            let selectedRails:string;
            selectedRails=sessionStorage.getItem('selectedRails'); 
                 if(JSON.parse(selectedRails).length==0)
            {
               this.showBtn=[false,false,false];
            }
            else
            {
               
               this.showBtn=[false,true,false];
              
            }

          }
          
        }
        else if(this.selectnext=='Message Services'){
          if(sessionStorage.getItem('steppercount'))
          {
           
              let steppercount:number=0;
              steppercount=parseInt(sessionStorage.getItem('steppercount')) ; 
    
                   if(steppercount==0)
              {
                 this.showBtn=[false,false,false];
              }
              else
              {
                 
                 this.showBtn=[false,true,false];
                
              }
  
            }
        }
     
    }

    else
    {
      this.showBtn=[false,false,true];
    }
}



  activeTab(event) {

    this.active=event.name;	
    this.activeIndex=this.timeLineData.indexOf(event);
    if(event.link=='sim-step2-5.0'){
      this.router.navigate(['sim-step2-5.0'], { queryParams: {selectedAddon : sessionStorage.getItem('selectedAddOn') } });
  
    }
    else{
      this.router.navigate([event.link]);     
    }

	} 
  
  next(){
    if(this.active=='Select Service'){
      this.active="Select "+sessionStorage.getItem('selectedAddOn');
      this.timeLineData[0].status='initial';
      this.timeLineData[1].status='pending';
      this.router.navigate(['sim-step2-5.0'], { queryParams: {selectedAddon : sessionStorage.getItem('selectedAddOn') } });
    }
    else if(this.active== this.dataval){
      this.active="Review Order";
      this.timeLineData[0].status='initial';
      this.timeLineData[2].status='pending';
      this.router.navigate(['sim-step3-11.0']);
    }
    else if(this.active=="Review Order" ){
      sessionStorage.setItem('redirect',"true")
      this.router.navigate(['sim-end12.0']);
    }
  }
  exit(){
    if(this.active=='Select Service'){
      this.active="Select "+sessionStorage.getItem('selectedAddOn');
      this.timeLineData[0].status='initial';
      this.timeLineData[1].status='pending';
      this.router.navigate(['select-service1-4.1'], { queryParams: {selectedAddon : sessionStorage.getItem('selectedAddOn') } });
    }
    else if(this.active==this.dataval){
      this.active="Review Order";
      this.timeLineData[0].status='initial';
      this.timeLineData[2].status='pending';
      this.router.navigate(['select-service1-4.1']);
    }
    else if(this.active=="Review Order"){
      this.router.navigate(['sim-step2-5.0'], { queryParams: {selectedAddon : sessionStorage.getItem('selectedAddOn') } });
    
    }
  }

}

