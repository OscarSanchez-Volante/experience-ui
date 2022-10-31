import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { MainpageSelectserviceComponent } from './mainpage-selectservice.component';

describe('MainpageSelectserviceComponent', () => {
  let component: MainpageSelectserviceComponent;
  let mockAuthService: jasmine.SpyObj<any>;
  let router: Router;

 beforeEach(async(() => {
  TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule,
      BrowserModule,
      RouterTestingModule.withRoutes([]),
    ],
    declarations: [MainpageSelectserviceComponent],
  }).compileComponents()

  let fixture = TestBed.createComponent(MainpageSelectserviceComponent);
    fixture = TestBed.createComponent(MainpageSelectserviceComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
  
}))

it('should create the app', async(() => {
  const fixture = TestBed.createComponent(MainpageSelectserviceComponent);
  const app = fixture.debugElement.componentInstance;
  expect(app).toBeTruthy(); 
}));
});
 