import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminuserSandboxComponent } from './adminuser-sandbox.component';

describe('AdminuserSandboxComponent', () => {
  let component: AdminuserSandboxComponent;
  let fixture: ComponentFixture<AdminuserSandboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminuserSandboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminuserSandboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
