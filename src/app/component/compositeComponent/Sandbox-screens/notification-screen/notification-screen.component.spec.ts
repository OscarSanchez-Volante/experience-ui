import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationScreenComponent } from './notification-screen.component';

describe('NotificationScreenComponent', () => {
  let component: NotificationScreenComponent;
  let fixture: ComponentFixture<NotificationScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificationScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
