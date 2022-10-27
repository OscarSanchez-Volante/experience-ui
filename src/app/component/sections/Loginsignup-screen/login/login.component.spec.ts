import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { FormBuilder, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
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
      declarations: [LoginComponent],
      providers: [FormBuilder]  
    }).compileComponents()

    let fixture = TestBed.createComponent(LoginComponent);
      // create component and test fixture
      fixture = TestBed.createComponent(LoginComponent);

      // get test component from the fixture
      component = fixture.componentInstance;
      component.ngOnInit();
    
  }))

  

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(LoginComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(LoginComponent);
    fixture.detectChanges();
      const el=fixture.debugElement.query(By.css('.text-style')).nativeElement;
    expect(el.textContent).toContain('We are a global financial technology company, with two decades of experience serving as trusted strategic partners for financial institutions of all sizes.');
  }));

  

  it('should render label title in a label', async(() => {
    const fixture = TestBed.createComponent(LoginComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('label').textContent).toContain('Username (Email Address)');
  }));


 


  it('should render title in bt-lg-login class', async(() => {
    const fixture = TestBed.createComponent(LoginComponent);
    fixture.detectChanges();
    const el=fixture.debugElement.query(By.css('.bt-lg-login')).nativeElement;
    expect(el.textContent).toContain('NEXT');
    const accountBtn =fixture.debugElement.query(By.css('.bt-lg')).nativeElement;
    expect(accountBtn.textContent).toContain('Request Account');
  }));

  
  

  it("should check button enabled", () => {
    const fixture = TestBed.createComponent(LoginComponent);
    fixture.detectChanges();
    const button = fixture.debugElement.query(By.css("button"));
    expect(button.nativeElement.disabled).toBeFalsy();
  });


  it('form invalid when empty', () => {
    expect(component.registerForm.valid).toBeFalsy();
  });

  it('userName field validity', () => {
    let email = component.registerForm.controls['userName'];
    expect(email.valid).toBeFalsy(); 
  });


  it('userName field validity', () => {
    let errors = {};
    let userName = component.registerForm.controls['userName'];
    errors = userName.errors || {};
    expect(errors['required']).toBeTruthy(); 
  });


 
  it('should render title in forgot-btn class', async(() => {
    const fixture = TestBed.createComponent(LoginComponent);
    fixture.detectChanges();
    const el=fixture.debugElement.query(By.css('.forgot-btn')).nativeElement;
    expect(el.textContent).toContain('Forgot Password?');
  }));
  });