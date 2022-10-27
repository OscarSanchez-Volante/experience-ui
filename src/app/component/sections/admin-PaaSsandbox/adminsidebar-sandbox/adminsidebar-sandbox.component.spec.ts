import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AdminsidebarSandboxComponent } from './adminsidebar-sandbox.component';

describe('AdminsidebarSandboxComponent', () => {
  let component: AdminsidebarSandboxComponent;
  let mockAuthService: jasmine.SpyObj<any>;
  let router: Router;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        BrowserModule,
        RouterTestingModule.withRoutes([]),
      ],
      declarations: [AdminsidebarSandboxComponent],
    }).compileComponents()
  
    let fixture = TestBed.createComponent(AdminsidebarSandboxComponent);
      fixture = TestBed.createComponent(AdminsidebarSandboxComponent);
      component = fixture.componentInstance;
      component.ngOnInit();
    
  }))
  
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AdminsidebarSandboxComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy(); 
  }));
});
