import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FtuLayoutmessageComponent } from './ftu-layoutmessage.component';

describe('FtuLayoutmessageComponent', () => {
  let component: FtuLayoutmessageComponent;
  let fixture: ComponentFixture<FtuLayoutmessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FtuLayoutmessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FtuLayoutmessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
