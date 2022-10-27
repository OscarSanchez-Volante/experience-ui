import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { VolBannerpageComponent } from './vol-bannerpage.component';

describe('VolBannerpageComponent', () => {
  let component: VolBannerpageComponent;
  let fixture: ComponentFixture<VolBannerpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VolBannerpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VolBannerpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should render sub title tag as Gain the Freedom to Evolve Fast.', async(() => {
    // fetch debug element
    let h1El = fixture.debugElement.query(By.css('.service'));
    expect(h1El.nativeElement.textContent).toContain('Gain the Freedom to Evolve Fast.');
    }));
    it('should render  title tag as Gain the Freedom to Evolve Fast.', async(() => {
      // fetch debug element
      let h1El = fixture.debugElement.query(By.css('.header-main'));
      expect(h1El.nativeElement.textContent).toContain('Your Trusted Cloud Payments Modernization Partner');
      }));
});
