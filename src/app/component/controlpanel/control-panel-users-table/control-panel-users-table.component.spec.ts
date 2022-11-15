import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlPanelUsersTableComponent } from './control-panel-users-table.component';

describe('ControlPanelUsersTableComponent', () => {
  let component: ControlPanelUsersTableComponent;
  let fixture: ComponentFixture<ControlPanelUsersTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControlPanelUsersTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlPanelUsersTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
