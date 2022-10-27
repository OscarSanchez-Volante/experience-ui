import { Component, OnInit ,ViewEncapsulation } from '@angular/core';
import { timelinetabs } from 'src/app/interface/timelineTap';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-input-wizard',
  templateUrl: './input-wizard.component.html',
  styleUrls: ['./input-wizard.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class InputWizardComponent implements OnInit {
  public timeLineData:timelinetabs[]=[{"name":"Payment Details","id":"collapseOne","status":"pending"},{"name":"Transaction Details","id":"collapseTwo","status":"initial"},{"name":"Ordering Customer","id":"collapseThree","status":"initial"},{"name":"Beneficiary Bank Details","id":"collapseFour","status":"initial"},{"name":"Beneficiary Details","id":"collapseFive","status":"initial"},{"name":"Remittance Information","id":"collapseSix","status":"initial"},{"name":"Intermediatary Bank Details","id":"collapseSeven","status":"initial"},{"name":"Save as template","id":"collapseEight","status":"initial"}]
  public active:String="Payment Details";
  public activeIndex:number;
  show:Boolean;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.activeTab(this.timeLineData[0])
  }
  
  activeTab(event) {
		var i;
		var x = document.getElementsByClassName("tab-pane");
		for (i = 0; i < x.length; i++) {
			x[i].classList.remove("active"); 
		}	
    this.activeIndex=this.timeLineData.indexOf(event);
  document.getElementById(event.id).classList.add('active')	
	}
  next(index){
    this.activeTab(this.timeLineData[index])
    this.active=this.timeLineData[index].name;
    this.timeLineData[index-1].status='initial';
    this.timeLineData[index].status='pending';
  }
  savechange(){
    this.router.navigate(['']);
  
  }
  open(){
    this.show = !this.show;
  }
}
