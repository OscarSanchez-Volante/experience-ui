import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ReviewOrderComponent } from './review-order.component';

describe('ReviewOrderComponent', () => {
  let component: ReviewOrderComponent;
  let mockAuthService: jasmine.SpyObj<any>;
  let router: Router;

 beforeEach(async(() => {
  TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule,
      BrowserModule,
      RouterTestingModule.withRoutes([]),
    ],
    declarations: [ReviewOrderComponent],
  }).compileComponents()

  let fixture = TestBed.createComponent(ReviewOrderComponent);
    fixture = TestBed.createComponent(ReviewOrderComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
  
}))

it('should create the app', async(() => {
  const fixture = TestBed.createComponent(ReviewOrderComponent);
  const app = fixture.debugElement.componentInstance;
  expect(app).toBeTruthy(); 
}));


});
