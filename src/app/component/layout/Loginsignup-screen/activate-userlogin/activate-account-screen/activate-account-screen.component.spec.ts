import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivateAccountScreenComponent } from './activate-account-screen.component';

describe('ActivateAccountScreenComponent', () => {
  let component: ActivateAccountScreenComponent;
  let fixture: ComponentFixture<ActivateAccountScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivateAccountScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivateAccountScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
