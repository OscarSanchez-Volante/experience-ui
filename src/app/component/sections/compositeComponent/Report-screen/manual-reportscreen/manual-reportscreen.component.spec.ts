import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ManualReportscreenComponent } from './manual-reportscreen.component';

describe('ManualReportscreenComponent', () => {
  let component: ManualReportscreenComponent;
  let fixture: ComponentFixture<ManualReportscreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManualReportscreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManualReportscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it("should check button enabled", () => {
    const fixture = TestBed.createComponent(ManualReportscreenComponent);
    fixture.detectChanges();
    const button = fixture.debugElement.query(By.css("button"));
    expect(button.nativeElement.disabled).toBeFalsy();
  });
  it('should render title as Add New Report in button', async(() => {
    const fixture = TestBed.createComponent(ManualReportscreenComponent);
    fixture.detectChanges();
    const el=fixture.debugElement.query(By.css('.bt-lg-login')).nativeElement;
    expect(el.textContent).toContain('Add new Report');
   
  }));
});
