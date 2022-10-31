import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { FormBuilder, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { InputWizardComponent } from './input-wizard.component';

describe('InputWizardComponent', () => {
  let component: InputWizardComponent;
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
      declarations: [ InputWizardComponent ],
      providers: [FormBuilder] 
    })
    .compileComponents()
    let fixture = TestBed.createComponent(InputWizardComponent);
    fixture = TestBed.createComponent(InputWizardComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
  
  }));


  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(InputWizardComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it('should render title in Add-Transactions class ', async(() => {
    const fixture = TestBed.createComponent(InputWizardComponent);
    fixture.detectChanges();
      const el=fixture.debugElement.query(By.css('.Add-Transactions')).nativeElement;
    expect(el.textContent).toContain('Add Transactions');
  }));

  it('should render button name bt-lg-next', async(() => {
    const fixture = TestBed.createComponent(InputWizardComponent);
    fixture.detectChanges();
    const btn=fixture.debugElement.query(By.css('.bt-lg-next')).nativeElement;
    expect(btn.textContent).toContain('Save & Add Transaction');
   
  }));
  it('should render button name bt-lg-login', async(() => {
    const fixture = TestBed.createComponent(InputWizardComponent);
    fixture.detectChanges();
    const btn1=fixture.debugElement.query(By.css('.bt-lg-login')).nativeElement;
    expect(btn1.textContent).toContain('Reset');
   
  }));



 
});
