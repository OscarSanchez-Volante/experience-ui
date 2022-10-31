import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { OpsHeaderComponent } from './ops-header.component';

describe('OpsHeaderComponent', () => {
  let component: OpsHeaderComponent;
  let fixture: ComponentFixture<OpsHeaderComponent>;
  let router: Router;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        BrowserModule,
        RouterTestingModule.withRoutes([]),
      ],
      declarations: [ OpsHeaderComponent ]
    })
    .compileComponents()
    let fixture = TestBed.createComponent(OpsHeaderComponent);
    fixture = TestBed.createComponent(OpsHeaderComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
  }))


 

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
