import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpsLinechartComponent } from './ops-linechart.component';

describe('OpsLinechartComponent', () => {
  let component: OpsLinechartComponent;
  let fixture: ComponentFixture<OpsLinechartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpsLinechartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpsLinechartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
