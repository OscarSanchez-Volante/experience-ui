import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { TimelineTabComponent } from './timeline-tab.component';

describe('TimelineTabComponent', () => {
  let component: TimelineTabComponent;
  let mockAuthService: jasmine.SpyObj<any>;
  let router: Router;

 beforeEach(async(() => {
  TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule,
      BrowserModule,
      RouterTestingModule.withRoutes([]),
    ],
    declarations: [TimelineTabComponent],
  }).compileComponents()

  let fixture = TestBed.createComponent(TimelineTabComponent);
    fixture = TestBed.createComponent(TimelineTabComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
  
}))
});
