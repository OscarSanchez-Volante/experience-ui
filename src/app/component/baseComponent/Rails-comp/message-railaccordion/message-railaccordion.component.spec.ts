import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { MessageRailaccordionComponent } from './message-railaccordion.component';

describe('MessageRailaccordionComponent', () => {
  let component: MessageRailaccordionComponent;
  let mockAuthService: jasmine.SpyObj<any>;
  let router: Router;
  beforeEach(async(() => {
   TestBed.configureTestingModule({
     imports: [
       HttpClientTestingModule,
       BrowserModule,
       RouterTestingModule.withRoutes([]),
     ],
     declarations: [MessageRailaccordionComponent],
   }).compileComponents()
 
   let fixture = TestBed.createComponent(MessageRailaccordionComponent);
     fixture = TestBed.createComponent(MessageRailaccordionComponent);
     component = fixture.componentInstance;
     component.ngOnInit();
   
 }))

 it('should create the app', async(() => {
  const fixture = TestBed.createComponent(MessageRailaccordionComponent);
  const app = fixture.debugElement.componentInstance;
  expect(app).toBeTruthy();
}));

});
