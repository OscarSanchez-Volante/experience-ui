import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { BadgeComponent } from './badge.component';

describe('BadgeComponent', () => {
  let component: BadgeComponent;
  let fixture: ComponentFixture<BadgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BadgeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('Notification button should work on click.', async(() => {
    fixture.detectChanges();
    let buttonElement = fixture.debugElement.query(By.css('.btn'));
    let badge = fixture.debugElement.nativeElement.querySelector('badge');
  
   }));
   it('Inbox button should work on click.', async(() => {
    fixture.detectChanges();
    let buttonElement = fixture.debugElement.query(By.css('.btn'));
    let badge = fixture.debugElement.nativeElement.querySelector('badge');
  
   }));
});
