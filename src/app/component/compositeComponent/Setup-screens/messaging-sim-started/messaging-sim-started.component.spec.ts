import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { MessagingSimStartedComponent } from './messaging-sim-started.component';

describe('MessagingSimStartedComponent', () => {
  let component: MessagingSimStartedComponent;
  let mockAuthService: jasmine.SpyObj<any>;
  let router: Router;

 beforeEach(async(() => {
  TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule,
      BrowserModule,
      RouterTestingModule.withRoutes([]),
    ],
    declarations: [MessagingSimStartedComponent],
  }).compileComponents()

  let fixture = TestBed.createComponent(MessagingSimStartedComponent);
    fixture = TestBed.createComponent(MessagingSimStartedComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
  
}))

it('should create the app', async(() => {
  const fixture = TestBed.createComponent(MessagingSimStartedComponent);
  const app = fixture.debugElement.componentInstance;
  expect(app).toBeTruthy(); 
}));

}); 
