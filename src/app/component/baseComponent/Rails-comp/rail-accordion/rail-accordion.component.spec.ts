import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { RailAccordionComponent } from './rail-accordion.component';

describe('RailAccordionComponent', () => {
  let component: RailAccordionComponent;
  let mockAuthService: jasmine.SpyObj<any>;
 let router: Router;
 beforeEach(async(() => {
  TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule,
      BrowserModule,
      RouterTestingModule.withRoutes([]),
    ],
    declarations: [RailAccordionComponent],
  }).compileComponents()

  let fixture = TestBed.createComponent(RailAccordionComponent);
    fixture = TestBed.createComponent(RailAccordionComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
  
}))
it('should create the app', async(() => {
  const fixture = TestBed.createComponent(RailAccordionComponent);
  const app = fixture.debugElement.componentInstance;
  expect(app).toBeTruthy();
}));

});
