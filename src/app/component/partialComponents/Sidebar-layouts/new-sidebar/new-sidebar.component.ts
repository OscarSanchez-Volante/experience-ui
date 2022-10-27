import { Component, OnInit , ViewEncapsulation } from '@angular/core';
import { timelinetabs } from 'src/app/interface/timelineTap';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-new-sidebar',
  templateUrl: './new-sidebar.component.html',
  styleUrls: ['./new-sidebar.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class NewSidebarComponent implements OnInit {

  public timeLineData:timelinetabs[]=[{"name":"What to Expect","status":"pending","id":"1","link":"simGettingStarted13.0"},{"name":"","status":"initial","id":"2","link":"ftuInitPayments13.1"},{"name":"Run your first simulation","status":"initial","id":"3","link":"ftuInitPayments9.0"},{"name":"Go to the Dashboard","status":"initial","id":"4","link":""}]
  
  
  public active:string;
  public activeIndex:number;
  constructor(private router: Router) { }

  ngOnInit(): void {
  
    this.timeLineData[1].name="View "+sessionStorage.getItem('sidebarVal');
    let currentUrl = this.router.url;
    this.active="What to Expect";
    if(currentUrl=='simGettingStarted13.0' || currentUrl=='/simGettingStarted13.0'){
      this.active="What to Expect";  
    this.timeLineData[0].status='initial';
    this.timeLineData[1].status='initial';
    this.timeLineData[2].status='initial';
    }
    else if(currentUrl.split('?')[0]=='/ftuInitPayments13.1'){
      this.active=    this.timeLineData[1].name="View "+sessionStorage.getItem('sidebarVal');

    this.timeLineData[0].status='pending';
    this.timeLineData[1].status='initial';
    this.timeLineData[1].status='initial';
    }
    else if(currentUrl.split('?')[0]=='/ftuInitPayments9.0'){
      this.active="Run your first simulation";
    this.timeLineData[0].status='pending';
    this.timeLineData[1].status='initial';
    this.timeLineData[1].status='initial';
    }
    else if(currentUrl=='/DashboardUI1'){
      this.active="Go to the Dashboard";
    this.timeLineData[0].status='pending';
    this.timeLineData[2].status='pending';
    this.timeLineData[2].status='pending';
    this.timeLineData[3].status='initial';
    }
  }

  activeTab(event) {
    this.active=event.name;	
    this.activeIndex=this.timeLineData.indexOf(event);
    if(event.link=='ftuInitPayments13.1'){
      this.router.navigate(['ftuInitPayments13.1'], { queryParams: {selectedAddon : sessionStorage.getItem('selectedAddOn') } });
  
    }
    else{
      this.router.navigate([event.link]);     
    }
     	
	}
  next(){
    if(this.active=='What to Expect'){
      this.active="View Payment Rails";
      this.timeLineData[0].status='initial';
      this.timeLineData[1].status='pending';
      this.router.navigate(['ftuInitPayments13.1'], { queryParams: {selectedAddon : sessionStorage.getItem('selectedAddOn') } });
    }
    else if(this.active=="View Payment Rails"){
      this.active="View Payment Rails";
      this.timeLineData[0].status='initial';
      this.timeLineData[2].status='pending';
      this.router.navigate(['ftuInitPayments9.0']);
    }
    else if(this.active=="Run your first simulation"){
      sessionStorage.setItem('redirect',"true")
      this.router.navigate(['']);
    }
  }
  exit(){
    if(this.active=='What to Expect'){
      this.active="What to Expect";
      this.timeLineData[0].status='initial';
      this.timeLineData[1].status='pending';
      this.router.navigate(['simGettingStarted13.0'], { queryParams: {selectedAddon : sessionStorage.getItem('selectedAddOn') } });
    }
    else if(this.active=="View Payment Rails"){
      this.active="What to Expect";
      this.timeLineData[0].status='initial';
      this.timeLineData[2].status='pending';
      this.router.navigate(['simGettingStarted13.0']);
    }
    else if(this.active=="Run your first simulation"){
      this.router.navigate(['ftuInitPayments13.1'], { queryParams: {selectedAddon : sessionStorage.getItem('selectedAddOn') } });
    
    }
  }
}
