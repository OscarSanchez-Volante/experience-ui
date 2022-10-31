import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule, By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';

import { AdminUserDetailsComponent } from './admin-user-details.component';

describe('AdminUserDetailsComponent', () => {
  let component: AdminUserDetailsComponent;
  let router: Router;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'}),
        RouterTestingModule.withRoutes([]),
      ],
      declarations: [ AdminUserDetailsComponent ],
      providers: [FormBuilder]  
    })
    .compileComponents();
    let fixture = TestBed.createComponent(AdminUserDetailsComponent);
    fixture = TestBed.createComponent(AdminUserDetailsComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
  }));



  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AdminUserDetailsComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
    it('should render title tag as Admin / Users / Messaging APIs / User Name', async(() => {
      const fixture = TestBed.createComponent(AdminUserDetailsComponent);
      fixture.detectChanges();
        const el=fixture.debugElement.query(By.css('.admin-header')).nativeElement;
      expect(el.textContent).toContain('Admin / Users / Messaging APIs / User Name');
    }));
    it('should render label title in a label', async(() => {
      const fixture = TestBed.createComponent(AdminUserDetailsComponent);
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('label').textContent).toContain('Email');
    }));
});
