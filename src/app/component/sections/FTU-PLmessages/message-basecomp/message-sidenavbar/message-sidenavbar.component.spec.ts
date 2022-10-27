import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { MessageSidenavbarComponent } from './message-sidenavbar.component';

describe('MessageSidenavbarComponent', () => {
  let component: MessageSidenavbarComponent;
  let mockAuthService: jasmine.SpyObj<any>;
  let router: Router;
  beforeEach(async(() => {
   TestBed.configureTestingModule({
     imports: [
       HttpClientTestingModule,
       BrowserModule,
       RouterTestingModule.withRoutes([]),
     ],
     declarations: [MessageSidenavbarComponent],
   }).compileComponents()
 
   let fixture = TestBed.createComponent(MessageSidenavbarComponent);
     fixture = TestBed.createComponent(MessageSidenavbarComponent);
     component = fixture.componentInstance; 
     component.ngOnInit();
   
 }))
   
 it('should create the app', async(() => {
   const fixture = TestBed.createComponent(MessageSidenavbarComponent);
   const app = fixture.debugElement.componentInstance;
   expect(app).toBeTruthy();
 }));
});
