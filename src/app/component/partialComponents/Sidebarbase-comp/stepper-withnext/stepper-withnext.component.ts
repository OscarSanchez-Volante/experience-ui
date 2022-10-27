import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-stepper-withnext',
  templateUrl: './stepper-withnext.component.html',
  styleUrls: ['./stepper-withnext.component.scss']
})
export class StepperWithnextComponent implements OnInit {

public steppercount:any=[];
@Input("stepper") stepper: any;
  @Output() newItemEvent = new EventEmitter<any>();
  constructor(private fb: FormBuilder, private router:Router,private activeRoute: ActivatedRoute) {}

  ngOnInit(): void {
  
  }

  frmSubmit(frm: FormGroup) {
   
  }
  d(stepper){
    var index = this.steppercount.indexOf(stepper);
      this.stepper = "1";
      sessionStorage.setItem("steppercount", JSON.stringify(this.stepper));
    this.newItemEvent.emit(stepper);    
  }
  cliclStepper(data:string){
   this.router.navigate(["simStep2-5.0"],{queryParams:{selectedAddon:data}})
  }
}
