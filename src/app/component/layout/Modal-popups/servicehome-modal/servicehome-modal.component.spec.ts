import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ServicehomeModalComponent } from './servicehome-modal.component';

describe('ServicehomeModalComponent', () => {
  let component: ServicehomeModalComponent;
  let mockAuthService: jasmine.SpyObj<any>;
  let router: Router;

 beforeEach(async(() => {
  TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule,
      BrowserModule,
      RouterTestingModule.withRoutes([]),
    ],
    declarations: [ServicehomeModalComponent],
  }).compileComponents()

  let fixture = TestBed.createComponent(ServicehomeModalComponent);
    fixture = TestBed.createComponent(ServicehomeModalComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
  
}))

it('should create the app', async(() => {
  const fixture = TestBed.createComponent(ServicehomeModalComponent);
  const app = fixture.debugElement.componentInstance;
  expect(app).toBeTruthy(); 
}));
});
