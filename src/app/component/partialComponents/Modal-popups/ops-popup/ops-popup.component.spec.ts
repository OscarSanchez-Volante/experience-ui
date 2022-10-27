import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpsPopupComponent } from './ops-popup.component';

describe('OpsPopupComponent', () => {
  let component: OpsPopupComponent;
  let fixture: ComponentFixture<OpsPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpsPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpsPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
