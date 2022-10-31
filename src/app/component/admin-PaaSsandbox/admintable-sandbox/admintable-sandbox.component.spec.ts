import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AdmintableSandboxComponent } from './admintable-sandbox.component';

describe('AdmintableSandboxComponent', () => {
  let component: AdmintableSandboxComponent;
  let mockAuthService: jasmine.SpyObj<any>;
  let router: Router;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        BrowserModule,
        RouterTestingModule.withRoutes([]),
      ],
      declarations: [AdmintableSandboxComponent],
    }).compileComponents()
  
    let fixture = TestBed.createComponent(AdmintableSandboxComponent);
      fixture = TestBed.createComponent(AdmintableSandboxComponent);
      component = fixture.componentInstance;
      component.ngOnInit();
    
  }))
  
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AdmintableSandboxComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy(); 
  }));
});
