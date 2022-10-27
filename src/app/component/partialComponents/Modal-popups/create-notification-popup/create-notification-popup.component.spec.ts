import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNotificationPopupComponent } from './create-notification-popup.component';

describe('CreateNotificationPopupComponent', () => {
  let component: CreateNotificationPopupComponent;
  let fixture: ComponentFixture<CreateNotificationPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateNotificationPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateNotificationPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
