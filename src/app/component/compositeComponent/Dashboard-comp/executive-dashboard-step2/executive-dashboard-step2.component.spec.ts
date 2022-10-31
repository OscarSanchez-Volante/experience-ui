import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExecutiveDashboardStep2Component } from './executive-dashboard-step2.component';

describe('ExecutiveDashboardStep2Component', () => {
  let component: ExecutiveDashboardStep2Component;
  let fixture: ComponentFixture<ExecutiveDashboardStep2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExecutiveDashboardStep2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExecutiveDashboardStep2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
