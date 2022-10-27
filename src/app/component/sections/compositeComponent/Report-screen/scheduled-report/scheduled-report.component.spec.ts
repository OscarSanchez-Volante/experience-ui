import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ScheduledReportComponent } from './scheduled-report.component';

describe('ScheduledReportComponent', () => {
  let component: ScheduledReportComponent;
  let fixture: ComponentFixture<ScheduledReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScheduledReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduledReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it("should check button enabled", () => {
    const fixture = TestBed.createComponent(ScheduledReportComponent);
    fixture.detectChanges();
    const button = fixture.debugElement.query(By.css("button"));
    expect(button.nativeElement.disabled).toBeFalsy();
  });
  it('should render title as Add New Report in button', async(() => {
    const fixture = TestBed.createComponent(ScheduledReportComponent);
    fixture.detectChanges();
    const el=fixture.debugElement.query(By.css('.bt-lg-login')).nativeElement;
    expect(el.textContent).toContain('Add new Report');
   
  }));
});
