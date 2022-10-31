import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule, By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';

import { AdminuserContentComponent } from './adminuser-content.component';

describe('AdminuserContentComponent', () => {
  let component: AdminuserContentComponent;
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
      declarations: [ AdminuserContentComponent ],
      providers: [FormBuilder]  
    })
    .compileComponents()
    let fixture = TestBed.createComponent(AdminuserContentComponent);
    fixture = TestBed.createComponent(AdminuserContentComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
  }));


  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AdminuserContentComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

 
    it('should render title tag as Admin/Users/Messaging APIs', async(() => {
      const fixture = TestBed.createComponent(AdminuserContentComponent);
      fixture.detectChanges();
        const el=fixture.debugElement.query(By.css('.admin-header')).nativeElement;
      expect(el.textContent).toContain('Admin/Users/Messaging APIs');
    }));
});
