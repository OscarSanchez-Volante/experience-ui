import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmbarChartComponent } from './ambar-chart.component';

describe('AmbarChartComponent', () => {
  let component: AmbarChartComponent;
  let fixture: ComponentFixture<AmbarChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmbarChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmbarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
