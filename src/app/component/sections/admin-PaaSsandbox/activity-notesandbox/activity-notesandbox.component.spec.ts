import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityNotesandboxComponent } from './activity-notesandbox.component';

describe('ActivityNotesandboxComponent', () => {
  let component: ActivityNotesandboxComponent;
  let fixture: ComponentFixture<ActivityNotesandboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivityNotesandboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityNotesandboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
