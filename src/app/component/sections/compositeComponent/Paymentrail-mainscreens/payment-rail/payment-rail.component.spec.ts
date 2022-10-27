import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { PaymentRailComponent } from './payment-rail.component';

describe('PaymentRailComponent', () => {
  let component: PaymentRailComponent;
  let fixture: ComponentFixture<PaymentRailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentRailComponent ]
    })
    .compileComponents();
  })); 

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentRailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => { 
    expect(component).toBeTruthy();
  });
    it("should check button enabled", () => {
      const fixture = TestBed.createComponent(PaymentRailComponent);
      fixture.detectChanges();
      const button = fixture.debugElement.query(By.css("button"));
      expect(button.nativeElement.disabled).toBeFalsy();
    });
    it('should render title in bt-lg-cancel class', async(() => {
      const fixture = TestBed.createComponent(PaymentRailComponent);
      fixture.detectChanges();
      const el=fixture.debugElement.query(By.css('.bt-lg-cancel')).nativeElement;
      expect(el.textContent).toContain('Cancel');
    }));
    it('should render title in bt-lg-next class', async(() => {
      const fixture = TestBed.createComponent(PaymentRailComponent);
      fixture.detectChanges();
      const el=fixture.debugElement.query(By.css('.bt-lg-next')).nativeElement;
      expect(el.textContent).toContain('Save Changes');
    }));
});
