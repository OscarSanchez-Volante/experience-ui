import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CarouselSmallcard1Component } from './carousel-smallcard1.component';

describe('CarouselSmallcard1Component', () => {
  let component: CarouselSmallcard1Component;
  let mockAuthService: jasmine.SpyObj<any>;
  let router: Router;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        BrowserModule,
        RouterTestingModule.withRoutes([]),
      ],
      declarations: [CarouselSmallcard1Component],
    }).compileComponents()
  
    let fixture = TestBed.createComponent(CarouselSmallcard1Component);
      fixture = TestBed.createComponent(CarouselSmallcard1Component);
      component = fixture.componentInstance; 
      component.ngOnInit();
    
  }))
    
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(CarouselSmallcard1Component);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
