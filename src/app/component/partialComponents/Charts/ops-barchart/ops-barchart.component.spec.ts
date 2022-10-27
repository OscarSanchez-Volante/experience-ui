import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpsBarchartComponent } from './ops-barchart.component';

describe('OpsBarchartComponent', () => {
  let component: OpsBarchartComponent;
  let fixture: ComponentFixture<OpsBarchartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpsBarchartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpsBarchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
