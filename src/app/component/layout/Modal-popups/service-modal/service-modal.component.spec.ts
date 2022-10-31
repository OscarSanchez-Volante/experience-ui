import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { ServiceModalComponent } from './service-modal.component';

describe('ServiceModalComponent', () => {
  let component: ServiceModalComponent;
  let mockAuthService: jasmine.SpyObj<any>;
  let router: Router;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        BrowserModule,
        RouterTestingModule.withRoutes([]),
      ],
      declarations: [ServiceModalComponent],
    }).compileComponents()

    let fixture = TestBed.createComponent(ServiceModalComponent);
    fixture = TestBed.createComponent(ServiceModalComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
  }))

 
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(ServiceModalComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy(); 
  }));
});
