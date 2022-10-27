import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { StepperComponent } from './stepper.component';

describe('StepperComponent', () => {
  let component: StepperComponent; 
  let mockAuthService: jasmine.SpyObj<any>;
  let router: Router;
  beforeEach(async(() => {
   TestBed.configureTestingModule({
     imports: [
       HttpClientTestingModule,
       BrowserModule,
       RouterTestingModule.withRoutes([]),
     ],
     declarations: [StepperComponent],
   }).compileComponents()
 
   let fixture = TestBed.createComponent(StepperComponent);
     fixture = TestBed.createComponent(StepperComponent);
     component = fixture.componentInstance;
   
 }))
  
 it('should create the app', async(() => {
   const fixture = TestBed.createComponent(StepperComponent);
   const app = fixture.debugElement.componentInstance;
   expect(app).toBeTruthy();
 }));
});
