import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { RailsSelectedComponent } from './rails-selected.component';

describe('RailsSelectedComponent', () => {
  let component: RailsSelectedComponent;
  let mockAuthService: jasmine.SpyObj<any>;
 let router: Router;
 beforeEach(async(() => {
  TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule,
      BrowserModule,
      RouterTestingModule.withRoutes([]),
    ],
    declarations: [RailsSelectedComponent],
  }).compileComponents()

  let fixture = TestBed.createComponent(RailsSelectedComponent);
    fixture = TestBed.createComponent(RailsSelectedComponent);
    component = fixture.componentInstance; 
    component.ngOnInit();
  
}))
});
