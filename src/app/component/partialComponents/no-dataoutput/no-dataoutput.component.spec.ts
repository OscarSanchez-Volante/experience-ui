import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { NoDataoutputComponent } from './no-dataoutput.component';

describe('NoDataoutputComponent', () => {
  let component: NoDataoutputComponent;
  let mockAuthService: jasmine.SpyObj<any>;
  let router: Router;
  beforeEach(async(() => {
   TestBed.configureTestingModule({
     imports: [
       HttpClientTestingModule,
       BrowserModule,
       RouterTestingModule.withRoutes([]),
     ],
     declarations: [NoDataoutputComponent],
   }).compileComponents()
 
   let fixture = TestBed.createComponent(NoDataoutputComponent);
     fixture = TestBed.createComponent(NoDataoutputComponent);
     component = fixture.componentInstance;
     component.ngOnInit();
   
 }))
 it('should create the app', async(() => {
  const fixture = TestBed.createComponent(NoDataoutputComponent);
  const app = fixture.debugElement.componentInstance;
  expect(app).toBeTruthy();
}));
});
