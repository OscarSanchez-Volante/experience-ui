import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { MsgrailsStep2Component } from './msgrails-step2.component';

describe('MsgrailsStep2Component', () => {
  let component: MsgrailsStep2Component;
  let mockAuthService: jasmine.SpyObj<any>;
  let router: Router;

 beforeEach(async(() => {
  TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule,
      BrowserModule,
      RouterTestingModule.withRoutes([]),
    ],
    declarations: [MsgrailsStep2Component],
  }).compileComponents()

  let fixture = TestBed.createComponent(MsgrailsStep2Component);
    fixture = TestBed.createComponent(MsgrailsStep2Component);
    component = fixture.componentInstance;
    component.ngOnInit();
  
}))
});
