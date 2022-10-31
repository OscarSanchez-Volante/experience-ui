import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { UsercontentSandboxComponent } from './usercontent-sandbox.component';

describe('UsercontentSandboxComponent', () => {
  let component: UsercontentSandboxComponent;
  let mockAuthService: jasmine.SpyObj<any>;
  let router: Router;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        BrowserModule,
        RouterTestingModule.withRoutes([]),
      ],
      declarations: [UsercontentSandboxComponent],
    }).compileComponents()
  
    let fixture = TestBed.createComponent(UsercontentSandboxComponent);
      fixture = TestBed.createComponent(UsercontentSandboxComponent);
      component = fixture.componentInstance;
      component.ngOnInit();
    
  }))
  
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(UsercontentSandboxComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy(); 
  }));
  it('should render title tag as Admin/Users/Messaging APIs', async(() => {
    const fixture = TestBed.createComponent(UsercontentSandboxComponent);
    fixture.detectChanges();
      const el=fixture.debugElement.query(By.css('.admin-header')).nativeElement;
    expect(el.textContent).toContain('Admin/Users/PaaS Sandbox');
  }));
});
