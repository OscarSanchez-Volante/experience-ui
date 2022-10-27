import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { PaymentRail1Component } from './payment-rail1.component';

describe('PaymentRail1Component', () => {
  let component: PaymentRail1Component;
  let fixture: ComponentFixture<PaymentRail1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentRail1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentRail1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it("should check button enabled", () => {
    const fixture = TestBed.createComponent(PaymentRail1Component);
    fixture.detectChanges();
    const button = fixture.debugElement.query(By.css("button"));
    expect(button.nativeElement.disabled).toBeFalsy();
  });
  it('should render title in bt-lg-cancel class', async(() => {
    const fixture = TestBed.createComponent(PaymentRail1Component);
    fixture.detectChanges();
    const el=fixture.debugElement.query(By.css('.bt-lg-cancel')).nativeElement;
    expect(el.textContent).toContain('Cancel');
  }));
  it('should render title in bt-lg-next class', async(() => {
    const fixture = TestBed.createComponent(PaymentRail1Component);
    fixture.detectChanges();
    const el=fixture.debugElement.query(By.css('.bt-lg-next')).nativeElement;
    expect(el.textContent).toContain('Save Changes');
  }));
});
