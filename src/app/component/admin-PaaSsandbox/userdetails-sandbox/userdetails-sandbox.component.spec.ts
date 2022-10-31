import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { UserdetailsSandboxComponent } from './userdetails-sandbox.component';

describe('UserdetailsSandboxComponent', () => {
  let component: UserdetailsSandboxComponent;
  let mockAuthService: jasmine.SpyObj<any>;
  let router: Router;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        BrowserModule,
        RouterTestingModule.withRoutes([]),
      ],
      declarations: [UserdetailsSandboxComponent],
    }).compileComponents()
  
    let fixture = TestBed.createComponent(UserdetailsSandboxComponent);
      fixture = TestBed.createComponent(UserdetailsSandboxComponent);
      component = fixture.componentInstance;
      component.ngOnInit();
    
  }))
  
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(UserdetailsSandboxComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy(); 
  }));
  it('should render title tag as Admin / Users / Messaging APIs / User Name', async(() => {
    const fixture = TestBed.createComponent(UserdetailsSandboxComponent);
    fixture.detectChanges();
      const el=fixture.debugElement.query(By.css('.admin-header')).nativeElement;
    expect(el.textContent).toContain('Admin / Users / PaaS Sandbox / User Name');
  }));
  it('should render label title in a label', async(() => {
    const fixture = TestBed.createComponent(UserdetailsSandboxComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('label').textContent).toContain('Email');
  }));
});
