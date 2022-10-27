import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityNotePopupComponent } from './activity-note-popup.component';

describe('ActivityNotePopupComponent', () => {
  let component: ActivityNotePopupComponent;
  let fixture: ComponentFixture<ActivityNotePopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivityNotePopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityNotePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
