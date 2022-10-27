import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { VolMainpageComponent } from './vol-mainpage.component';

describe('VolMainpageComponent', () => {
  let component: VolMainpageComponent;
  let fixture: ComponentFixture<VolMainpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VolMainpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VolMainpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should render  title tag as Get started with the worlds most advanced', async(() => {
    // fetch debug element
    let h1El = fixture.debugElement.query(By.css('.get'));
    expect(h1El.nativeElement.textContent).toContain('Get started with the worlds most advanced');
    }));
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it("should check button enabled", () => {
    const fixture = TestBed.createComponent(VolMainpageComponent);
    fixture.detectChanges();
    const button = fixture.debugElement.query(By.css("button"));
    expect(button.nativeElement.disabled).toBeFalsy();
  });
  it('should render title as GET STARTED in bt-lg-login class', async(() => {
    const fixture = TestBed.createComponent(VolMainpageComponent);
    fixture.detectChanges();
    const el=fixture.debugElement.query(By.css('.bt-lg-login')).nativeElement;
    expect(el.textContent).toContain('GET STARTED');
   
  }));
  it('should render sign-up button', async(() => {
    const fixture = TestBed.createComponent(VolMainpageComponent);
    fixture.detectChanges();
    const el=fixture.debugElement.query(By.css('.login-pos')).nativeElement;
    expect(el.textContent).toContain('SIGN UP');
   
  }));
});
