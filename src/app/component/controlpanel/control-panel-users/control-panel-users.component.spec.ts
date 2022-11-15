import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlPanelUsersComponent } from './control-panel-users.component';

describe('ControlPanelUsersComponent', () => {
  let component: ControlPanelUsersComponent;
  let fixture: ComponentFixture<ControlPanelUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControlPanelUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlPanelUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
