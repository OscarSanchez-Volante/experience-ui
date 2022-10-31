import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { TimebarComponent } from './timebar.component';

describe('TimebarComponent', () => {
  let component: TimebarComponent;
  let mockAuthService: jasmine.SpyObj<any>;
  let router: Router;

 beforeEach(async(() => {
  TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule,
      BrowserModule,
      RouterTestingModule.withRoutes([]),
    ],
    declarations: [TimebarComponent],
  }).compileComponents()

  let fixture = TestBed.createComponent(TimebarComponent);
    fixture = TestBed.createComponent(TimebarComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
  
}))

it('should create the app', async(() => {
  const fixture = TestBed.createComponent(TimebarComponent);
  const app = fixture.debugElement.componentInstance;
  expect(app).toBeTruthy(); 
}));
});
