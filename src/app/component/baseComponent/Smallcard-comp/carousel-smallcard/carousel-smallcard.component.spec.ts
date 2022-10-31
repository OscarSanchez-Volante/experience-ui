import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CarouselSmallcardComponent } from './carousel-smallcard.component';

describe('CarouselSmallcardComponent', () => {
  let component: CarouselSmallcardComponent;
  let mockAuthService: jasmine.SpyObj<any>;
 let router: Router;
 beforeEach(async(() => {
  TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule,
      BrowserModule,
      RouterTestingModule.withRoutes([]),
    ],
    declarations: [CarouselSmallcardComponent],
  }).compileComponents()

  let fixture = TestBed.createComponent(CarouselSmallcardComponent);
    fixture = TestBed.createComponent(CarouselSmallcardComponent);
    component = fixture.componentInstance; 
    component.ngOnInit();
  
}))
  

});
