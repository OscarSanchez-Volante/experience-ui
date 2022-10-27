import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { FormBuilder, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { LoginScreen1Component } from './login-screen1.component';

describe('LoginScreen1Component', () => {
  let component: LoginScreen1Component;
  let mockAuthService: jasmine.SpyObj<any>;
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
      declarations: [LoginScreen1Component],
      providers: [FormBuilder]  
    }).compileComponents()

    let fixture = TestBed.createComponent(LoginScreen1Component);
      fixture = TestBed.createComponent(LoginScreen1Component);
      component = fixture.componentInstance;
      component.ngOnInit();
  }))
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(LoginScreen1Component);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it('form invalid when empty', () => {
    expect(component.registerForm.valid).toBeFalsy();
  });

  it('password field validity', () => {
    let email = component.registerForm.controls['password'];
    expect(email.valid).toBeFalsy(); 
  });
  it('password field validity', () => {
    let errors = {};
    let password = component.registerForm.controls['password'];
    errors = password.errors || {};
    expect(errors['required']).toBeTruthy(); 
  });
});
