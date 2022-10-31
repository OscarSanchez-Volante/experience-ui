import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { FtuDashboardscreenComponent } from './ftu-dashboardscreen.component';

describe('FtuDashboardscreenComponent', () => {
  let component: FtuDashboardscreenComponent;
  let fixture: ComponentFixture<FtuDashboardscreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FtuDashboardscreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FtuDashboardscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
