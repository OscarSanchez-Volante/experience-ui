import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { OpsDashboardComponent } from './ops-dashboard.component';

describe('OpsDashboardComponent', () => {
  let component: OpsDashboardComponent;
  let fixture: ComponentFixture<OpsDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpsDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should render  title tag as Operations Dashboard', async(() => {
    let h1El = fixture.debugElement.query(By.css('.dashboard'));
    expect(h1El.nativeElement.textContent).toContain('Operations Dashboard');
    }));
  
  
     it('should render title in filt class', async(() => {
      const fixture = TestBed.createComponent(OpsDashboardComponent);
      fixture.detectChanges();
      const el=fixture.debugElement.query(By.css('.filt')).nativeElement;
      expect(el.textContent).toContain('Filters');
    }));
    it('should render button name in button1class', async(() => {
      const fixture = TestBed.createComponent(OpsDashboardComponent);
      fixture.detectChanges();
      const accountBtn =fixture.debugElement.query(By.css('.button1')).nativeElement;
      expect(accountBtn.textContent).toContain('Customer Credit Transfer');
    }));
   
   


     it("should check button enabled", () => {
      const fixture = TestBed.createComponent(OpsDashboardComponent);
      fixture.detectChanges();
      const button = fixture.debugElement.query(By.css("button"));
      expect(button.nativeElement.disabled).toBeFalsy();
    });


 
});
