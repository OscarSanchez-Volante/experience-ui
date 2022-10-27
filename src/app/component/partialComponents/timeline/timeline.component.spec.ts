import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { TimelineComponent } from './timeline.component';

describe('TimelineComponent', () => {
  let component: TimelineComponent;
  let fixture: ComponentFixture<TimelineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimelineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

    it('Log out button should work', async(() => {
      fixture.detectChanges();
      let buttonElement = fixture.debugElement.query(By.css('.bt-lg'));
      let Login = fixture.debugElement.nativeElement.querySelector('Log out');
     }));
     it('should render title in a p tag', async(() => {
      const fixture = TestBed.createComponent( TimelineComponent);
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('p').textContent)
      }));
});
