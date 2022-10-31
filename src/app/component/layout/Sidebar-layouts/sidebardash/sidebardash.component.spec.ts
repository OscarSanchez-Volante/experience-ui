import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { SidebardashComponent } from './sidebardash.component';

describe('SidebardashComponent', () => {
  let component: SidebardashComponent;
  let mockAuthService: jasmine.SpyObj<any>;
  let router: Router;

 beforeEach(async(() => {
  TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule,
      BrowserModule,
      RouterTestingModule.withRoutes([]),
    ],
    declarations: [SidebardashComponent],
  }).compileComponents()

  let fixture = TestBed.createComponent(SidebardashComponent);
    fixture = TestBed.createComponent(SidebardashComponent);
     component = fixture.componentInstance;
  
}))

it('should create the app', async(() => {
  const fixture = TestBed.createComponent(SidebardashComponent);
  const app = fixture.debugElement.componentInstance;
  expect(app).toBeTruthy(); 
}));
});
