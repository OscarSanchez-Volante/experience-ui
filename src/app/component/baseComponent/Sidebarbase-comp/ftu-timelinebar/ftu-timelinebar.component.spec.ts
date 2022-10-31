import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { FtuTimelinebarComponent } from './ftu-timelinebar.component';

describe('FtuTimelinebarComponent', () => {
  let component: FtuTimelinebarComponent;
  let mockAuthService: jasmine.SpyObj<any>;
 let router: Router;
 beforeEach(async(() => {
  TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule,
      BrowserModule,
      RouterTestingModule.withRoutes([]),
    ],
    declarations: [FtuTimelinebarComponent],
  }).compileComponents()

  let fixture = TestBed.createComponent(FtuTimelinebarComponent);
    fixture = TestBed.createComponent(FtuTimelinebarComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
  
}))
});
