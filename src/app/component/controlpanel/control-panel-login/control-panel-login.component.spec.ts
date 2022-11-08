import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlPanelLoginComponent } from './control-panel-login.component';

describe('ControlPanelLoginComponent', () => {
  let component: ControlPanelLoginComponent;
  let fixture: ComponentFixture<ControlPanelLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControlPanelLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlPanelLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
