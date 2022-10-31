import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CarouselSimstartedComponent } from './carousel-simstarted.component';

describe('CarouselSimstartedComponent', () => {
  let component: CarouselSimstartedComponent;
  let mockAuthService: jasmine.SpyObj<any>;
  let router: Router;
  beforeEach(async(() => {
   TestBed.configureTestingModule({
     imports: [
       HttpClientTestingModule,
       BrowserModule,
       RouterTestingModule.withRoutes([]),
     ],
     declarations: [CarouselSimstartedComponent],
   }).compileComponents()
 
   let fixture = TestBed.createComponent(CarouselSimstartedComponent);
     fixture = TestBed.createComponent(CarouselSimstartedComponent);
     component = fixture.componentInstance;
     component.ngOnInit();
   
 }))
  

});
