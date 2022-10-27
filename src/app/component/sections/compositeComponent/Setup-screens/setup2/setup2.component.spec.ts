import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Setup2Component } from './setup2.component';

describe('Setup2Component', () => {
  let component: Setup2Component;
  let mockAuthService: jasmine.SpyObj<any>;
 let router: Router;
 beforeEach(async(() => {
  TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule,
      BrowserModule,
      RouterTestingModule.withRoutes([]),
    ],
    declarations: [Setup2Component],
  }).compileComponents()

  let fixture = TestBed.createComponent(Setup2Component);
    fixture = TestBed.createComponent(Setup2Component);
    component = fixture.componentInstance;
    component.ngOnInit();
  
}))
it('should create the app', async(() => {
  const fixture = TestBed.createComponent(Setup2Component);
  const app = fixture.debugElement.componentInstance;
  expect(app).toBeTruthy();
}));
});
