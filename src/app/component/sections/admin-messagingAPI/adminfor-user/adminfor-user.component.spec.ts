import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminforUserComponent } from './adminfor-user.component';

describe('AdminforUserComponent', () => {
  let component: AdminforUserComponent;
  let fixture: ComponentFixture<AdminforUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminforUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminforUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
