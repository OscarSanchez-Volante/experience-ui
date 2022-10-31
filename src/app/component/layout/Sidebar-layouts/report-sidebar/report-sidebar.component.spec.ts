import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ReportSidebarComponent } from './report-sidebar.component';

describe('ReportSidebarComponent', () => {
  let component: ReportSidebarComponent;
  let fixture: ComponentFixture<ReportSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should render title tag as Sizing Info for FED-WIRE', async(() => {
    const fixture = TestBed.createComponent(ReportSidebarComponent);
    fixture.detectChanges();
      const el=fixture.debugElement.query(By.css('.modal-title')).nativeElement;
    expect(el.textContent).toContain('Sizing Info for FED-WIRE');
  }));
  
   it('should render title in but-lg-can class', async(() => {
    const fixture = TestBed.createComponent(ReportSidebarComponent);
    fixture.detectChanges();
    const el=fixture.debugElement.query(By.css('.but-lg-can')).nativeElement;
    expect(el.textContent).toContain('CLOSE');
  }));
  it('should render title in but-lg-can class', async(() => {
    const fixture = TestBed.createComponent(ReportSidebarComponent);
    fixture.detectChanges();
    const el=fixture.debugElement.query(By.css('.but-lg')).nativeElement;
    expect(el.textContent).toContain('SAVE');
  }));
  it("should check button enabled", () => {
    const fixture = TestBed.createComponent(ReportSidebarComponent);
    fixture.detectChanges();
    const button = fixture.debugElement.query(By.css("button"));
    expect(button.nativeElement.disabled).toBeFalsy();
  });
});
