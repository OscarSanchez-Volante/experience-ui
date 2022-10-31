import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { NodataMsgftudashboardComponent } from './nodata-msgftudashboard.component';

describe('NodataMsgftudashboardComponent', () => {
  let component: NodataMsgftudashboardComponent;
  let fixture: ComponentFixture<NodataMsgftudashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NodataMsgftudashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NodataMsgftudashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should render  title tag as Dashboard', async(() => {
    let h1El = fixture.debugElement.query(By.css('.dashtxt'));
    expect(h1El.nativeElement.textContent).toContain('Dashboard');
    }));
    it('should render  title in railText class ', async(() => {
      let h1El = fixture.debugElement.query(By.css('.railText'));
      expect(h1El.nativeElement.textContent).toContain('Messaging Transactions');
      }));
});
