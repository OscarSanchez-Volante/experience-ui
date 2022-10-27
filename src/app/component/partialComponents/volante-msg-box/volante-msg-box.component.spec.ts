import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { FormBuilder, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { VolanteMsgBoxComponent } from './volante-msg-box.component';

describe('VolanteMsgBoxComponent', () => {
  let component: VolanteMsgBoxComponent;
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
      declarations: [ VolanteMsgBoxComponent ],
      providers: [FormBuilder] 
    })
    .compileComponents()
    let fixture = TestBed.createComponent(VolanteMsgBoxComponent);
    fixture = TestBed.createComponent(VolanteMsgBoxComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(VolanteMsgBoxComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
