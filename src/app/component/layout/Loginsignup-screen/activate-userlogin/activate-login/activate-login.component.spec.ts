import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivateLoginComponent } from './activate-login.component';

describe('ActivateLoginComponent', () => {
  let component: ActivateLoginComponent;
  let fixture: ComponentFixture<ActivateLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivateLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivateLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
