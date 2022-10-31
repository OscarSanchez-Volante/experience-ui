import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { FormBuilder, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SignupComponent } from './signup.component';

describe('SignupComponent', () => {
  let component: SignupComponent;
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
      declarations: [SignupComponent],
      providers: [FormBuilder]  
    }).compileComponents()

    let fixture = TestBed.createComponent(SignupComponent);
      fixture = TestBed.createComponent(SignupComponent);
      component = fixture.componentInstance;
      component.ngOnInit();
    
  }))


  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(SignupComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should render title in a p tag', async(() => {
    const fixture = TestBed.createComponent(SignupComponent);
    fixture.detectChanges();
      const el=fixture.debugElement.query(By.css('.text-style')).nativeElement;
    expect(el.textContent).toContain('We are a global financial technology company, with two decades of experience serving as trusted strategic partners for financial institutions of all sizes.');
  }));

  it('should render title in bt-lg-login class', async(() => {
    const fixture = TestBed.createComponent(SignupComponent);
    fixture.detectChanges();
    const el=fixture.debugElement.query(By.css('.bt-lg-login')).nativeElement;
    expect(el.textContent).toContain('CREATE ACCOUNT');
    const accountBtn =fixture.debugElement.query(By.css('.bt-lg')).nativeElement;
    expect(accountBtn.textContent).toContain('Login Here');
  }));

  
  

  it("should check button enabled", () => {
    const fixture = TestBed.createComponent(SignupComponent);
    fixture.detectChanges();
    const button = fixture.debugElement.query(By.css("button"));
    expect(button.nativeElement.disabled).toBeFalsy();
  });


  it('form invalid when empty', () => {
    expect(component.registerForm.valid).toBeFalsy();
  });
  it('password field validity', () => {
    let password = component.registerForm.controls['password'];
    expect(password.valid).toBeFalsy(); 
  });
  it('institutionName field validity', () => {
    let institutionName = component.registerForm.controls['institutionName'];
    expect(institutionName.valid).toBeFalsy(); 
  });
  it('firstName field validity', () => {
    let firstName = component.registerForm.controls['firstName'];
    expect(firstName.valid).toBeFalsy(); 
  });

  it('password field validity', () => {
    let errors = {};
    let password = component.registerForm.controls['password'];
    errors = password.errors || {};
    expect(errors['required']).toBeTruthy(); 
  });
  it('title field validity', () => {
    let errors = {};
    let title = component.registerForm.controls['title'];
    errors = title.errors || {};
    expect(errors['required']).toBeTruthy(); 
  });
 
});
