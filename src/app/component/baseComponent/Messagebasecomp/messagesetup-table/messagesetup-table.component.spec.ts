import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagesetupTableComponent } from './messagesetup-table.component';

describe('MessagesetupTableComponent', () => {
  let component: MessagesetupTableComponent;
  let fixture: ComponentFixture<MessagesetupTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessagesetupTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessagesetupTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
