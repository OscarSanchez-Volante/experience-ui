import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidateUIComponent } from './validate-ui.component';

describe('ValidateUIComponent', () => {
  let component: ValidateUIComponent;
  let fixture: ComponentFixture<ValidateUIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidateUIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidateUIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
