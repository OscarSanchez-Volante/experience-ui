import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { StepperWithnextComponent } from './stepper-withnext.component';

describe('StepperWithnextComponent', () => {
  let component: StepperWithnextComponent;
  let mockAuthService: jasmine.SpyObj<any>;
  beforeEach(async(() => {
   TestBed.configureTestingModule({
     imports: [
       HttpClientTestingModule,
       BrowserModule,
     ],
     declarations: [StepperWithnextComponent],
   }).compileComponents()
 
   let fixture = TestBed.createComponent(StepperWithnextComponent);
     fixture = TestBed.createComponent(StepperWithnextComponent);
     component = fixture.componentInstance; 
     component.ngOnInit();
   
 }))

});
