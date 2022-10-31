import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { Router } from '@angular/router';

import { SideNavbarComponent } from './side-navbar.component';

describe('SideNavbarComponent', () => {
  let component: SideNavbarComponent;
  let mockAuthService: jasmine.SpyObj<any>;
  let router: Router;

 beforeEach(async(() => {
  TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule,
      BrowserModule,
      RouterTestingModule.withRoutes([]),
    ],
    declarations: [SideNavbarComponent],
  }).compileComponents()

  let fixture = TestBed.createComponent(SideNavbarComponent);
    fixture = TestBed.createComponent(SideNavbarComponent);
    component = fixture.componentInstance;
  
}))

it('should create the app', async(() => {
  const fixture = TestBed.createComponent(SideNavbarComponent);
  const app = fixture.debugElement.componentInstance;
  expect(app).toBeTruthy(); 
}));
});
