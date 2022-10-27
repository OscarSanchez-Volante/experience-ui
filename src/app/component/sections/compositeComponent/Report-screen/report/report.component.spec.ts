import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ReportComponent } from './report.component';

describe('ReportComponent', () => {
  let component: ReportComponent;
  let fixture: ComponentFixture<ReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should render  title tag as Reports', async(() => {
    // fetch debug element
    let h1El = fixture.debugElement.query(By.css('.Transactions'));
    expect(h1El.nativeElement.textContent).toContain('Reports');
    }));
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it("should check button enabled", () => {
    const fixture = TestBed.createComponent(ReportComponent);
    fixture.detectChanges();
    const button = fixture.debugElement.query(By.css("button"));
    expect(button.nativeElement.disabled).toBeFalsy();
  });
  it('should render title as Add New Report in button', async(() => {
    const fixture = TestBed.createComponent(ReportComponent);
    fixture.detectChanges();
    const el=fixture.debugElement.query(By.css('.addnew-button')).nativeElement;
    expect(el.textContent).toContain('Add New Report');
   
  }));
});
