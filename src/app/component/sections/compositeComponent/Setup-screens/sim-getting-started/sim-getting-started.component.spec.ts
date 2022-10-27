import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { SimGettingStartedComponent } from './sim-getting-started.component';

describe('SimGettingStartedComponent', () => {
  let component: SimGettingStartedComponent;
  let mockAuthService: jasmine.SpyObj<any>;
  let router: Router;

 beforeEach(async(() => {
  TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule,
      BrowserModule,
      RouterTestingModule.withRoutes([]),
    ],
    declarations: [SimGettingStartedComponent],
  }).compileComponents()

  let fixture = TestBed.createComponent(SimGettingStartedComponent);
    fixture = TestBed.createComponent(SimGettingStartedComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
  
}))

it('should create the app', async(() => {
  const fixture = TestBed.createComponent(SimGettingStartedComponent);
  const app = fixture.debugElement.componentInstance;
  expect(app).toBeTruthy(); 
}));

});
