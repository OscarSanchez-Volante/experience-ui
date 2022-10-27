import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManualTableComponent } from './manual-table.component';

describe('ManualTableComponent', () => {
  let component: ManualTableComponent;
  let fixture: ComponentFixture<ManualTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManualTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManualTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
