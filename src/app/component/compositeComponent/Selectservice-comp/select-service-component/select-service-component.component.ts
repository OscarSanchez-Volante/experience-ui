import { Component, OnInit ,Input} from '@angular/core';
import { Router} from '@angular/router';
import { JsonHttpService } from 'src/app/services/json-http/json-http.service';
import{selectvalueInterface,selectedaddon1Interface,selectedaddon2Interface} from '../../../../interface/composite-interface'

@Component({  
  selector: 'app-select-service-component',
  templateUrl: './select-service-component.component.html', 
  styleUrls: ['./select-service-component.component.scss']
})
export class SelectServiceComponentComponent implements OnInit {
SelectValue:Array <selectvalueInterface>;  
  selectedAddOn1:Array <selectedaddon1Interface>;
  selectedAddOn2:Array <selectedaddon2Interface>;

public selectedtext=sessionStorage.getItem('service')?sessionStorage.getItem('service'):"ADD MESSAGE TRANSFORMATION SERVICES";
 

constructor(private router: Router,private jsonhttp:JsonHttpService) { 
}

   
  public cardData:string|number;   
  public type:string ="normal";
  public currentUrl:string|number;
  ngOnInit(): void {
    
    this.currentUrl = this.router.url;
    
    if(!sessionStorage.getItem('service')){
      sessionStorage.setItem('service',this.selectedtext);
      sessionStorage.setItem('selectedAddOn','Message Services')
    }
       this.checkData(); 

       this.jsonhttp.getselectValue("assets/data/admin.json").subscribe(data => {
       this.SelectValue= data['SelectValue']; 
        })
  }


checkData(){
  if(sessionStorage.getItem('service')!='ADD MESSAGE TRANSFORMATION SERVICES'){
    this.type='normal';
    if(sessionStorage.getItem('selectedAddOn1')){
      this.cardData=JSON.parse(sessionStorage.getItem('selectedAddOn1'))
    }
    else{        
      
       this.getselectedAddOn1();
       
    }
  } else{
    this.type='group';
    if(sessionStorage.getItem('selectedAddOn2')){
      this.cardData=JSON.parse(sessionStorage.getItem('selectedAddOn2'))
    }
    else{
      this.getselectedAddOn2();
          
        }
  }
}

getselectedAddOn2(){
  this.jsonhttp.getselectedAddOn2("assets/data/admin.json").subscribe(data => {

    this.cardData= data['selectedAddOn2']; 
  })
}

 getselectedAddOn1(){
  
  this.jsonhttp.getselectedAddOn1("assets/data/admin.json").subscribe(data => {
    
    this.cardData= data['selectedAddOn1']; 
   })
  }
 

  data(event){
    sessionStorage.setItem('service',event);
    this.selectedtext=event;
    sessionStorage.removeItem('selectedRails');
    if(event==='ADD MESSAGE TRANSFORMATION SERVICES'){
      this.type='group';
      
      this.getselectedAddOn2();
      
      sessionStorage.removeItem('selectedRails');  
      sessionStorage.setItem('selectedAddOn2',JSON.stringify(this.cardData))
      sessionStorage.setItem('selectedAddOn','Message Services')
    }
    else{
      this.type='normal';
      this.getselectedAddOn1();
        
    }
  
  }

}
