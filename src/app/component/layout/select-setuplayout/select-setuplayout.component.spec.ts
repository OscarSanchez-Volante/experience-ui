import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectSetuplayoutComponent } from './select-setuplayout.component';

describe('SelectSetuplayoutComponent', () => {
  let component: SelectSetuplayoutComponent;
  let fixture: ComponentFixture<SelectSetuplayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectSetuplayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectSetuplayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
